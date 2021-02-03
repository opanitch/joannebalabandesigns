<header class="jbd-header">
	<div class="jbd-page-container jbd-page-container--full-width jbd-header-container">
        <a href="/" class="jbd-header-nav-link">
            <img class="jbd-header-logo" src="../includes/images/theme/JBD_logo.png" alt="Joanne Balaban Designs" title="Joanne Balaban Designs" />
            <svg xmlns="http://www.w3.org/2000/svg" class="jbd-icon jbd-header-logo jbd-header-logo--mobile">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#jbd-logo" />
            </svg>
        </a>

		<nav class="jbd-header-nav">
			<ul class="jbd-header-nav-list jbd-header-nav-list--mobile">
				<li class="jbd-header-nav-item">
					<button type="button" class="jbd-btn jbd-btn--outline" data-role="mobile-nav-trigger" data-options="modalID: contact-form;">Menu</button>
				</li>
            </ul>
			<ul class="jbd-header-nav-list">
                <li class="jbd-header-nav-item<?php if($pageType ==='home') { ?> active<?php } ?>">
					<a href="/" class="jbd-header-nav-link">About</a>
				</li>
				<li class="jbd-header-nav-item<?php if($pageType ==='services') { ?> active<?php } ?>">
					<a href="/services" class="jbd-header-nav-link">Services</a>
				</li>
				<li class="jbd-header-nav-item<?php if($pageType ==='portfolio') { ?> active<?php } ?>">
					<a href="/portfolio" class="jbd-header-nav-link">Portfolio</a>
				</li>
				<li class="jbd-header-nav-item<?php if($pageType ==='artwork') { ?> active<?php } ?>">
					<a href="http://www.jbolenart.com" class="jbd-header-nav-link">Original Art</a>
				</li>
				<li class="jbd-header-nav-item">
					<button type="button" class="jbd-btn jbd-btn--outline" data-role="modal-open" data-options="modalID: contact-form;">Contact</button>
				</li>
            </ul>
		</nav>
	</div>
</header>

<nav class="jbd-header-mobile-nav" data-component="mobile-nav">
    <ul class="jbd-header-mobile-nav-list">
        <li class="jbd-header-mobile-nav-item<?php if($pageType ==='home') { ?> active<?php } ?>">
            <a href="/" class="jbd-header-mobile-nav-link">About</a>
        </li>
        <li class="jbd-header-mobile-nav-item<?php if($pageType ==='services') { ?> active<?php } ?>">
            <a href="/services" class="jbd-header-mobile-nav-link">Services</a>
        </li>
        <li class="jbd-header-mobile-nav-item<?php if($pageType ==='portfolio') { ?> active<?php } ?>">
            <a href="/portfolio" class="jbd-header-mobile-nav-link">Portfolio</a>
        </li>
        <li class="jbd-header-mobile-nav-item<?php if($pageType ==='artwork') { ?> active<?php } ?>">
            <a href="http://www.jbolenart.com" class="jbd-header-mobile-nav-link">Original Art</a>
        </li>
        <li class="jbd-header-mobile-nav-item">
            <button type="button" class="jbd-btn jbd-btn--outline jbd-header-mobile-nav-btn" data-role="modal-open" data-options="modalID: contact-form;">Contact</button>
        </li>
    </ul>
</nav>