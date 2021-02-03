(function($) {
    'use strict';

    var $doc = $(document),
        // $header = $('header'),
        $mobileNav = $('[data-component="mobile-nav"]'),
        classes = {
            open: 'jbd-header-mobile-nav--open',
            fixed: 'jbd-header--fixed'
        },
        btnText = {
            open: 'Close',
            close: 'Menu'
        },
        isOpen = $mobileNav.hasClass(classes.open);

    function toggleMobileMenu(e) {
        var $trigger = $(e.currentTarget);

        if (isOpen) {
            isOpen = false;
            $mobileNav.removeClass(classes.open);
            $trigger.text(btnText.close);
        } else {
            isOpen = true;
            $mobileNav.addClass(classes.open);
            $trigger.text(btnText.open);
        }
    }

    // function stickyNav() {
    //     var winPosY = window.scrollY,
    //         headerHeight = $header.outerHeight() - 40;

    //     if (winPosY > headerHeight) {
    //         $header.addClass(classes.fixed);
    //     } else if (winPosY < headerHeight) {
    //         $header.removeClass(classes.fixed);
    //     }
    // }

    function attachEvents() {
        // Sticky Nav
        // $doc.on('scroll', stickyNav);

        // Mobile Navigation
        $doc.on('click', '[data-role="mobile-nav-trigger"]', toggleMobileMenu);
    }

    function initNav() {
        attachEvents();
    }

    if ($mobileNav.length) {
        initNav();
    }
})(jQuery);