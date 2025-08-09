// flashcardActions.js


export async function play(buttonLocator, page) {
  await buttonLocator.waitFor({ state: 'visible' });
  await buttonLocator.click();
  await waitForAudio(page);
  console.log("finished audio");
}

export async function flip(flashcardLocator) {
  await flashcardLocator.waitFor({ state: 'visible' });
  await flashcardLocator.click();
}

export async function next(nextButtonLocator) {
  await nextButtonLocator.waitFor({ state: 'visible' });
  await nextButtonLocator.click();
}

export async function showMessagePage(page, message) {

  await page.setContent(`
    <div style="
      display:flex; 
      height:100vh; 
      justify-content:center; 
      align-items:center; 
      font-size:3rem; 
      font-family:sans-serif;
      ">
        ${message}
    </div>
  `);

  await page.waitForTimeout(4000);
}

export async function runFlashcardLoop(page, iterations = 20) {
  for (let i = 0; i < iterations; i++) {
    const playButtonFront = page.locator('.play-button-front');
    const playButtonBack = page.locator('.play-button-back');
    const flashcard = page.locator('.flashcard');
    const nextButton = page.locator('.next-button');

    await play(playButtonFront, page);

    await flip(flashcard);

    await page.waitForTimeout(1000);

    await play(playButtonBack, page);

    await page.waitForTimeout(500);

    await play(playButtonBack, page);

    await page.waitForTimeout(1000);

    await flip(flashcard);

    await page.waitForTimeout(1000);

    await play(playButtonFront, page);

    await page.waitForTimeout(500);

    if (i < iterations - 1) await next(nextButton);

    await page.waitForTimeout(1000); // wait before next iteration
  }
}

async function waitForAudio(page) {
  await page.evaluate(() => {
    return new Promise(resolve => {
      window.addEventListener('audioFinished', resolve, { once: true });
      console.log("added event?")
    });
  });
}

