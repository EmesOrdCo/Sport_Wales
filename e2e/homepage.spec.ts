import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Sport Wales/);
  });

  test('displays logo', async ({ page }) => {
    const logo = page.getByRole('link', { name: /Sport Wales - Go to homepage/i });
    await expect(logo).toBeVisible();
  });

  test('displays navigation menu button', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /Menu/i });
    await expect(menuButton).toBeVisible();
  });

  test('displays language switcher', async ({ page }) => {
    const enButton = page.getByRole('button', { name: /Switch to English/i });
    const cyButton = page.getByRole('button', { name: /Newid i Gymraeg/i });
    await expect(enButton).toBeVisible();
    await expect(cyButton).toBeVisible();
  });

  test('displays Apply for Funding button', async ({ page }) => {
    const fundingButton = page.getByRole('link', { name: /Apply for Funding/i });
    await expect(fundingButton).toBeVisible();
  });

  test('displays footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});

test.describe('Language Switching', () => {
  test('can switch to Welsh', async ({ page }) => {
    await page.goto('/en');
    const cyButton = page.getByRole('button', { name: /Newid i Gymraeg/i });
    await cyButton.click();
    await expect(page).toHaveURL(/\/cy/);
  });

  test('can switch to English from Welsh', async ({ page }) => {
    await page.goto('/cy');
    const enButton = page.getByRole('button', { name: /Switch to English/i });
    await enButton.click();
    await expect(page).toHaveURL(/\/en/);
  });
});

test.describe('Accessibility', () => {
  test('has skip link', async ({ page }) => {
    await page.goto('/en');
    const skipLink = page.getByRole('link', { name: /Skip to main content/i });
    await expect(skipLink).toBeAttached();
  });

  test('skip link becomes visible on focus', async ({ page }) => {
    await page.goto('/en');
    await page.keyboard.press('Tab');
    const skipLink = page.getByRole('link', { name: /Skip to main content/i });
    await expect(skipLink).toBeFocused();
  });

  test('has proper heading hierarchy', async ({ page }) => {
    await page.goto('/en');
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });
});

