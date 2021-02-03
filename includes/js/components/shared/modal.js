(function($) {
    'use strict';

    var $doc = $(document),
        $modal = $('[data-component="modal"]'),
        // $modalObj,
        classes = {
            open: 'active'
        },
        state = {
            loading: 'is-loading'
        };

    function swapState(data) {
        // set modal state to/from loading state
        if (data) {
            $modal.addClass(state.loading);
        } else if (!data) {
            $modal.removeClass(state.loading);
        }
    }

    function openModal() {
        $modal.addClass(classes.open);
    }

    function closeModal() {
        $modal.removeClass(classes.open);
    }

    function triggerModal(evt) {
        var $trigger = $(evt.currentTarget),
            trigOptions = $trigger.getOptions();

        if (!trigOptions.url) {
            openModal();
        }
    }

    // function setupModal() {
    //     // $modalObj = {
    //     //     loader: $modal.find('[data-role="modal-loading"]'),
    //     //     content: $modal.find('[data-role="modal-content"]')
    //     // };
    // }

    function clickBinding(bind) {
        if (bind) {
            // Modal CTA Events
            $doc.on('click', '[data-role="modal-open"]', triggerModal);
            $doc.on('click', '[data-role="modal-overlay"]', closeModal);
            $doc.on('click', '[data-role="modal-cancel"]', closeModal);
        } else if (!bind) {
            // Modal CTA Events
            $doc.off('click', '[data-role="modal-open"]');
            $doc.off('click', '[data-role="modal-overlay"]');
            $doc.off('click', '[data-role="modal-cancel"]');
        }
    }

    function eventBind() {
        // Document Events
        $doc.on('unbind-modal', clickBinding(false));
        $doc.on('bind-modal', clickBinding(true));
        $doc.on('show-modal', openModal);
        $doc.on('hide-modal', closeModal);
        $doc.on('loading-modal', swapState);
        clickBinding(true);
    }

    function initModal() {
        // setupModal();
        eventBind();
    }

    if ($modal.length > 0) {
        initModal();
    }
})(jQuery, window);