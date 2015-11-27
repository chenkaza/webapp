var dropDowns = {
        init: function(){
            utils.ActionLink.on('focus', dropDowns.openDropdown);
            utils.ActionLink.on('blur', dropDowns.closeDropdown);
        },

        openDropdown: function(){
            var dropDown = $(this).closest(utils.dropDown);
            dropDown.addClass('focused-actions');
        },

        closeDropdown: function(){
            var dropDown = $(this).closest(utils.dropDown);
            dropDown.removeClass('focused-actions');
        }
    };