function justifyNavbar() {
    let wWidth = $(window).width()

    // 992 is md breakpoint of bootstrap
    if (wWidth < 992) {
        $('#navbarMain').removeClass('sticky-top')
        $('#navbarMain').addClass('fixed-top')
        $('#navbarMainList').removeClass('nav-justified')
    } else {
        $('#navbarMain').removeClass('fixed-top')
        $('#navbarMain').addClass('sticky-top')
        $('#navbarMainList').addClass('nav-justified')
    }
}

$(document).ready(justifyNavbar)
$(window).resize(justifyNavbar)
