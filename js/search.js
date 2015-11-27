var search = {
        init: function(){
            utils.searchBox.on('submit', search.setResult); 
        },

        setOptarr: function(info,infoArr){
            info.each(function (i, opt){
                var opt = $(opt);
                infoArr.push({name: opt.text().toLowerCase(), url: opt.val(), opt: opt});
                //                
            });
            return infoArr;
        },

        getResult: function(optArr,searchInput){
            var result;
            for(var i = 0; i< optArr.length; i++){
                if(optArr[i].name.indexOf(searchInput) != -1){
                    result = optArr[i];
                    break;
                }      
            }
            return result;
        },

        setResult: function(e){
            e.preventDefault();
            var searchInput = $(this).find('input').val().toLowerCase(),
                options = $('option'),
                optArr = [];
            search.setOptarr(options,optArr);
            var result = search.getResult(optArr,searchInput);
            if(typeof(result) === 'undefined') {
                utils.notification.html('The searched report "' + searchInput + '" was not found.');
            }
            else {
                var currentTabID = result.opt.closest(utils.tab).attr('id'),
                    currentLink = $("[href = #" + currentTabID +"]"), 
                    currentSelect = result.opt.closest(utils.select);
                currentLink.trigger('click');
                currentSelect.val(result.url);
                currentSelect.trigger('change');
                initApp.getNotification();

            }


        },
    };
