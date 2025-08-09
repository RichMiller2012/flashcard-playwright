const { chromium } = require("@playwright/test");

const USERNAME = 'Rich';
const PASSWORD = '123456';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // 1. Go to Welcome screen
    await page.goto('http://localhost:8080/');

    // 2. Click Get Started button
    const getStartedButton = page.locator('a.login-button', { hasText: 'Get Started!' });
    await getStartedButton.waitFor({ state: 'visible' });
    await getStartedButton.click();

    // 3. Wait for login page
    await page.waitForURL('**/login');

    // 4. Fill login form
    await page.fill('#username', USERNAME);
    await page.fill('#password', PASSWORD);

    // 5. Click login button
    await page.click('button.login-button');

    // 6. Wait for post-login navigation (adjust URL as needed)
    await page.waitForURL('http://localhost:8080/#/');

    // 7. Save authenticated storage state (cookies, localStorage, sessionStorage)
    await context.storageState({ path: 'storageState.json' });
    console.log('✅ Logged in and storage state saved to storageState.json');

    await browser.close();
})();