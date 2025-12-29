import { test, expect } from '@playwright/test';

test.describe('Search Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/search');
  });

  test('displays search page', async ({ page }) => {
    await expect(page).toHaveTitle(/Search/);
  });

  test('displays search input', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /Search Sport Wales/i });
    await expect(searchInput).toBeVisible();
  });

  test('displays search button', async ({ page }) => {
    const searchButton = page.getByRole('button', { name: /Search/i });
    await expect(searchButton).toBeVisible();
  });

  test('displays browse by category section', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /Browse by Category/i });
    await expect(heading).toBeVisible();
  });

  test('can perform a search', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /Search Sport Wales/i });
    await searchInput.fill('funding');
    await searchInput.press('Enter');
    await expect(page).toHaveURL(/\?q=funding/);
  });

  test('displays search results', async ({ page }) => {
    await page.goto('/en/search?q=funding');
    const resultsText = page.getByText(/results for/i);
    await expect(resultsText).toBeVisible();
  });
});

