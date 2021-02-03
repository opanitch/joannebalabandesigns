<div class="jbd-modal" data-component="modal">
    <div class="jbd-modal-overlay" data-role="modal-overlay"></div>

    <div class="jbd-modal-loading" data-role="modal-loading">
        <p class="jbd-modal-loading-text">Loading.  Please wait.</p>
        <div class="jbd-modal-loading-icon-container">
            <div class="jbd-modal-loading-icon"></div>
        </div>
    </div>

    <div class="jbd-modal-content" data-role="modal-content">
        <div class="jbd-contact">
            <div class="jbd-contact-details">
                <p class="jbd-contact-number"><a class="jbd-contact-number-link" href="tel:+12159431810">215.943.1810</a></p>
                <p class="jbd-contact-email"><a href="mailto:joanne@joannebalabandesigns.com">Joanne@joannebalabandesigns.com</a></p>
            </div>
            <form class="jbd-form jbd-contact-form" data-component="jbd-form" data-options="url: /views/functions/email.php;">
                <div class="jbd-contact-form-inputs">
                    <div class="jbd-form-field">
                        <input type="text" id="contactName" class="jbd-form-input jbd-form-input--textbox validate[required]" data-role="jbd-input" value="" placeholder="Name" />
                        <!-- <label for="contactEmail" class="jbd-form-label">Name</label> -->
                    </div>

                    <div class="jbd-form-field">
                        <input type="text" id="contactEmail" class="jbd-form-input jbd-form-input--textbox validate[required,custom[email]]" data-role="jbd-input" value="" placeholder="Email" />
                        <!-- <label for="contactEmail" class="jbd-form-label">Email</label> -->
                    </div>

                    <!-- <div class="jbd-form-field">
                        <input type="text" id="contactSubject" class="jbd-form-input jbd-form-input--textbox" data-role="jbd-input" value="" />
                        <label for="contactSubject" class="jbd-form-label">Subject - <span class="copy-case--capitalize">Optional</span></label>
                    </div> -->

                    <div class="jbd-form-field">
                        <textarea id="contactMessage" class="jbd-form-input jbd-form-input--textarea validate[required, maxSize[1000]]" data-role="jbd-input" placeholder="Message" maxlength="500"></textarea>
                        <p class="jbd-form-label--sub">Limit <span data-role="char-count"></span> char</p>
                        <!-- <label for="contactMessage" class="jbd-form-label">Message</label> -->
                    </div>
                </div>
                <div class="jbd-contact-form-actions">
                    <button type="button" class="jbd-btn jbd-btn--outline jbd-btn--form-actions" data-role="modal-cancel">Cancel</button>
                    <button type="submit" class="jbd-btn jbd-btn--fill jbd-btn--form-actions" data-role="form-submit">
                        <span class="jbd-btn--form-actions--default" data-role="ready-state">Send Message</span>
                        <span class="jbd-btn--form-actions-icon jbd-btn--form-actions-icon--loading jbd-icon" data-role="loading-state">
                            <span class="accessible">Loading</span>
                        </span>
                        <span class="jbd-btn--form-actions-icon jbd-btn--form-actions-icon--success" data-role="success-state">
                            <svg xmlns="http://www.w3.org/2000/svg" class="jbd-icon jbd-icon-fill--green">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#jbd-checkmark" />
                            </svg>
                            <span class="accessible">Message sent successfully</span>
                        </span>
                        <span class="jbd-btn--form-actions-icon jbd-btn--form-actions-icon--failure" data-role="failure-state">
                            <svg xmlns="http://www.w3.org/2000/svg" class="jbd-icon jbd-icon-fill--red">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#jbd-x" />
                            </svg>
                            <span class="accessible">Error sending message</span>
                        </span>
                    </button>
                </div>
            </form>
            <div class="jbd-form-success is-hidden" data-role="jbd-form-success">
                <p class="jbd-form-success-title">Contact success</p>
                <p class="jbd-form-success-copy">Contact success</p>
            </div>
        </div>
    </div>
</div>
