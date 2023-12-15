const { test, expect } = require('@playwright/test');

test('Exemple de test Playwright', async ({ page }) => {
  // Écrire votre test Playwright ici
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
