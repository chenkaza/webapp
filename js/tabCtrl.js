var tabCtrl = {

        init : function(){
            utils.settingsBtn.on('click', tabCtrl.toggleSettings);
            utils.expendBtn.on('click', tabCtrl.expend);
            utils.select.on('change', tabCtrl.changeIframe);
        },

        toggleSettings : function(){
            var $this = $(this);
            $this.toggleClass('open');
            $this.find('.wheel').toggleClass('wheel-rotate');
            $this.closest(utils.tab).find(utils.settings).toggle();
            $this.closest(utils.tab).find('.name-input').first().focus()

        },

        expend : function(e){
            e.preventDefault();
            var iframe = $(this).closest(utils.tab).find('iframe'),
                url = iframe.attr('src');
            if(url != ""){
                window.open(url, '_blank');  
            }
        },

        changeIframe : function(){
            var iframe = $(this).closest(utils.tab).find('iframe');
            iframe.attr('src' , $(this).val());
        }


    };
