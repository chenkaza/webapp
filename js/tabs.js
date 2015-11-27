var tabs = {
        init: function(){
            utils.tabLink.on('click', tabs.changeHash);
            $(window).on('hashchange', tabs.changeTab);

        },

        changeHash: function(e){
            e.preventDefault();
            var tabID = $(this).attr('href');
            history.pushState(null, null, tabID);
            $(window).trigger('hashchange');
        },

        isMatch: function(identifier){
            var tabID = [].slice.call(utils.tabLink).map(function(element){ 
                var element = $(element),
                    rEl = element.attr('href');
                return rEl;
            }),
                isMatch = false,
                checkMatch = $.inArray(identifier, tabID);
            if(checkMatch != -1){
                isMatch = true			
            }; 
            return isMatch;
        },

        gotoTab: function(currentTab,currentLink){
            utils.tab.hide();
            utils.tabLink.removeClass('highlighted-tab');       
            currentTab.show();       
            currentLink.addClass('highlighted-tab');
        },

        changeTab : function(){
            var identifier = window.location.hash,
                currentTab = $(identifier),
                currentLink = $("[href = " + identifier +"]");
            if(tabs.isMatch(identifier)){
                tabs.gotoTab(currentTab,currentLink);
                storage.storageData.hash = identifier;
                storage.setStorage();
            }
        }

    };