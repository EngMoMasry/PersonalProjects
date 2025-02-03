import { defineConfig, devices } from 'playwright/test';

export default defineConfig({
  // Base URL for your application under test
  use: {
   
    headless: false,  
    launchOptions:{
        args: ['--start-maximized'] },               
    viewport: { width: 1280, height: 720 },  
    screenshot: 'on',                // Take a screenshot when a test fails
    video: 'retain-on-failure',      // Record video only on failure
    trace: 'on-first-retry',         // Capture trace on the first retry
    navigationTimeout: 40000,                  // Global timeout for each test (30 seconds)
  },

  // Test directory and test match pattern
  testDir: 'tests',  // Directory where test files are located
  testMatch: '**/*.spec.ts',  // Match test files with `.spec.ts` extension

  // Reporter options (optional)
  reporter: [
    // ['html', { outputFolder: 'playwright-report', open: 'never' }],
    // ['line'],
    ['allure-playwright']
  ],

   // Configure parallel test execution across multiple browsers
   projects: [
    {
      name: 'chromium', 
      use: { 
        ...devices['Desktop Chrome'], 
        channel: 'chrome',  // Explicitly define the Chrome channel if needed
      }, // Use Desktop Chrome settings
    },
    // {
    //   name: 'firefox',
    //   use: { 
    //     ...devices['Desktop Firefox'],
    //     channel: 'firefox',  // Explicitly define the Firefox channel if needed
    //   }, // Use Desktop Firefox settings
    // },
    // {
    //   name: 'webkit',
    //   use: { 
    //     ...devices['Desktop Safari'],
    //     channel: 'webkit',  // Explicitly define the WebKit channel if needed
    //   }, // Use Desktop Safari settings
    // },
  ],

  // Optional: Configure how many tests run in parallel (defaults to the number of CPU cores)
  //workers: 3,  // Number of workers (i.e., number of tests running in parallel at a time)
});