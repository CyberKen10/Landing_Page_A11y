// Main JavaScript file - A11i Detector landing page
import { FormHandler } from './modules/form.js';
import { LanguageSelector } from './modules/language.js';
import { helpers } from './utils/helpers.js';

// Initialize when DOM is ready
helpers.ready(() => {
    // Initialize form handler
    new FormHandler('.contact-form form');

    // Initialize language selector
    new LanguageSelector('lang-select');

    // Log successful initialization
    helpers.log('Landing page loaded successfully!');
});
