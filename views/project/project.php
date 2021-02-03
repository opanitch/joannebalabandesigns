<!doctype html>
<?php // set page type
$pageType = 'project';

// Select Project from Request
$projId = '';
if (isset($_GET['id'])) {
    $projId = $_GET['id'];
} else {
    $projId = 'jbolen-artwork';
}

if ($projId === 'jbolen-artwork') {
    $pageType = 'artwork';
}

// Get Project data ?>
<?php require(__DIR__ . '/../shared/dataInclude.php'); ?>

<?php // Select project data
$projData = $data->projects;

// find key of data in array
$projKey = array_search(
    $projId,
    array_column(array_column($projData, 'metadata'), 'id')
);

// set project
$project = $projData[$projKey];
// set page title
$pageTitle = $project->metadata->title;

// echo $projId;
// echo $projKey;
// print_r($project);
// echo $pageTitle;
?>

<html>
    <head>
        <?php require(__DIR__ . '/../shared/htmlHead.php'); ?>
    </head>
    <?php require(__DIR__ . '/../functions/utils.php'); ?>
    <body>
        <?php include(__DIR__ . '/../shared/header.php'); ?>

        <?php // Create project component from selected project ?>
        <div class="jbd-project">
            <h1 class="jbd-project-title"><?php echo $pageTitle ?></h1>
            <h3 class="jbd-project-location"><?php echo $project->metadata->location ?></h3>

            <div class="jbd-project-hero">
                <?php if (!empty($project->metadata->hero->image)) { ?>
                    <img class="jbd-project-hero-image" src="/../../includes/images/portfolio/projects/<?php echo $project->metadata->id ?>/<?php echo $project->metadata->hero->image ?>" alt="" />
                <?php } ?>
                
                <?php if (!empty($project->metadata->description) || !empty($project->photographer->name) || !empty($project->publication->title)) { ?>
                    <div class="jbd-project-hero-copy-container">
                        <?php if (!empty($project->metadata->description)) { ?>
                            <p class="jbd-project-hero-copy">
                                <?php echo $project->metadata->description ?>
                            </p>
                        <?php } ?>

                        <?php if ($projId === 'jbolen-artwork') { ?>
                            <p class="jbd-project-hero-copy-details">
                                Some pieces available for purchase | Artist is available for commissions
                            </p>
                            <?php if (!empty($project->metadata->hero->name)) { ?>
                                <p class="jbd-project-hero-copy-details">
                                    <span class="bold">Featured: </span>
                                    <?php echo $project->metadata->hero->name;
                                    if (!empty($project->metadata->hero->details)) {
                                        echo ' | ' . $project->metadata->hero->details;
                                    } ?>
                                </p>
                            <?php } ?>
                        <?php } ?>

                        <?php if (!empty($project->photographer->name) || !empty($project->publication->title)) { ?>
                            <p class="jbd-project-hero-copy-promo">
                                <?php if (!empty($project->photographer->name)) { ?>
                                    Photographed by 
                                    <?php if (!empty($project->photographer->link)) { ?>
                                        <a class="" href="<?php echo $project->photographer->link ?>">
                                    <?php } ?>

                                    <?php echo $project->photographer->name ?>
                                    
                                    <?php if (!empty($project->photographer->link)) { ?>
                                        </a>
                                    <?php } ?>
                                <?php } ?>

                                <?php if (!empty($project->photographer->name) && !empty($project->publication->title)) { ?>
                                    <span> | </span>
                                <?php } ?>
                                
                                <?php if(!empty($project->publication->title)) { ?>
                                    Seen in 
                                    <?php if (!empty($project->publication->link)) { ?>
                                        <a class="" href="<?php echo $project->publication->link ?>">
                                    <?php } ?>

                                    <?php echo $project->publication->title ?>

                                    <?php if (!empty($project->publication->link)) { ?>
                                        </a>
                                    <?php } ?>
                                <?php } ?>
                            </p>
                        <?php } ?>
                    </div>
                <?php } 

                // get number of rooms
                $rooms = $project->metadata->rooms;
                // split string into array
                $rooms = preg_split('(\s?,+\s?)', $rooms);
                // print out a button for each room if there is more than 1 room
                if (!empty($rooms) && sizeof($rooms) > 1) { ?>
                    <ul class="jbd-project-menu">
                        <?php foreach($rooms as $index => $room) { ?>
                            <li class="jbd-project-menu-item">
                                <button type="button" class="jbd-btn jbd-project-menu-trigger"><?php echo $room ?></button>
                            </li>
                        <?php } ?>
                    </ul>
                <?php } ?>
            </div>

            <ul class="jbd-project-image-list">
                <?php // get image data
                $dataUrl = __DIR__ . "/../../data/imageData.json";
                $json = file_get_contents($dataUrl);
                $data = json_decode($json);
                $images = $data->projectImages;
                // find all images for given project
                $projImages = array_filter(
                    $images,
                    function($image) use ($projId) {
                        return $image->projId == $projId;
                    }
                );

                //build image list
                foreach($projImages as $key => $image) {
                    if(!empty($image->imageLg) && $image->imageLg !== $project->metadata->hero->image) { ?>
                        <li class="jbd-project-image-list-item">
                            <img class="jbd-project-image" src="/../../includes/images/portfolio/projects/<?php echo $project->metadata->id ?>/<?php echo $image->imageLg ?>" alt="<?php echo $image->caption ?>" />
                            
                            <?php if ($projId === 'jbolen-artwork' && !empty($image->name)) { ?>                                
                                <div class="jbd-project-image-details">
                                    <h4 class="jbd-project-image-title">
                                        <?php echo $image->name; ?>
                                    </h4>

                                    <?php if (!empty($image->specs->size) || $image->specs->description) { ?>
                                        <p class="jbd-project-image-specs">
                                            <?php if(!empty($image->specs->size)) {
                                                echo $image->specs->size->width . ' x ' . $image->specs->size->height;
                                            }

                                            if (!empty($image->specs->size) && !empty($image->specs->description)) {
                                                echo ' ';
                                            }
                                            
                                            if(!empty($image->specs->description)) {
                                                echo $image->specs->description;
                                            } 
                                            
                                            if (!empty($image->copies)) {
                                                echo ', ' . $image->copies->remaining . ' of ' . $image->copies->total;
                                            } ?>
                                        </p>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                        </li>
                    <?php }
                } ?>
            </ul>
            
            <div class="jbd-page-container jbd-page-container--vert-padding text-center">
                <button type="button" class="jbd-btn jbd-btn--outline jbd-btn--center" data-role="modal-open" data-options="modalID: contact-form;">
                    Contact
                </button>
            </div>
        </div>

        <?php include(__DIR__ . '/../shared/footer.php'); ?>

        <?php include(__DIR__ . '/../shared/contact.php'); ?>

        <?php require(__DIR__ . '/../shared/htmlFoot.php'); ?>
    </body>
</html>