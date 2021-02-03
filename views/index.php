<!doctype html>
<?php $pageType = 'home';
$pageTitle = 'Home'; ?>
<html>
    <head>
        <?php require('shared/htmlHead.php'); ?>
    </head>
    <body>
        <?php include('shared/header.php'); ?>

        <?php $dataUrl = __DIR__ . "/../data/carouselData.json";
        $json = file_get_contents($dataUrl);
        $data = json_decode($json);
        $carousel = $data->carousel[0]; ?>
        <div class="jbd-splash-component jbd-splash-component--home" data-component="splash-slideshow" data-options="duration: 10;">
            <?php foreach ($carousel->slides as $slideProp => $slide) { ?>
                <div class="jbd-splash-slide" data-role="splash-slide">
                    <div class="jbd-splash-slide-backgrounds-container">
                        <div class="jbd-splash-slide-backgrounds">
                            <?php foreach ($slide->images as $imageProp => $image) { ?>
                                <img class="jbd-splash-slide-background" src="/../../includes/images/portfolio/projects/<?php echo $slide->id ?>/<?php echo $image->src ?>" alt="<?php echo $image->title ?>" />
                            <?php } ?>
                        </div>
                    </div>

                    <div class="jbd-splash-slide-shadow"></div>

                    <div class="jbd-splash-slide-content">
                        <div class="jbd-splash-slide-spotlight">
                            <h2 class="jbd-splash-slide-topic">Featured Work</h2>

                            <?php if (!empty($slide->title)) { ?>
                                <h3 class="jbd-splash-slide-title"><?php echo $slide->title ?></h3>
                            <?php } ?>

                            <?php if (!empty($slide->description)) { ?>
                                <p class="jbd-splash-slide-copy">
                                    <?php echo $slide->description ?>
                                </p>
                            <?php } ?>

                            <a href="/projects/<?php echo $slide->id ?>" class="jbd-btn jbd-btn--fill jbd-splash-slide-link">View Project</a>

                            <?php if (!empty($slide->publication->title)) { ?>
                                <p class="jbd-splash-slide-promo">
                                    Seen in
                                    <?php if (!empty($slide->publication->url)) { ?>
                                        <a class="jbd-splash-slide-promo-link" href="<?php echo $slide->publication->url ?>">
                                    <?php }

                                    echo $slide->publication->title;

                                    if (!empty($slide->publication->url)) { ?>
                                        </a>
                                    <?php } ?>
                                </p>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>

        <div class="jbd-page-container jbd-page-container--main jbd-home">
            <div class="jbd-home-cta">
                <div class="jbd-home-cta-block">
                    <h3 class="jbd-home-cta-title">Put the Life back in Lifestyle</h3>
                    <p class="jbd-home-cta-copy">
                        <span>Custom solutions for every style.</span> <a class="jbd-home-cta-link" href="/portfolio">Our Portfolio</a>
                    </p>
                </div>

                <div class="jbd-home-cta-block">
                    <h3 class="jbd-home-cta-title">We'll bring it all together</h3>
                    <p class="jbd-home-cta-copy">
                        <span>From design to management.</span> <a class="jbd-home-cta-link" href="/services">Our Services</a>
                    </p>
                </div>
            </div>

            <div class="jbd-highlight jbd-highlight--home">
                <div class="jbd-highlight-container">
                    <p class="jbd-highlight-copy">
                        <!-- This is a highlighted call to action that helps break up the page and provides a secondary support to contact you -->
                    </p>
                    <span class="jbd-highlight-copy-background"></span>
                    <p class="jbd-highlight-name">
                        Joanne Balaban Olen
                    </p>
                    <p class="jbd-highlight-title">
                        Principle Designer
                    </p>
                    <button type="button" class="jbd-btn jbd-btn--outline" data-role="modal-open" data-options="modalID: contact-form;">Contact</button>
                </div>
            </div>
        </div>

        <div class="jbd-ts-container jbd-home-content" data-component="text-swap">
            <div class="jbd-ts-navigation">
                <ol class="jbd-ts-navigation-list">
                    <li class="jbd-ts-navigation-item">
                        <button type="button" class="jbd-btn jbd-ts-navigation-btn" data-role="swap-trigger">
                            The Designer
                        </button>
                    </li>
                    <li class="jbd-ts-navigation-item">
                        <button type="button" class="jbd-btn jbd-ts-navigation-btn" data-role="swap-trigger">
                            Our Philosophy
                        </button>
                    </li>
                </ol>
            </div>

            <div class="jbd-ts-body-controls-container">
                <div class="jbd-ts-body-controls">
                    <button type="button" class="jbd-btn jbd-ts-body-btn jbd-ts-body-btn--left disabled" data-role="swap-progress">
                        <span class="accessible">Previous</span>
                    </button>
                    <button type="button" class="jbd-btn jbd-ts-body-btn jbd-ts-body-btn--right" data-role="swap-progress">
                        <span class="accessible">Next</span>
                    </button>
                </div>
            </div>

            <div class="jbd-ts-body">
                <div class="jbd-ts-body-section" data-role="swap-content">
                    <h2 class="jbd-ts-body-title">
                        The Designer
                    </h2>

                    <p class="jbd-ts-body-copy">
                        Thank you so much for taking the time to learn more about Joanne Balaban Designs. Supported by a team of inspired and talented individuals, Principal Designer and CEO Joanne Balaban Olen is a highly trained and continuously practicing presence in the interior design community. A graduate of Drexel University, Joanne earned her Bachelor of Science in the field she has passionately dedicated her life to, interior design. Fortified by her journey to create distinctive, dynamic and functional designs, Joanne and her team aim to achieve artistic greatness in every environment they touch. 
                    </p>
                    <p class="jbd-ts-body-copy">
                        With a storied career, Joanne was employed early on by architectural firms, fabric showrooms, and lighting designers. Soon after, she advanced to designing large commercial and institutional spaces, with the renowned Kenneth Parker Associates. With a widened playing field, Joanne quickly acquired a thorough and diverse set of skills and contacts that allowed her to launch her own firm. By the mid-80's, Joanne Balaban Designs was founded as a means to focus on smaller scale commercial design like legal, medical and dental offices; rounded out with work for assisted living facilities. Ultimately, going smaller made a large-scale impact, creating a market for her skills in residential design, which has been a pillar of our work ever since. Seeking spaces that make you our muse, we look forward to hearing from you, and hope that together we can bring your visions to life.
                    </p>
                </div>

                <div class="jbd-ts-body-section" data-role="swap-content">
                    <h2 class="jbd-ts-body-title">
                        Our Philosophy
                    </h2>

                    <p class="jbd-ts-body-copy">
                        Drawing on decades of experience, we tailor your interior or exterior spaces to fit and support your lifestyle with beauty and ease. Collaboration is our cornerstone, as we blend the relationship between designer, client, artisans, purveyors, and contractors to yield a uniquely personalized experience.
                    </p>
                    <p class="jbd-ts-body-quote">
                        We listen closely to your needs in order to provide tailored designs that are both engaging and functional, as well as beautiful and enduring.
                    </p>
                    <p class="jbd-ts-body-copy">
                        Beyond stylistic excellence, we believe that you can also employ environmentally sustainable solutions to fulfill design direction that is aware, yet aesthetically impeccable. We offer services throughout the "green" spectrum for an integrity based process that’s forever forward thinking. By interweaving client perspective with our broad range of classic and modern design, we provide the level of function, style, and elegance you want, to bring your project to successful fruition.
                    </p>
                    <p class="jbd-ts-body-quote">
                        We elevate your space through our hunger for working with new materials. Coupled with precision repurposing for pieces that are a part of your permanent collection, we take transformation to a level that’s cohesive with your comfort.
                    </p>
                    <p class="jbd-ts-body-copy">
                        The challenge to design, conception through completion brings us a prideful product without the ego. Always seeking solutions that are client-centric, our time-tested knowledge, versatility and confidence, comes through in tandem with the needs of your nest. Possibilites are our playing field with an emphasis on client advocacy and transparency, to keep you and your needs in mind at all times.
                    </p>
                </div>
            </div>
        </div>

        <?php include('shared/footer.php'); ?>

        <?php include('shared/contact.php'); ?>

        <?php require('shared/htmlFoot.php'); ?>
    </body>
</html>