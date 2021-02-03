(function($) {
    'use strict';

    var $doc = $(document),
        formStr = '[data-component="jbd-form"]',
        $forms = $(formStr),
        classes = {
            input: {
                error: 'jbd-form-field--error'
            },
            btn: {
                loading: 'jbd-btn--form-actions--loading',
                success: 'jbd-btn--form-actions--success',
                failure: 'jbd-btn--form-actions--failure'
            }
        };

    function getFormValues(form) {
        var $inputs = form.find('input, textarea'),
            values = {};

        $.each($inputs, function(key, value) {
            values[value.id] = value.value;
        });

        return values;
    }

    function formStatus(form, status) {
        var submitBtn = form.$element.find('[data-role="form-submit"]');

        switch (status) {
            case 'loading':
                submitBtn.addClass(classes.btn.loading);
                submitBtn.prop('disabled', true);
                break;
            case 'success':
                submitBtn.removeClass(classes.btn.loading);
                submitBtn.addClass(classes.btn.success);
                submitBtn.prop('disabled', true);
                break;
            case 'failure':
                submitBtn.removeClass(classes.btn.loading);
                submitBtn.addClass(classes.btn.failure);
                submitBtn.prop('disabled', true);
                break;
            default:
                submitBtn.removeClass(classes.btn.loading);
                submitBtn.removeClass(classes.btn.success);
                submitBtn.removeClass(classes.btn.failure);
                submitBtn.prop('disabled', false);
                break;
        }
    }

    function onFailure(data, form, status) {
        formStatus(form, status);
    }

    function onSuccess(data, form, status) {
        formStatus(form, status);
    }

    function makeCall(form) {
        if (form.options.url) {
            $.ajax(form.options.url, {
                method: 'POST',
                data: form.data,
                beforeSend: function() {
                    formStatus(form, 'loading');
                },
                success: function(data) {
                    onSuccess(data, form, 'success');
                },
                timeout: function(data) {
                    onFailure(data, form, 'failure');
                },
                error: function(data) {
                    onFailure(data, form, 'failure');
                }
            });
        } else {
            return false;
        }
    }

    function triggerSubmit(evt) {
        var $trigger = $(evt.currentTarget),
            $form = {
                $element: $trigger.closest(formStr),
                $success: null,
                options: null
            },
            isValid = false;

        // prevent default action
        evt.preventDefault();

        // validate the form on the front-end
        isValid = $form.$element.validationEngine('validate');

        if (isValid) {
            // get form options
            $form.options = $form.$element.getOptions();
            // is in modal
            $form.isModal = $form.$element.closest('[data-component="modal"]').length;
            // get form data
            $form.data = getFormValues($form.$element);
            // Set the success message
            $form.$success = $form.$element.siblings('[data-role="jbd-form-success"]');

            // Make the AJAX call
            makeCall($form);
        }
    }

    function handleError(event, field, errorFound) {
        if (errorFound) {
            field.closest('.jbd-form-field').addClass(classes.input.error);
        } else {
            field.closest('.jbd-form-field').removeClass(classes.input.error);
        }
    }

    function updateCharLimit($textArea) {
        var $textLimit = $textArea.closest('.jbd-form-field').find('[data-role="char-count"]'),
            charLimit,
            charCount = 0;

        if ($textLimit) {
            charLimit = $textArea.attr('maxlength');

            if (charLimit) {
                charCount = $textArea.val().length;
                $textLimit.text(charLimit - charCount);
            }
        }
    }

    function textAreaFunctions(evt) {
        var $textArea = evt ? $(evt.currentTarget) : $('textarea');

        if ($textArea.length === 1) {
            updateCharLimit($textArea);
        } else if ($textArea.length > 1) {
            $.each($textArea, function (key, element) {
                updateCharLimit($(element));
            });
        }
    }

    function eventBind() {
        $doc.on('keyup', 'textarea', textAreaFunctions);
        $doc.on('click', '[data-role="form-submit"]', triggerSubmit);
        $forms.validationEngine('attach', {
            promptPosition: 'topLeft: 0, -10',
            scroll: false,
            ajaxFormValidation: true,
            showArrow: false,
            maxErrorsPerField: 1
        }).bind('jqv.field.result', handleError);
    }

    function initForms() {
        eventBind();
        textAreaFunctions();
    }

    if ($forms.length > 0) {
        initForms();
    }
})(jQuery, window);