var settingsForm = {

        init : function(){
            utils.settingsForm.on('submit', settingsForm.submitForm);
            utils.inputs.on('input' , settingsForm.validation);
            utils.cancelBtn.on('click' ,function(){
                var tab = $(this).closest('.tab');
                settingsForm.closeSettings(tab)
            });
            $(document).on('keyup',function(e){
                var tab = $($(this).find('.highlighted-tab').attr('href'));
                if(e.keyCode === 27 ){
                    settingsForm.closeSettings(tab)
                }
            })

        },

        setReportarr : function(info , infoArr){
            info.each(function(){
                var nameInput = $(this).find('.name-input'),
                    urlInput = $(this).find('.url-input');
                if(!nameInput.val()){
                    return;   
                }
                infoArr.push({name: nameInput.val(), url: urlInput.val()});
            });

            return infoArr;
        },

        addOptions : function(select,info){
            select.html('');
            for(var i = 0; i<info.length; i++){
                var option = $('<option></option>');
                option.val(info[i].url);
                option.html(info[i].name);
                select.append(option);
            }
            settingsForm.showSelect(select,info);
            console.log(utils.options)
        },

        showSelect : function(select,info){
            select.show();
            select.focus();
            select.closest(utils.tab).find(utils.expendBtn).show();
            select.closest(utils.tab).find('iframe').attr('src' , info[0].url);
        },

        hideSelect : function(select){
            select.hide();
            select.closest(utils.tab).find(utils.expendBtn).hide();
            select.closest(utils.tab).find('iframe').attr('src' , '');
        },

        openSettings : function(tab){
            tab.find(utils.settings).show();
            tab.find(utils.settingsBtn).addClass('open');
            tab.find(utils.settingsBtn).find('.wheel').toggleClass('wheel-rotate');
        },

        closeSettings : function(tab){
            var settingsBtn = tab.find(utils.settingsBtn);
            tab.find(utils.settings).hide();
            settingsBtn.focus();
            settingsBtn.removeClass('open');
            settingsBtn.find('.wheel').toggleClass('wheel-rotate');

        },

        submitForm : function(e){
            e.preventDefault();
            var tab = $(this).closest('.tab'),
                tabID = tab.attr('id'),
                report = $(this).find('.set-link'),
                select = tab.find('select'),
                iframe = tab.find('iframe'),
                reportsArr = [];

            settingsForm.setReportarr(report,reportsArr);


            if(reportsArr.length > 0){
                settingsForm.addOptions(select,reportsArr);
            }
            else{
                settingsForm.hideSelect(select);
            }

            settingsForm.closeSettings(tab);
            storage.storageData[tabID]= reportsArr;
            storage.setStorage();
        },

        validation : function(){
            var report = $(this).closest('.set-link'),
                inputPair = report.find('input'),
                inputPairArr = [].slice.call(inputPair),
                emptyPair = inputPairArr.every(function(element){
                    var element = $(element);
                    return !element.val();   
                });

            inputPair.prop('required', true); 
            if(emptyPair){
                inputPair.removeProp('required'); 
            }  

        }

    };