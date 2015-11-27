var storage = {

        init: function(){
            storage.initHash();
            storage.initReports('quick-reports');
            storage.initReports('my-team-folders');
        },

        storageData : JSON.parse(localStorage.getItem('data')) || {},

        initHash: function(){
            var	currentLink = $("[href = " + storage.storageData.hash +"]");
            currentLink.trigger('click');
        },

        embedReports: function(info,infoArr){
            info.each(function(i, el){
                el = $(el);
                if(!infoArr[i]) {
                    return false;
                }
                var nameInput = el.find('.name-input'),
                    urlInput = el.find('.url-input');
                nameInput.val(infoArr[i].name);
                urlInput.val(infoArr[i].url)
            })
        },

        initReports: function(reportName){
            if(storage.storageData[reportName]) {
                var tab = $("#"+reportName), 
                    select = tab.find('select'),
                    report = tab.find('.set-link'),
                    reportData = storage.storageData[reportName];

                if(!reportData.length) {
                    settingsForm.openSettings(tab)
                    return;                    
                }
                settingsForm.closeSettings(tab)
                settingsForm.addOptions(select,reportData);
                storage.embedReports(report,reportData)
            }
        },

        setStorage: function(){
            localStorage.setItem('data' , JSON.stringify(storage.storageData))
        }
    };