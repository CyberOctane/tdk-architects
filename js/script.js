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