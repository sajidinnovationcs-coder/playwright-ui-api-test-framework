import { defineConfig } from '@playwright/test';
import path from 'path';

const testName = process.env.TEST_NAME || 'run';
const reportFolder = path.join('playwright-report', `${testName}-${Date.now()}`);

//console.log("Report folder:", reportFolder);

export default defineConfig({
    testDir: './tests',
    timeout: 120 * 1000,

    expect: {
        timeout: 5000,
    },

    retries: 0,

    reporter: [
        ['list'],
        ['html', {
            outputFolder: reportFolder,
            open: 'always'
        }]
    ],

    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
    ],
});