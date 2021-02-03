(function($) {
    'use strict';

    // jQuery function to get Options from component
    function getOptions(element) {
        var options = 'data-options',
            data,
            props;

        element = $(element);
        // if the element doesn't have the attribute, return undefined.
        if (!element.attr(options)) {
            return {};
        }

        data = {};
        options = element.attr(options);
        props = options.split(';');
        // create object from array
        props.forEach(function(prop) {
            var keyval, key, value;

            // if prop is defined
            if (prop) {
                keyval = prop.split(':');
                key = keyval[0];
                value = keyval[1].split(' ')[1];

                // try to interpret the value.
                if (value === 'true') {
                    data[key] = true;
                } else if (value === 'false') {
                    data[key] = false;
                } else if ($.isNumeric(value)) {
                    data[key] = Number(value);
                } else {
                    data[key] = value;
                }
            }
        });

        return data;
    }

    // extend jQuery
    $.fn.getOptions = function() {
        var options;

        this.each(function(index, element) {
            options = getOptions(element);
        });

        return options;
    };
})(jQuery, window);