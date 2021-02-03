(function($) {
    'use strict';

    var $doc = $(document),
        $carousels = $('[data-component="splash-slideshow"]'),
        slideTimers = [],
        classes = {
            animate: 'animate-slide',
            fade: 'fade-slide'
        };
        // testCount = 4;

    /**
     * Carousel Events / Actions
     */
    // Initialize Next Slide procedure
    function nextSlide($carousel) {
        var $slides = $carousel.find('[data-role="splash-slide"]'),
            $currentSlide,
            $nextSlide;

        // testCount--;

        // figure out what the current slide is
        $currentSlide = $carousel.find('.' + classes.animate);
        if (!$currentSlide.length) {
            $currentSlide = $($slides[0]);
        }

        $nextSlide = $currentSlide.next('[data-role="splash-slide"]');
        if (!$nextSlide.length) {
            $nextSlide = $($slides[0]);
        }

        $doc.trigger('fade-slide', $currentSlide);
        $doc.trigger('show-slide', $nextSlide);
        (function($next, $current) {
            setTimeout(function() {
                $doc.trigger('animate-slide', {
                    next: $next,
                    current: $current
                });
            }, 2000);
        })($nextSlide, $currentSlide);

        // if (testCount <= 0) {
        //     clearInterval(slideTimers[$carousels.index($carousel)]);
        // }
    }

    // Show the Slide
    function showSlide(event, slide) {
        // console.log('Show');
        $(slide).removeClass(classes.fade);
    }

    // Fade the Slide
    function fadeSlide(event, slide) {
        // console.log('Fade');
        $(slide).addClass(classes.fade);
    }

    // Animate the Slide
    function animateSlide(event, slides) {
        $(slides.next).addClass(classes.animate);

        if (slides.current) {
            $(slides.current).removeClass(classes.animate);
        }
    }

    function carouselInit($carousel) {
        var options = $carousel.getOptions(),
            slideDuration = options.duration,
            $slides = $carousel.find('[data-role="splash-slide"]');

        // set CSS animation duration on each carousel
        $carousel
            .find('[data-role="splash-slide"]')
            .find('.jbd-splash-slide-backgrounds-container')
            .css('transition-duration', slideDuration + 's');

        // set z-index of all slides
        $slides.each(function(index, element) {
            $(element).css('z-index', $slides.length - index);

            if (index > 0) {
                $(element).addClass(classes.fade);
            }
        });

        // start first slide animation
        nextSlide($carousel);

        // set slide duration interval
        slideTimers.push(setInterval(function() {
            nextSlide($carousel);
        }, (slideDuration + 2) * 1000));
    }

    function attachDocEvents() {
        $doc.on('fade-slide', fadeSlide);
        $doc.on('show-slide', showSlide);
        $doc.on('animate-slide', animateSlide);
    }

    if ($carousels.length) {
        attachDocEvents();

        $carousels.each(function(index, element) {
            carouselInit($(element));
        });
    }
})(jQuery, window);