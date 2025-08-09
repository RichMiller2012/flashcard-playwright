import { test, expect } from '@playwright/test';

test.use({ storageState: 'storageState.json' });


test('demo nature topic single word', async ({ page} ) => {
    const topic = 'Nature';
    const nextButton = page.locator('.next-button');

    await page.goto('http://localhost:8080/#/topic/Nature');

     // Ensure the next button is visible before starting
    await expect(nextButton).toBeVisible();

    // Loop as many times as you want (here: 20 clicks)
    for (let i = 0; i < 20; i++) {
        const playButtonFront = page.locator('.play-button-front');
        const playButtonBack = page.locator('.play-button-back')
        const flashcard = page.locator('.flashcard');
        const nextButton = page.locator('.next-button');

        await play(playButtonFront);
        await page.waitForTimeout(3000);

        await flip(flashcard);

        await page.waitForTimeout(1000);

        await play(playButtonBack);

        await page.waitForTimeout(1500);

        await play(playButtonBack);

        await page.waitForTimeout(3000);

        await flip(flashcard);

        await page.waitForTimeout(1000);

        await play(playButtonFront);

        await page.waitForTimeout(1000);

        await next(nextButton);

        await page.waitForTimeout(1000); // wait before next iteration
    }
});

async function next(nextButton) {
    await nextButton.waitFor({ state: 'visible', timeout: 5000 });
    await nextButton.click();
}

async function flip(flashcard) {
    await flashcard.waitFor({ state: 'visible' });
    await flashcard.click();
}

async function play(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
}

