$(function(){
    var initApp = {

        getNotification: function(){
            $.get('data/config.json' , function(data){
                if(data.notification){
                    utils.notification.html(data.notification)
                }
            })	
        },

        init: function(){
            initApp.getNotification();
            dropDowns.init();
            tabs.init();
            tabCtrl.init();
            settingsForm.init();
            search.init();
            storage.init();
        }

    };

    initApp.init()


})