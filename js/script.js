let navbar = $('#navbarMain')
let navbarList = $('#navbarMainList')
let navbarInitialOffset = navbar.offset().top

function justifyNavbar() {
    let wWidth = $(window).width()

    // 768 is sm breakpoint of bootstrap
    if (wWidth < 768) {
        navbar.addClass('stick-to-top')
        navbarList.removeClass('nav-justified')
    } else {
        if (window.pageYOffset >= navbarInitialOffset)
            navbar.addClass('stick-to-top')
        else
            navbar.removeClass('stick-to-top')

        navbarList.addClass('nav-justified')
    }
}

$(document).ready(justifyNavbar)
$(window).resize(justifyNavbar)
$(window).scroll(justifyNavbar)

// TEMPORARY !!!
function toggleBrandIcons() {
    if ($('#brandIcons').hasClass('hidden'))
        $('#brandIcons').removeClass('hidden')
    else
        $('#brandIcons').addClass('hidden')
}

console.log($('#navbarMain').height())