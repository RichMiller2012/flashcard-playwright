// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',   // where your click scripts will live
  fullyParallel: false, // keep it simple: one test at a time
  reporter: 'list',
  timeout: 0,
  use: {
    baseURL: 'http://localhost:8080', // or your deployed URL
    headless: false,                  // show the browser
    trace: 'on',  
    launchOptions: {
        args: ["--start-maximized"]
    }                     
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        viewport: null,
       },
    }
  ]
});
