// tests/e2e/home.test.js
const { test, expect } = require('@playwright/test');

test('Page d\'accueil se charge correctement', async ({ page }) => {
  await page.goto('https://xata-search-aymen04.vercel.app');
  await expect(page).toHaveTitle('XMDB: Xata Movie Database');
  // Ajoutez d'autres vérifications ici
});
