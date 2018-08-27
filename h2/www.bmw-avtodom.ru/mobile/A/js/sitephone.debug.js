Comagic.UI.registerViewController('sitephone', function (settings, tpls) {
    var links = [
        {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVcSURBVGhD7Zl3qHM1HEDr3nvg9hMV98YJ7o0oirgnKoIDB04UJ6K4Ebcf+pe4FfcW996oqLhx4d57npM0vrTv3ra37XtfwR44kKTtbZPcm/zya23IkCFD/rfMgOvhoXg+3oD31b0TL8eTcFtcCAeKWXBfvB//wH/q/o7v4xv4Ir6DP2F6Xd/EM3AZnGTMi+fh9+iP+gQvxp1xUZwSi5gDN8Lj8Cn8C/38g7ghjhtT47H4A/ojbsWNcXLshoXxFPwS7dC9uDiOKUvjC5hGcCXsFzPjCfhz3QNxTNgSnYXvcA8bOsQFYLFY7Ahn41F0sK7BabFv7IN/4uvY7kcdjVvHYuBUdAASjvwVOH+oFePz5SJgZx5CP9Mzu6PPwiM4mw1tcIV6NhYDF6E/KLELWl8n1Frj7eV3extPb0O3rI/OxJNYNirP4+mxGDgLXXoTW+FVsRg4G52haUKtVlsSv8W1Q200+6Edd0+azIaqOPWf4bs4uw0lXInuH0uEWq02K64Zi4XMjavEYuA29OFeMNSKSbfZ4aFWkdvxF1wx1EZwiteNxYAdfg5XCLXq+EAfHIuBBXDZWPyPKfAB/A0rbZ7boSNwTKg1sj36mg9xv7EDn+PjodaI+4235GPY0S3mivE2vopT2dCEr1+HdmaCDX3kJvwKy/anw9Dv3SbU2rAb+uYdQq0YO5Pf5/3C26rVsjwdfoQvhVobnkaDuTzkcGaeQEOJGW3oIwace8ZiA5uhq2W+J8kR6ECXrXIBHyTf5KaW48N2I/ra9Tb0CZ9Br3lpqI3gHmO7gegaNmTMib+im2opRqRewCkuwuh0rVjsmdQJl18D0RyPBntj2ezfgV+gA1zIw/haLI4pqRMu8c2d6ARvRz+/Wqg14QPslBlS5ByPd6FrfdEqVpUqnXBjnYgOsOeYxHLoNQojZHdmX9w/1EYwRHCl8LVeT3JVZ8JTp4PrrTSTDXW8pWy/LNSaMEz3SzwkFZGPSBW83q54MlbphLjclgWLHqHvicVG0v7RHJL0woXoNZMmILp5JoowIn45FhtJUWZ+zPRWOC0WK+OtkM7jySOxG5ZHQxNXs4Qz6/loFC53fln+HPiQO4XdYJhu0Jl35CDshjTIhvwJO+LGPQrjF99sXiphTPVpLHbFAZhSREYM3UYFaZGYL9QiHoeficVG0m5q8izhgelvzFeMqpg2MsQv3bw6wJ3f2c2vYWDrZjoKc1F2xAgzYQxkW792824x/5UHiu5nzrSnzUI8Ed4ci4FF0I6cGGqTBk+nHrdNwSZWRX9XUbAZ8FxsDJMfXFwZCpe5JjxweQtU0RFtl1RI28LmoRYxt2xbaSLPMMQ3rBxqESNh25qj0GYcsa8r+h62On+IobxRsCFUwoyOuYRSvKj33iWhFpkLf8RbQm18MTfgIBrvJcziuz/lmZtCPHd4Ns7TP2eiF9wk1NpjdHBUiXthJ7hCmSPz6JtvhGZUXEmXCrUWmCn3R+epFzv1Ifo3QavUUMLR8hpFfoOdJNvMA/t+s5wJ4z1zYHeHWht80M1imOPNN6BN0dXDSLSTPcGsZJEpMdeKLdDvMrLIF55z0dlYPdQ6wA3MZ+XqUBvBvxMcJZNyvWxwrXBj9g+ht9BkX8Jkh527NtQqYO/90YdgPirnoO3uqn1JLmfsiO7grmbmsRIus3bM52UeGzrBM4Dru3uHP1i9gNlENdfryNj+cb2tH3pdbxuv+0G9Td3HUrt/BhksttsKAhegHzTIS39kDpJpD2p70HsF7cSgshM6O23/b/Sw763jEmcYP2i6y7vPmdVviQ+wnfFA5V/Kg6bhyQY4ZMj4UKv9C1Rlt7KW0lZzAAAAAElFTkSuQmCC",
            text: 'ТЕСТ-ДРАЙВ BMW',
            url: 'https://www.bmw-avtodom.ru/feedback/test-drive/'
        },
        {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALkSURBVGhD7ZlJyE1hHIcvyrAQMqVQNggbC1NZIVN2ZKGMGRZShoQVypAyZ4tSIhvz1pQiQ1YoZCFKkiyMGZ/nfPftu8537+241zmdm/PU03fPe893z/93z3nPed/3lgoK/mA87sbb+Aq/4Qd8hqdwBfbD3DIRb+KvBO7H3NEZd+JPtMiXuAcn40DshAsxhNiHuaMLnkEL/IKbsQdWMgM/YW7PhPjtWuBrnGRDjJn4Gd3ngA15ZA5a4EccZ0MMQ3iW3OcgeonlDi+ph2iRK22IMQsbCTGo/Dcz5qJFGsZQlczGr+j7hzFpiEV4p+1ldpxEC10dbbUzAUOII5g0hHe17+j/DbEhK96hBx0cbbXjtgX9QG+9SagMoQswE3qiB3wbbXXkIvr+pmirPosxhHhe/rsdM2E4ekD7RzXC3ewp1ru0lmAIsQ7XlF97SWbCMAyFVsPO/wLdZ6oNVViKIcQGGyAEyeyh2Q09oLfXWmxF93HQuA0rO7Ah7EO+v9GGMrvQtvXRVkY8Qg86NtrqiJ3eM+Y+6rd/AXdgtRByHW330syMvehBHa7Xwv7hpXUaw8MxGL8R9EfDOtyPj9VSoyteQgt6YEMCBqBn4AlusSFGGLM5X8kEQ5xDD+pAcRQ2y2j0jDkBG2lD2qQRoi+GvuSYLHXSCOHz6DH6mTfQY6TK34TojSPaXtbEzmw/eY9+5i20s6eKIc5j0hD30H3vosXOQydc03EZnsAwTnNqfAy7Y6o0GiLM3et5DV2sSJ1GQzj+8ik+BV2AcD7vysplPIoO+4diJjQTIunQPXWKEJgL/rsQfbAIkRZFCMwFRQjMBUUIzAXNhHCunQtcyTiLLR1CVqGFvcGWDSH30eLmR1vVyX0IcZnFGVutRa+WCCEu/Vtk/HcMaZkQ4nKlhR7HyiV+15NaJoSMQX91teAruBZdKfcO1jIhAtPQu5aFV3oVU19P+tf0wuV4CF1BN1zSHyoLCiJKpd+8dDIuSAqZbQAAAABJRU5ErkJggg==",
            text: 'ЗАПИСАТЬСЯ НА СЕРВИС',
            url: 'https://www.bmw-avtodom.ru/feedback/services/'
        },
        {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARSSURBVGhD7ZlryBVFHIffsjKtNPOCURilUoJZKijY5UtUiJEYKqioH4qQiEINSUXBTxoEBYFRH6LoQqVQdkFIUcKiyEBQMyPvF7ylFmWlXZ9nO4Prds7Zyzm+Z8Hzg4f3nZmd2fntzM78Z09HW2211XTdDa/BPvgDfoNt8CwMgtKrJ7wH/8Q4k0ifhsVwEZRSmtgCdvYYzIOBYIcvhZGwHDTiNY5YKc18CHbwa7jWjBq6A06A1z5hRpl0D9ixo9DfjBTdB15/Eq4xoyx6C+zY7CiVTR+DdR6JUiXRYbBT10WpbJoJ1nk7Sp2rq2ERbIA14APqBrV0CUyA52ApOH1z6zKwQ79GqewaDdb7LEqd1fWwEyyL8y3cCEndAlshef0SyCWfxp/gapRHd4E3XBelziosGhrUrE/6m0refugHQbdCWDi+h6cquG/9DaMgl/aAjQ2JUtn0OFjnlSj1n/qCHXB049O0N2wHr3equWw7ci4u5n0KV0HQ82D+M1Eqh16EPBXtiMu0dSaZUdHtYJ7TKClHx5G3fBp8Uvl/N/SBuOaAZS9EqRwaCt7EIbUzaQqj4Uh2NaOiHuBoGA08DM7/m2K8CtbzPv71ng9BKB8MY2EXWD4dcssVw8qHoNaq4Ug8BnbUKfQAJLUAbKdRHHHf39zqAu+DjfwF78Jk8IV0WjwKX4LlmnD4q+lO8BqfuqtXEh+U5adieXGOgOVvQmFdDAaE3sTGqrEXHoRaCkbcQ6ppHFj+UZT6v6aC5Q0ZCTJMeRIcoY3wObwBvqT1NjZVKiONqHRGfGeMgl1J4mt8mkpjxJXIKfUz2GDAeMzzyAiop5YbGQDePHTclesAGF78VMkL+S/DlVBNLTXiEhvCBVelWWC4EZebmzu/G57XfQXJa1TLjBjEGcxZ+R24AuopHq1uhuTBKhjZBB6Pk7gaWq7RauULoZARK1hxFfiCZ5HLs9Gq9dwku0PQGDC/UV6HzLoZ3KWdVh6G8sgVLZhZDZ5r1OWwA0KHjoOfkgw5ahF2c3d901+Ax+nM8jRmA+7mReQ3roNgG26YRgZzwYcjT0PaKBu/hfPKDDOKyHOADRj91pNLstcOi1LnyoXiR7AdowD/GtUam2XRMrCOo5L2flaV36p+Ab8k+n89ef72Zn7vus2MhIyWQ3xmZDwFknL/+QAcJUN1w/z1EIyPh0Lyg5yN+DTT5PxfCfXM2DlXqmqhvWecH8D6STzqToTCymNEZTFTTXETfo71fXRk/PriUtwLGlJeIyppJu00GTdhvbQpXEhFjKisZoZDMLECzosJVdSISjPTaSZUI0ZU0ozfj9W90GkmVKNGVNyM/B773zP/eTehmmFEuXPPh+/APckPcf62kjVua1jNMuJnzfBThCFKp6sZRm4AY6q1UapFaoYR4yzb8FzSMrWNxNQ20kwFI4bf/jRQBA9RLTfiIcZONAOPpy2Vv3O81ATuh7YuMHV0/Att2c3OxqKKVQAAAABJRU5ErkJggg==",
            text: 'ПОЛУЧИТЬ УНИКАЛЬНОЕ ПРЕДЛОЖЕНИЕ',
            url: 'https://www.bmw-avtodom.ru/feedback/compred/'
        }
    ];
    settings['links'] = links;

    var widgetsFullSize = ['sitephone'],
        isSleep = false,

        consultantSitephoneLabelState,

        labelsSize = 15,
        defaultMarginTop = 7,
        defaultMarginLeft = 7,
        inAction = null,
        labelPosition = {
            top: settings.v_position,
            left: settings.h_position
        },
        middlePositionMargin = labelPosition.top === 'middle' ? labelsSize / 2 + defaultMarginTop : 0,

        newWidgets = function () {
            var widgetsName = Array.prototype.slice.call(arguments);
            var internalWidgets = {
                do: function (methodName, params, context) {
                    (context || widgetsName).forEach(function (widgetName) {
                        internalWidgets[widgetName][methodName].apply(internalWidgets[widgetName], params);
                    });
                }
            };
            widgetsName.forEach(function (name) {
                internalWidgets[name] = Comagic.UI.createWidget(name, {
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
                                if (widgetsFullSize.indexOf(me.name) !== -1) {
                                    Comagic.UI.Mobile.form();
                                }
                            }, 0);
                        }
                    },
                    hide: function (isApi) {
                        var me = this;
                        me.getEl().classList.remove(me.getHelperSelector() + '--shown');
                        me.getEl().classList.add(me.getHelperSelector() + '--hidden');
                        if (widgetsFullSize.indexOf(me.name) !== -1) {
                            Comagic.UI.Mobile.unform();
                        }
                    }
                });
            });

            return internalWidgets;
        },
        widgets = newWidgets('sitephone_label', 'sitephone'),
        renderToBodyWidgets = ['sitephone'],
        visibilityObserver;

    function isVisibleChat() {
        var isVisible = false;
        if (Comagic.UI.getWidget('consultant_label')) {
            isVisible = Comagic.UI.getWidget('consultant_label').settings.chat.is_visible && Comagic.UI.getWidget('consultant_chat').isChatAvailable();
        }
        return isVisible;
    }

    function isVisibleOfflineMessage() {
        var isVisible = false;
        if (Comagic.UI.getWidget('consultant_label') && Comagic.UI.getWidget('consultant_chat')) {
            isVisible = Comagic.UI.getWidget('consultant_label').settings.offline_message.is_visible &&
                (!Comagic.UI.getWidget('consultant_label').settings.chat.is_visible ? true : !Comagic.UI.getWidget('consultant_chat').isChatAvailable());
        }
        return isVisible;
    }

    function isVisibleConsultantLabel() {
        return isVisibleChat() || isVisibleOfflineMessage();
    }

    function isVisibleSitephoneLabel() {
        return settings.is_visible && (settings.is_schedule_active || settings.is_always_displayed);
    }

    function rulesReducer(action) {
        return {
            sitephone_label: (function () {
                switch (action) {
                    case 'rack':
                        return isVisibleSitephoneLabel();
                    default:
                        return false
                }
            })(),
            rack: true,
            sitephone: action === 'sitephone'
        };
    }

    function updateVisibility(rules) {
        for (var wName in rules) {
            if (rules.hasOwnProperty(wName)) {
                if (widgets[wName]) {
                    if (rules[wName]) {
                        if (wName === 'sitephone' || !Comagic.UI.Mobile.isFullSizeMode()) {
                            !widgets[wName].isVisible() && widgets[wName].show();
                        }
                    } else {
                        widgets[wName].isVisible() && widgets[wName].hide();
                    }
                }
            }
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
            }, {'bg': '#' + settings.banner_color});
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

    widgets['sitephone'].on('render', function () {
        $.getJSON("https://ipapi.co/json/", function (data) {
            if (data['region_code'] === 'SPE') {
                widgets['sitephone'].refs['sitephoneNumber'].href = 'tel:+78125005007';
            }
        });
    });

    widgets.do('render', null, renderToBodyWidgets);
    widgets.do('render', null, ['sitephone_label']);

    function updateLabelsVisibility() {
        if (isVisibleConsultantLabel() && !Comagic.UI.getWidget('consultant_label').isVisible()) {
            Comagic.UI.getWidget('consultant_label').show();
        }
        if (Comagic.UI.getWidget('consultant_invite') && Comagic.UI.getWidget('consultant_invite').is_consultant_invite_inited && !Comagic.UI.getWidget('consultant_invite').isVisible()) {
            Comagic.UI.getWidget('consultant_invite').show();
        }
        if (isVisibleSitephoneLabel() && !widgets['sitephone_label'].isVisible()) {
            widgets['sitephone_label'].show();
        }
    }

    //sitephones
    widgets['sitephone_label'].refs['trigger'].addEventListener('click', function () {
        visibilityObserver.pub(widgets['sitephone'].name);
    });
    widgets['sitephone_label'].refs['menuTrigger'].addEventListener('click', function () {
        widgets['sitephone_label'].refs['menu'].classList.toggle('comagic-c-sitephone-label-footer-menu--close');
    });
    widgets['sitephone'].refs['triggerSitephone'].addEventListener('click', function () {
        widgets['sitephone'].refs['closeBtnIcon'].classList.remove('comagic-c-tools__btn--close-menu');
        widgets['sitephone'].refs['innerSitephone'].style.display = 'none';
    });
    widgets['sitephone'].on('show', updateCaptcha);
    widgets['sitephone'].refs['closeBtn'].addEventListener('click', function () {
        visibilityObserver.pub('rack');
        updateLabelsVisibility();
    });
    widgets['sitephone'].refs['submitBtn'].addEventListener('click', function () {
        if (!widgets['sitephone'].getErrors()) {
            widgets['sitephone'].refs['submitBtn'].classList.add('comagic-js-button--disabled');
            widgets['sitephone'].refs['closeBtn'].classList.add('comagic-js-close-btn-hidden');
            widgets['sitephone'].startCall(widgets['sitephone'].getValues());
        }
    });
    widgets['sitephone'].refs['captchaUpdateBtn'] && widgets['sitephone'].refs['captchaUpdateBtn'].addEventListener('click', updateCaptcha);
    if (settings.delayed_call_times) {
        function setDelayedCallBlockState(enabled) {
            widgets['sitephone'].refs['date'][enabled ? 'removeAttribute' : 'setAttribute']('c-disabled', '');
            widgets['sitephone'].refs['delayedCallTime'][enabled ? 'removeAttribute' : 'setAttribute']('c-disabled', '');
        }

        function clearDelayedCallTime() {
            while (widgets['sitephone'].refs['delayedCallTime'].querySelector('option')) {
                widgets['sitephone'].refs['delayedCallTime'].removeChild(widgets['sitephone'].refs['delayedCallTime'].querySelector('option'));
            }
        }

        function setDelayedCallTimeDisable(isDisabled) {
            widgets['sitephone'].refs['delayedCallTime'].classList[isDisabled ? 'add' : 'remove']('comagic-js-select-disabled');
        }

        setDelayedCallBlockState(!widgets['sitephone'].getEl('.comagic-js-date-fields--is-active'));
        setDelayedCallTimeDisable(true);
        widgets['sitephone'].refs['dateChangeTrigger'].addEventListener('click', function () {
            setDelayedCallBlockState(true);
            widgets['sitephone'].refs['dateFields'].classList.add('comagic-js-date-fields--is-call-without-delay');
        });
        widgets['sitephone'].refs['dateNowTrigger'].addEventListener('click', function () {
            setDelayedCallBlockState(false);
            clearDelayedCallTime();
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
            widgets['sitephone'].refs['delayedCallTime'].value = null;
            widgets['sitephone'].refs['delayedCallTime'].innerHTML = Comagic.UI.createEl(tpls['sitephone_times_options'], delayedCallTimeObj).innerHTML;
            setDelayedCallTimeDisable(false);
        });
    }

    widgets['sitephone'].on('callcomplete', afterSubmit({
        widgetName: 'sitephone',
        isClear: true,
        doAfterSubmit: function (answer) {
            if (widgets['sitephone'].isVisible()) {
                widgets['sitephone'].refs['submitBtn'].classList.remove('comagic-js-button--disabled');
                widgets['sitephone'].refs['closeBtn'].classList.remove('comagic-js-close-btn-hidden');
                updateCaptcha();
                if (answer.success) {
                    visibilityObserver.pub('rack');
                }
            }
        }
    }));


    function checkScreenOrientation() {
        var classListAction = (Math.abs(window.orientation) === 90) ? 'add' : 'remove';
        for (var i = 0; i < widgetsFullSize.length; i++) {
            var widgetName = widgetsFullSize[i];
            widgets[widgetName].getEl('.comagic-c-sitephone-container__content').classList[classListAction]('comagic-js-sitephone-container--hidden');
            widgets[widgetName].getEl('.comagic-c-sitephone-container__landscape').classList[classListAction]('comagic-js-sitephone-container--shown');
        }
    }

    function isActiveElementBelongsToWidget(element) {
        var widgetClasses = ['comagic-c-field', 'comagic-c-select--select'],
            isActiveElementBelongsToWidget = false;
        for (var i = 0; i < widgetClasses.length; i++) {
            if (element.classList.contains(widgetClasses[i])) {
                isActiveElementBelongsToWidget = true;
                break;
            }
        }
        return isActiveElementBelongsToWidget;
    }

    checkScreenOrientation();
    window.addEventListener('orientationchange', function () {
        checkScreenOrientation();
        if (document.activeElement && isActiveElementBelongsToWidget(document.activeElement)) {
            document.activeElement.blur();
        }
    });

    Comagic.on('ui:actionstart', function () {
        inAction = true;
        if (consultantSitephoneLabelState === 'sitephone_label') {
            widgets['sitephone_label'].hide();
        }
    });

    Comagic.on('ui:actionend', function () {
        inAction = false;
        if (!Comagic.UI.Mobile.isFullSizeMode() && !isSleep) {
            if (consultantSitephoneLabelState === 'sitephone_label') {
                widgets['sitephone_label'].show();
            }
        }
    });

    //abtesting
    Comagic.trackEvent('Sitephoneh2A', 'Sitephoneh2A');

    widgets['sitephone'].on('show', function () {
        Comagic.trackEvent('Sitephoneh2_A_SHOW', 'Sitephoneh2_A_SHOW');
    });

    //set visibility props
    visibilityObserver = Comagic.UI.createObserver(rulesReducer);
    visibilityObserver.sub(updateVisibility);
    visibilityObserver.pub('hide_all');
    visibilityObserver.pub('rack');

    Comagic.on('sleep', function () {
        visibilityObserver.pub('hide_all');
        isSleep = true;
    })
});