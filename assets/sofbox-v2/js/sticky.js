//(function(jQuery) {

    "use strict";
    jQuery(document).ready(function() {

        //jQuery(window).on('load', function(e) {
            
            jQuery(window).on('scroll', function() {
                if (jQuery(this).scrollTop() > 20) {
                    jQuery('header').addClass('menu-sticky');
                } else {
                    jQuery('header').removeClass('menu-sticky');
                }
            });
        
       // });
    });
//})(jQuery);