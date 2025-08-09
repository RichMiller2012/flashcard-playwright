import { test, expect } from '@playwright/test';
import { runFlashcardLoop, showIntro, showMessagePage } from './actions';

test.use({ storageState: 'storageState.json' });

const baseURL = 'http://localhost:8080/#/topic/'

test('demo Nature topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Nature!");


    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Nature');

     // Ensure the next button is visible before starting
    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Shapes topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Shapes!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Shapes');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Health topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Health!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Health');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Personal Traits topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Personal Traits!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Personal%20Traits');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Family topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Family!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Family');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Colors topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Colors!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Colors');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Weather topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Weather!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Weather');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Insects topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Insects!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Insects');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Education topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Education!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Education');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Furniture topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Furniture!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Furniture');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Marine Life topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Marine Life!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Marine%20Life');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Days topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Days!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Days');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Interrogatives topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Interrogatives!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Interrogatives');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Emotions topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Emotions!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Emotions');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Musical Instruments topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Musical Instruments!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Musical%20Instruments');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Transportation topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Transportation!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Transportation');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Places topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Places!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Places');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Travel topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Travel!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Travel');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Occupations topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Occupations!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Occupations');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Animals topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Animals!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Animals');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Food and Drink topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Food and Drink!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Food%20and%20Drink');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Clothing topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Clothing!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Clothing');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Seasons topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Seasons!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Seasons');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Vehicles topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Vehicles!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Vehicles');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Cooking topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Cooking!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Cooking');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Common Phrases topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Common Phrases!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Common%20Phrases');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Household Items topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Household Items!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Household%20Items');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Numbers topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Numbers!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Numbers');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});
**/

test('demo Directions topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Directions!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Directions');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});

test('demo Body Parts topic single word', async ({ page} ) => {
    await showMessagePage(page, "Lets learn about Body Parts!");

    const nextButton = page.locator('.next-button');

    await page.goto(baseURL + 'Body%20Parts');

    await expect(nextButton).toBeVisible();

    await runFlashcardLoop(page, 20);

    await showMessagePage(page, "Great Job! Follow for more!")
});