Comagic.UI.registerViewController('sitephone', function (settings, tpls) {
    var newWidgets = function () {
            var widgetsName = Array.prototype.slice.call(arguments);
            var internalWidgets = {
                do: function (methodName, params, context) {
                    (context || widgetsName).forEach(function (widgetName) {
                        if (widgetName === 'rack' && methodName === 'render') {
                            var renderTo = internalWidgets[widgetName].getRenderTo(),
                                el = renderTo.querySelector('.comagic-o-rack--' + settings.h_position + '.comagic-o-rack--' + settings.v_position);
                            if (el) {
                                internalWidgets[widgetName].attachEl(el);
                                return;
                            }
                        }
                        internalWidgets[widgetName][methodName].apply(internalWidgets[widgetName], params);
                    });
                }
            };
            widgetsName.forEach(function (name) {
                internalWidgets[name] = Comagic.UI.createWidget(name, {
                    isShowWithVisibilityObserver: true,
                    settings: settings,
                    tpl: tpls[name],
                    getHelperSelector: function () {
                        return 'comagic-js-' + this.name.replace(new RegExp('_', 'g'), '-');
                    },
                    show: function (isApi) {
                        var me = this;
                        if (isApi) {
                            visibilityObserver.pub(name);
                            return false;
                        } else {
                            setTimeout(function () {
                                me.getEl().classList.remove(me.getHelperSelector() + '--hidden');
                                me.getEl().classList.add(me.getHelperSelector() + '--shown');
                            }, 0);
                        }
                    },
                    hide: function (isApi) {
                        var me = this;
                        me.getEl().classList.remove(me.getHelperSelector() + '--shown');
                        me.getEl().classList.add(me.getHelperSelector() + '--hidden');
                    }
                });
            });

            return internalWidgets;
        },
        widgets = newWidgets('sitephone_label', 'rack', 'sitephone'),
        renderToBodyWidgets = ['rack', 'sitephone'],
        widgetSitephone = widgets['sitephone'],
        visibilityObserver;

    function rulesReducer(action) {
        var isVisibleSitephoneLabel = settings.is_visible && (settings.is_schedule_active || settings.is_always_displayed);
        return {
            sitephone_label: (function () {
                switch (action) {
                    case 'rack':
                        return isVisibleSitephoneLabel;
                    case 'sitephone':
                        return false;
                    default:
                        return false
                }
            })(),
            rack: (function () {
                switch (action) {
                    case 'sitephone_label':
                    case 'rack':
                        return true;
                    case 'sitephone':
                        return false;
                    default:
                        return false
                }
            })(),
            sitephone: (function () {
                switch (action) {
                    case 'sitephone_label':
                    case 'rack':
                        return false;
                    case 'sitephone':
                        return true;
                    default:
                        return false
                }
            })()
        };
    }

    function updateVisibility(rules) {
        for (var wName in rules) {
            if (rules.hasOwnProperty(wName)) {
                if (widgets[wName]) {
                    if (rules[wName]) {
                        !widgets[wName].isVisible() && widgets[wName].show();
                    } else {
                        widgets[wName].isVisible() && widgets[wName].hide();
                    }
                }
            }
        }
    }

    function afterSubmit(config) {
        var widget = Comagic.UI.getWidget(config.widgetName);
        return function (answer) {
            var className = config.feedbackClassName || 'comagic-js-show-feedback--' + (answer.success ? 'success' : 'failure');
            if (widget.refs['content']) {
                widget.refs['content'].classList.add(className);
                if (answer.info) {
                    widget.refs['feedbackTitle'].innerHTML = answer.info.title;
                    widget.refs['feedbackMessage'].innerHTML = answer.info.message;
                }
            }

            window.setTimeout(function () {
                if (config.doAfterSubmit) {
                    config.doAfterSubmit(answer);
                }
                if (config.isClear) {
                    widget.refs['content'].classList.remove(className);
                }
            }, config.delayAfterSubmit || 3000);
        }
    }

    function updateCaptcha() {
        if (widgets['sitephone'].refs['captchaImg']
            && widgets['sitephone'].refs['captcha']
            && widgets['sitephone'].refs['captchaKey']) {
            Comagic.getCaptcha(function (data) {
                widgets['sitephone'].refs['captchaImg'].src = data.url;
                widgets['sitephone'].refs['captcha'].innerHTML = '';
                widgets['sitephone'].refs['captchaKey'].innerHTML = data.key;
            }, {'bg': '#ed6b21'});
        }
    }

    widgets.do('render', null, renderToBodyWidgets);
    widgets.do('render', [widgets['rack'].getEl()], ['sitephone_label']);


    //sitephones
    widgets['sitephone_label'].refs['trigger'].addEventListener('click', function () {
        visibilityObserver.pub(widgetSitephone.name);
    });
    widgetSitephone.on('show', updateCaptcha);
    widgets['sitephone'].refs['closeBtn'].addEventListener('click', function () {
        visibilityObserver.pub('rack');
    });
    widgets['sitephone'].refs['submitBtn'].addEventListener('click', function () {
        if (!widgets['sitephone'].getErrors()) {
            widgets['sitephone'].refs['submitBtn'].classList.add('comagic-js-button--disabled');
            widgets['sitephone'].startCall(widgets['sitephone'].getValues());
        }
    });
    widgetSitephone.refs['captchaUpdateBtn'] && widgetSitephone.refs['captchaUpdateBtn'].addEventListener('click', updateCaptcha);
    if (settings.delayed_call_times) {
        function setDelayedCallBlockState(enabled) {
            widgets['sitephone'].refs['date'][enabled ? 'removeAttribute' : 'setAttribute']('c-disabled', '');
            widgets['sitephone'].refs['delayedCallTime'][enabled ? 'removeAttribute' : 'setAttribute']('c-disabled', '');
        }

        function setDelayedCallTimeDisable(isDisabled) {
            widgets['sitephone'].refs['delayedCallTimeCustomSelect'].classList[isDisabled ? 'add' : 'remove']('comagic-js-select-disabled');
        }

        setDelayedCallBlockState(!widgets['sitephone'].getEl('.comagic-js-date-fields--is-active'));
        setDelayedCallTimeDisable(true);
        widgets['sitephone'].refs['dateChangeTrigger'].addEventListener('click', function () {
            setDelayedCallBlockState(true);
            widgets['sitephone'].refs['dateFields'].classList.add('comagic-js-date-fields--is-call-without-delay');
        });
        widgets['sitephone'].refs['dateNowTrigger'].addEventListener('click', function () {
            setDelayedCallBlockState(false);
            setDelayedCallTimeDisable(true);
            widgets['sitephone'].refs['delayedCallTime'].value = null;
            widgets['sitephone'].refs['delayedCallTimeCustomSelect'].innerHTML = ''; //change event doesn`t work after change value from js code
            widgets['sitephone'].refs['date'].value = null;
            widgets['sitephone'].refs['dateCustomSelect'].innerHTML = '';
            widgets['sitephone'].refs['dateFields'].classList.remove('comagic-js-date-fields--is-call-without-delay');
        });
        widgets['sitephone'].refs['date'].addEventListener('change', function () {
            var selectedOption = widgets['sitephone'].refs['date'].options[widgets['sitephone'].refs['date'].selectedIndex],
                delayedCallTimeObj = settings.delayed_call_times[selectedOption.value];
            widgets['sitephone'].refs['delayedCallTime'].innerHTML = Comagic.UI.createEl(tpls['sitephone_times_options'], delayedCallTimeObj).innerHTML; //TODO просто компилить
            widgets['sitephone'].refs['delayedCallTime'].value = null;
            setDelayedCallTimeDisable(false);
        });
    }

    widgets['sitephone'].on('callcomplete', afterSubmit({
        widgetName: 'sitephone',
        isClear: true,
        doAfterSubmit: function (answer) {
            if (widgets['sitephone'].isVisible()) {
                widgets['sitephone'].refs['submitBtn'].classList.remove('comagic-js-button--disabled');
                updateCaptcha();
                if (answer.success) {
                    visibilityObserver.pub('rack');
                }
            }
        }
    }));

    //set visibility props
    visibilityObserver = Comagic.UI.createObserver(rulesReducer);
    visibilityObserver.sub(updateVisibility);
    visibilityObserver.pub('hide_all');
    visibilityObserver.pub('rack');

    //abtesting
    Comagic.trackEvent('Sitephoneh1A', 'Sitephoneh1A');

    widgetSitephone.on('show', function () {
        Comagic.trackEvent('Sitephoneh1_A_SHOW', 'Sitephoneh1_A_SHOW');
    });

    Comagic.on('sleep', function () {
        visibilityObserver.pub('hide_all');
    })
});