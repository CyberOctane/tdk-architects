(function ($) {
    "use strict"; // Start of use strict

    /* --------- Wow Init ------ */
    new WOW().init();

    /*-------- Owl Carousel ----------*/

    /*----- Hero Section -----*/
    $(document).ready(function () {
        $(".hero").owlCarousel({
            items: 1,
            loop: true,
            singleItem: true,
            autoplay: true,
            autoHeight: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            dots: false
        });
    });

})(jQuery);