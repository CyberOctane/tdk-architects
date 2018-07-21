function openSlideMenu() {
    document.getElementById('side-menu').style.width = '100%';

    document.getElementById('side-nav-li-1').classList.remove('fadeOutRight');
    document.getElementById('side-nav-li-1').classList.add('animated');
    document.getElementById('side-nav-li-1').classList.add('fadeInRight');

    document.getElementById('side-nav-li-2').classList.remove('fadeOutRight');
    document.getElementById('side-nav-li-2').classList.add('animated');
    document.getElementById('side-nav-li-2').classList.add('fadeInRight');

    document.getElementById('side-nav-li-3').classList.remove('fadeOutRight');
    document.getElementById('side-nav-li-3').classList.add('animated');
    document.getElementById('side-nav-li-3').classList.add('fadeInRight');

    document.getElementById('side-nav-li-4').classList.remove('fadeOutRight');
    document.getElementById('side-nav-li-4').classList.add('animated');
    document.getElementById('side-nav-li-4').classList.add('fadeInRight');

    document.getElementById('side-nav-li-5').classList.remove('fadeOutRight');
    document.getElementById('side-nav-li-5').classList.add('animated');
    document.getElementById('side-nav-li-5').classList.add('fadeInRight');
}

function closeSlideMenu() {
    document.getElementById('side-nav-li-1').classList.remove('fadeInRight');
    document.getElementById('side-nav-li-1').classList.add('animated');
    document.getElementById('side-nav-li-1').classList.add('fadeOutRight');

    document.getElementById('side-nav-li-2').classList.remove('fadeInRight');
    document.getElementById('side-nav-li-2').classList.add('animated');
    document.getElementById('side-nav-li-2').classList.add('fadeOutRight');

    document.getElementById('side-nav-li-3').classList.remove('fadeInRight');
    document.getElementById('side-nav-li-3').classList.add('animated');
    document.getElementById('side-nav-li-3').classList.add('fadeOutRight');

    document.getElementById('side-nav-li-4').classList.remove('fadeInRight');
    document.getElementById('side-nav-li-4').classList.add('animated');
    document.getElementById('side-nav-li-4').classList.add('fadeOutRight');

    document.getElementById('side-nav-li-5').classList.remove('fadeInRight');
    document.getElementById('side-nav-li-5').classList.add('animated');
    document.getElementById('side-nav-li-5').classList.add('fadeOutRight');

    setTimeout(sideMenuWidthReset, 300);
}

function sideMenuWidthReset() {
    document.getElementById('side-menu').style.width = '0%';
}

window.onresize = function (event) {
    applyOrientation();
}

function applyOrientation() {
    if (window.innerHeight > window.innerWidth) {
        // alert("You are now in portrait");
        document.getElementById('map-container').classList.remove('col-xs-9');
        document.getElementById('info-container').classList.remove('col-xs-3');
    } else {
        // alert("You are now in landscape");
        document.getElementById('map-container').classList.add('col-xs-9');
        document.getElementById('info-container').classList.add('col-xs-3');
    }
}
/*function carouselWowAnimation() {
    if (document.getElementById('1').classList.contains(animated)) {
        document.getElementById('1').classList.add('fadeInRight');
    } else {
        document.getElementById('1').classList.add('animated');
    }
}*/