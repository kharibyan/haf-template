const $navbarMain = $('#navbarMain')
const $navbarList = $('#navbarList')
const $navbarBrand = $('#navbarBrand')
const navbarInitialOffset = $navbarMain.offset().top

const $dropdown = $('.dropdown')
const $dropdownToggle = $('.dropdown-toggle')
const $dropdownMenu = $('.dropdown-menu')
const showClass = 'show'

function justifyNavbar() {
    const navHeight = $navbarMain.outerHeight()
    // 768px = sm breakpoint in bootstrap
    if (this.matchMedia('(min-width: 768px)').matches) {
        if (window.pageYOffset >= navbarInitialOffset + navHeight) {
            $navbarMain.addClass('stick-to-top shadow-sm')
            $navbarMain.css('top', '-' + navHeight + 'px')
            $navbarMain.addClass('slide-in')
            $navbarBrand.removeClass('hidden')
        } else {
            $navbarMain.removeClass('stick-to-top shadow-sm')
            $navbarMain.css('top', '')
            $navbarMain.removeClass('slide-in')
            $navbarBrand.addClass('hidden')
        }

        $navbarList.addClass('nav-justified')
    } else {
        $navbarMain.addClass('stick-to-top shadow-sm')
        $navbarBrand.addClass('hidden')
        $navbarList.removeClass('nav-justified')
    }
}

function justifyDropdown() {
    if (this.matchMedia('(min-width: 768px)').matches) {
        $dropdown.addClass('dropdown-bubble')
        $dropdown.hover(
            function () {
                const $this = $(this)
                $this.addClass(showClass)
                $this.find($dropdownToggle).attr('aria-expanded', 'true')
                $this.find($dropdownMenu).addClass(showClass)
            },
            function () {
                const $this = $(this)
                $this.removeClass(showClass)
                $this.find($dropdownToggle).attr('aria-expanded', 'false')
                $this.find($dropdownMenu).removeClass(showClass)
            }
        )
    } else {
        $dropdown.removeClass('dropdown-bubble')
        $dropdown.off('mouseenter mouseleave')
    }
}

$(document).ready(function () {
    justifyNavbar()
    justifyDropdown()
})
$(window).resize(function () {
    justifyNavbar()
    justifyDropdown()
})
$(window).scroll(justifyNavbar)

// ---------- TEMPORARY! ----------

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

// --------------------------------