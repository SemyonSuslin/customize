Comagic.UI.registerViewController('personal_form', function (settings, tpls) {
    var intervalId = setInterval(function () {
        var sitephone = Comagic.UI.getWidget('sitephone');
        var cache = {};
        if (sitephone) {
            clearInterval(intervalId);
            var personalForm = Comagic.UI.createWidget('personal_form', {
                settings: settings,
                id: settings['id'],
                template: tpls['personal_form']
            });
            if (settings.image_url) {
                cache.image_url = sitephone.refs.img.style.backgroundImage;
                sitephone.refs.img.style = 'background-image: url(' + settings.image_url + ')';
            }
            cache.title = sitephone.refs.title.innerHTML;
            cache.text = sitephone.refs.text.innerHTML;
            cache.submitBtn = sitephone.refs.submitBtn.innerHTML;

            sitephone.refs.title.innerHTML = settings.banner_title;
            sitephone.refs.text.innerHTML = settings.banner_text;
            sitephone.refs.submitBtn.innerHTML = settings.button_text;

            sitephone.show();
            sitephone.refs['closeBtn'].addEventListener('click', function () {
                personalForm.cancel();
                sitephone.refs.title.innerHTML = cache.title;
                sitephone.refs.text.innerHTML = cache.text;
                sitephone.refs.submitBtn.innerHTML = cache.submitBtn;

                if (settings.image_url) {
                    sitephone.refs.img.style.backgroundImage = cache.image_url;
                }
            });

            sitephone.on('callcomplete', function () {
                personalForm.submit();
            });
        }
    }, 1000);
});
