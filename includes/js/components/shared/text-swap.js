(function($) {
    'use strict';

    var $doc = $(document),
        textSwap = '[data-component="text-swap"]',
        $textSwap = $(textSwap),
        classes = {
            active: 'active',
            hidden: 'is-hidden',
            disabled: 'disabled'
        };

    function setupComponent($component) {
        // Set current TS component
        var tsObj = {
            $component: $component,
            $navItems: $component.find('[data-role="swap-trigger"]').closest('li'),
            $navBtns: $component.find('[data-role="swap-progress"]'),
            $content: $component.find('[data-role="swap-content"]'),
            $currentNavItem: null,
            currentPos: 0
        };

        // record active state, if any
        tsObj.currentPos = tsObj.$navItems.filter('.' + classes.active).index();

        if (tsObj.currentPos > -1) {
            tsObj.$currentNavItem = tsObj.$navItems.eq(tsObj.currentPos);
        }

        return tsObj;
    }

    function setContent(component, position) {
        // set all content divs to hidden
        component.$content.addClass(classes.hidden);
        // remove hidden class from chosen content div
        component.$content.eq(position).removeClass(classes.hidden);
    }

    function setState(component, position) {
        var navLength = component.$navItems.length;

        // Set the current navigation item to active
        component.$navItems.removeClass(classes.active);
        component.$navItems.eq(position).addClass(classes.active);

        // If Progress buttons are set to disabled, enable them
        if (component.$navBtns.hasClass(classes.disabled)) {
            component.$navBtns.removeClass(classes.disabled);
        }

        // Set Progress button states to disabled, if needed
        if (position === 0) {
            component.$navBtns.eq(0).addClass(classes.disabled);
        } else if (position === (navLength - 1)) {
            component.$navBtns.eq(1).addClass(classes.disabled);
        }
    }

    function setSection(evt) {
        var $trigger = $(evt.currentTarget),
            component = setupComponent($trigger.closest(textSwap)),
            isNav = $trigger.is('[data-role="swap-trigger"]'),
            $currentNavItem = isNav ? $trigger.closest('li') : component.$currentNavItem,
            progress = 1,
            currentPos;

        if ($trigger.hasClass(classes.disabled)) {
            return false;
        }

        if (!isNav) {
            progress = $trigger.index() > 0 ? 1 : -1;
        }

        currentPos = isNav ? $currentNavItem.index() : component.currentPos + progress;

        // If the progress buttons were used OR current item is not already active AND the Nav was acted upon
        if (!isNav || (isNav && !$currentNavItem.hasClass(classes.active))) {
            // Change Navigation state
            setState(component, currentPos);
            // Set current content section
            setContent(component, currentPos);
        } else {
            return false;
        }
    }

    function eventBind() {
        $doc.on('click', '[data-role="swap-trigger"]', setSection);
        $doc.on('click', '[data-role="swap-progress"]', setSection);
    }

    function textSwapInit() {
        var tempSwap;

        // Cycle through each TS Component on the page and set initial state to first section
        $textSwap.each(function(index, element) {
            tempSwap = setupComponent($(element));
            setState(tempSwap, 0);
            setContent(tempSwap, 0);
        });

        // Bind events
        eventBind();
    }

    if ($textSwap.length > 0) {
        textSwapInit();
    }
})(jQuery, window);