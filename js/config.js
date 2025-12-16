/**
 * Configuration for Student Card Generator
 * 
 * IMPORTANT: After deploying your Cloudflare Worker, update WORKER_URL below.
 */

const CONFIG = {
    // Cloudflare Worker URL for photo proxy
    // Leave empty to use Dicebear fallback
    // Example: 'https://student-photo-proxy.YOUR-SUBDOMAIN.workers.dev'
    WORKER_URL: 'https://student-photo-proxy.thanhnguyentuan2007.workers.dev',

    // Fallback options
    FALLBACK: {
        // Use Dicebear when Worker is not configured or fails
        useDicebear: true,
        dicebearStyle: 'adventurer', // adventurer, avataaars, bottts, etc.
    },

    // Photo options
    PHOTO: {
        // Enable realistic en photos via Worker (requires WORKER_URL)
        enableRealisticPhotos: true, // Set to true after deploying Worker
    }
};

// Export for use in script.js
window.APP_CONFIG = CONFIG;
