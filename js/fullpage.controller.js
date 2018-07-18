$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#hamMenu',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
        sectionsColor: ['#FFFFFF', '#1A86EA', '#F35269', '#FAB700', '#FFFFFF'],
        navigation: true,
        navigationTooltips: ['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'],
        responsiveHeight: 500,
        scrollBar:true
        //easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });
});