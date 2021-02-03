<!doctype html>
<?php $pageType = 'portfolio';
$pageTitle = 'Portfolio'; ?>
<html>
    <head>
        <?php require('shared/htmlHead.php'); ?>
    </head>
    <?php require('functions/utils.php'); ?>
    <?php require('shared/dataInclude.php'); ?>
    <body>
        <?php include('shared/header.php'); ?>

        <div class="jbd-page-container">
            <div class="jbd-portfolio-container">
                <div class="jbd-portfolio-tags">
                    <h2 class="jbd-portfolio-tags-title">Select tags to filter Projects (<span data-role="filter-count">0</span>)</h2>

                    <?php // Set up filters
                    $filters = array();
                    $rooms = array();
                    $tags = array();

                    // cycle through each project and pull rooms and tags
                    foreach ($data->projects as $key => $project) {
                        // unpack project rooms and add to $rooms array
                        $projRooms = preg_split('(\s?,+\s?)', $project->metadata->rooms);
                        if (sizeof($projRooms) > 1) {
                            $rooms = array_merge($rooms, $projRooms);
                        } else if (!empty($projRooms[0])) {
                            array_push($rooms, $projRooms[0]);
                        }

                        // unpack project rooms and add to $rooms array
                        $projTags = preg_split('(\s?,+\s?)', $project->metadata->tags);
                        if (sizeof($projTags) > 1) {
                            $tags = array_merge($tags, $projTags);
                        } else if (!empty($projTags[0])) {
                            array_push($tags, $projTags[0]);
                        }
                    }
                    
                    // remove duplicates and sort arrays
                    $rooms = array_unique($rooms);
                    sort($rooms);
                    $tags = array_unique($tags);
                    sort($tags);

                    // concat into filters array
                    $filters = array_merge($rooms, $tags);
                    
                    if (!empty($filters)) { ?>
                        <ul class="jbd-portfolio-tags-list" data-role="filters">
                            <li class="jbd-portfolio-tags-item">
                                <button type="button" class="jbd-btn jbd-btn--outline jbd-portfolio-tags-clear is-disabled" data-role="filter" data-filter="clearall">Clear All</button>
                            </li>
                            <?php foreach ($filters as $key => $filter) { ?>
                                <li class="jbd-portfolio-tags-item">
                                    <button type="button" class="jbd-btn jbd-btn--outline jbd-portfolio-tags-link" data-role="filter" data-filter="<?php echo $filter ?>">
                                        <?php // remove '-'
                                        $filter = str_replace("-", " ", $filter);
                                        echo $filter; ?>
                                    </button>
                                </li>
                            <?php } ?>
                        </ul>
                        <div class="jbd-portfolio-tags-list-cta">
                            <button type="button" class="jbd-btn jbd-btn--fill" data-role="show-more">Show more</button>
                            <button type="button" class="jbd-btn jbd-btn--fill is-hidden" data-role="show-less">Show less</button>
                        </div>
                    <?php } ?>
                </div>

                <div class="jbd-portfolio-content" data-component="filter">
                    <?php foreach ($data->projects as $key => $project) {
                        $classes = "";
                        if (!empty($project->metadata->tags)) {
                            $tags = $project->metadata->tags;
                            $classes .= str_replace(",", "", $tags) . " ";
                        } 
                        
                        if (!empty($project->metadata->rooms)) {
                            $rooms = $project->metadata->rooms;
                            $classes .= str_replace(",", "", $rooms);
                        }?>

                        <!-- Portfolio Item Start -->
                        <div class="jbd-portfolio-item<?php if (!empty($classes)) { echo ' ' . $classes; } ?>">
                            <?php if (!empty($project->metadata->hero->image)) { ?>
                                <div class="jbd-portfolio-item-hero">
                                    <img class="jbd-portfolio-item-image" src="/../includes/images/portfolio/projects/<?php echo $project->metadata->id ?>/<?php echo $project->metadata->hero->image ?>" alt="" />
                                </div>
                            <?php } ?>
    
                            <a href="/projects/<?php echo $project->metadata->id; ?>" class="jbd-btn jbd-btn--fill jbd-portfolio-item-cta" data-options="">
                                View Project
                            </a>
    
                            <div class="jbd-portfolio-item-details">
                                <?php if (!empty($project->metadata->title)) { ?>
                                    <h4 class="jbd-portfolio-item-title">
                                        <?php echo $project->metadata->title; ?>
                                    </h4>
                                <?php } ?>

                                <?php if (!empty($project->metadata->location)) { ?>
                                    <p class="jbd-portfolio-item-location">
                                        <?php echo $project->metadata->location; ?>
                                    </p>
                                <?php } ?>
                            </div>
                        </div>
                        <!-- Portfolio Item END -->
                    <?php } ?>
                </div>
                
                <!-- Portfolio Item Start -->
                <div class="jbd-portfolio-no-match is-hidden" data-role="filter-no-matches">    
                    <div class="jbd-portfolio-item-details">
                        <h4 class="jbd-portfolio-item-title">
                            There are no matches for your filter combination.  Please try again.
                        </h4>
                    </div>
                </div>
                <!-- Portfolio Item END -->
            </div>
        </div>

        <?php include('shared/footer.php'); ?>

        <?php include('shared/contact.php'); ?>

        <?php require('shared/htmlFoot.php'); ?>
    </body>
</html>