(function($) {
    'use strict';

    var $doc = $(document),
        $filterSection = $('[data-component="filter"]'),
        $filterCount = $('[data-role="filter-count"]'),
        $hiddenMsg = $('[data-role="filter-no-matches"]'),
        $clearBtn = $('.jbd-portfolio-tags-clear'),
        classes = {
            selected: 'is-selected',
            hidden: 'is-hidden',
            open: 'is-open',
            disabled: 'is-disabled'
        };

    function toggleFilterDrawer(event) {
        var $trigger = $(event.currentTarget),
            role = $trigger.data('role');

        // hide this button
        $trigger.addClass(classes.hidden);
        // show the other button
        $trigger.siblings('button').removeClass(classes.hidden);

        // if button is to show more
        if (role === 'show-more') {
            // open drawer
            $('[data-role="filters"]').addClass(classes.open);
        } else if (role === 'show-less') {
            // close drawer
            $('[data-role="filters"]').removeClass(classes.open);
        }
    }

    function updateFilterCount(count) {
        // set text value of number of selected filters
        $filterCount.text(count);
    }

    function compileFilters(selectedBtns) {
        var filters = '',
            filterDelimeter;

        // cycle through all selected buttons
        selectedBtns.each(function(index, element) {
            filterDelimeter = index > 0 ? ', .' : '.';
            // append next class to selected filters string
            filters += filterDelimeter + $(element).data('filter');
        });

        return filters;
    }

    function setFilter(event) {
        var $trigger = $(event.currentTarget),
            filterValue = $trigger.data('filter'),
            $selectedFilters,
            selectedFiltersNum = 0,
            currentFilters = '',
            isClear = filterValue === 'clearall',
            numMatches,
            filterDelimeter,
            filterRegex;

        // collect all previously selected filters
        $selectedFilters = $trigger.closest('.jbd-portfolio-tags-list').find('.' + classes.selected);
        selectedFiltersNum = $selectedFilters.length;
        // if the button clicked was not 'Clear All'
        if (!isClear) {
            // are there previous filters?
            if (selectedFiltersNum) {
                // get those filters
                currentFilters = compileFilters($selectedFilters);
            }

            // if this filter isn't already applied
            if (!$trigger.hasClass(classes.selected)) {
                // add the selected class
                $trigger.addClass(classes.selected);
                // set delimeter for filter value
                filterDelimeter = selectedFiltersNum > 0 ? ', .' : '.';
                // add the newly selected filter to the filter list
                currentFilters += filterDelimeter + filterValue;
                // add 1 from length of filters
                selectedFiltersNum++;
            } else {
                // if the filter was already applied
                // remove the selected class
                $trigger.removeClass(classes.selected);
                filterRegex = new RegExp('(,\s)?\.{1}' + filterValue + ',?');
                // remove the selected filter from the filter list
                currentFilters = currentFilters.replace(filterRegex, '');
                // subtract 1 from length of filters
                selectedFiltersNum--;
            }
        } else {
            // clear all selected class from selected filters
            $selectedFilters.removeClass(classes.selected);
            // set filter list to wildcard to reset filters
            currentFilters = '*';
            // Set number of filters to 0
            selectedFiltersNum = 0;
        }

        // Apply all filters that have been applied
        $filterSection.isotope({
            filter: currentFilters
        });

        // if there are 1 or more filters selected
        if (selectedFiltersNum > 0) {
            // set visual state of Clear All button
            $clearBtn.removeClass(classes.disabled);
        } else {
            // set visual state of Clear All button
            $clearBtn.addClass(classes.disabled);
        }

        // check for number of matches
        numMatches = $filterSection.data('isotope').filteredItems.length;
        if (!numMatches) {
            // show 'NO MATCHES' message
            $hiddenMsg.removeClass(classes.hidden);
        } else if (numMatches && !$hiddenMsg.hasClass('.' + classes.hidden)) {
            // hide 'NO MATCHES' message
            $hiddenMsg.addClass(classes.hidden);
        }

        // Change Filter count
        updateFilterCount(selectedFiltersNum);
    }

    function bindFilterBtns() {
        // Any filter button clicked, apply filter
        $doc.on('click', '[data-role="filter"]', setFilter);
        // Show/Hide extra filters
        $doc.on('click', '[data-role="show-more"], [data-role="show-less"]', toggleFilterDrawer);
    }

    function initFilters() {
        // Set up the Isotope plugin for filtering
        $filterSection.isotope({
            layoutMode: 'vertical',
            itemSelector: '.jbd-portfolio-item',
            resize: false
        });

        // bind the filtering actions
        bindFilterBtns();
    }

    // if there is a filter component on the page, initialize it
    if ($filterSection.length) {
        initFilters();
    }
})(jQuery, window);