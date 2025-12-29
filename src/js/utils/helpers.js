// Utility functions
export const helpers = {
    // Add any utility functions here as needed
    log: (message) => {
        console.log(`[A11i Detector] ${message}`);
    },

    // Example: DOM ready utility
    ready: (fn) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }
};
