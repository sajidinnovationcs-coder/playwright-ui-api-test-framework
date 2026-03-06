// playwright.config.js
// Default Playwright JS configuration for UI + API tests

// Import Playwright test library
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',             // Folder where your tests live
    timeout: 30 * 1000,             // 30 seconds per test
    expect: {
        timeout: 5000,                // Timeout for expect assertions
    },
    retries: 0,                      // No retries for small exercise
    reporter: [['list'], ['html']],  // Console + HTML report
    use: {
        headless: true,               // Run tests without opening browser UI
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',   // Useful for debugging failed tests
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
    ],
    /* Optional: global setup for API baseURL */
    /* Uncomment if you want a default base URL for API tests
    use: {
      baseURL: 'https://petstore.swagger.io/v2',
      extraHTTPHeaders: {
        'Accept': 'application/json',
      },
    },
    */
});