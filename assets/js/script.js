
jQuery(document).ready(function($) {
    // initilize aos
    $(window).load(function() { 
        AOS.init({
            // disable: true
            disable: false
        });
    });

    $(window).load(function() { 
        // display like lightbox
        $(".iframe").colorbox({iframe:true, width:"90%", height:"90%"});
    });
});