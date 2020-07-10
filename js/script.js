const $navbarMain = $('#navbarMain')
const $navbarList = $('#navbarList')
const $navbarBrand = $('#navbarBrand')
const navbarInitialOffset = $navbarMain.offset().top

const $dropdown = $(".dropdown")
const $dropdownToggle = $(".dropdown-toggle")
const $dropdownMenu = $(".dropdown-menu")
const showClass = "show"

function justifyNavbar() {
    let wWidth = $(window).width()

    // 768 is sm breakpoint of bootstrap
    if (wWidth < 768) {
        $navbarMain.addClass('stick-to-top shadow-sm')
        $navbarBrand.addClass('hidden')
        $navbarList.removeClass('nav-justified')
        $dropdown.removeClass('dropdown-bubble')
    } else {
        if (window.pageYOffset >= navbarInitialOffset) {
            $navbarMain.addClass('stick-to-top shadow-sm')
            $navbarBrand.removeClass('hidden')
        } else {
            $navbarMain.removeClass('stick-to-top shadow-sm')
            $navbarBrand.addClass('hidden')
        }

        $dropdown.addClass('dropdown-bubble')
        $navbarList.addClass('nav-justified')
    }
}

$(document).ready(function () {
    justifyNavbar()
    console.log(jQuery._data($dropdown[0], "events"))
    console.log(jQuery._data($dropdownToggle[0], "events"))
    console.log(jQuery._data($dropdownMenu[0], "events"))
})
$(window).resize(justifyNavbar)
$(window).scroll(justifyNavbar)

$(window).on('load resize', function () {
    if (this.matchMedia('(min-width: 768px)').matches) {
        $dropdown.hover(
            function () {
                const $this = $(this)
                $this.addClass(showClass)
                $this.find($dropdownToggle).attr("aria-expanded", "true")
                $this.find($dropdownMenu).addClass(showClass)
            },
            function () {
                const $this = $(this)
                $this.removeClass(showClass)
                $this.find($dropdownToggle).attr("aria-expanded", "false")
                $this.find($dropdownMenu).removeClass(showClass)
            }
        )
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
})

// TEMPORARY !!!
function toggleBrandIcons() {
    if ($('#brandIcons').hasClass('hidden'))
        $('#brandIcons').removeClass('hidden')
    else
        $('#brandIcons').addClass('hidden')
}

let currentFont = 17

function font16() {
    $('main').removeClass('font-' + currentFont)
    $('main').addClass('font-16')
    currentFont = 16
}

function font17() {
    $('main').removeClass('font-' + currentFont)
    $('main').addClass('font-17')
    currentFont = 17
}

function font18() {
    $('main').removeClass('font-' + currentFont)
    $('main').addClass('font-18')
    currentFont = 18
}