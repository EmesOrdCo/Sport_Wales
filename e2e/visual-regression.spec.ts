import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests
 * These tests capture screenshots and compare them to baseline images
 * to detect unintended visual changes
 */

test.describe('Visual Regression Tests', () => {
  
  test.describe('Homepage', () => {
    test('homepage looks correct', async ({ page }) => {
      await page.goto('/en');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('homepage.png', {
        fullPage: true,
        maxDiffPixels: 100,
      });
    });

    test('homepage header looks correct', async ({ page }) => {
      await page.goto('/en');
      const header = page.locator('header');
      await expect(header).toHaveScreenshot('header.png');
    });

    test('homepage footer looks correct', async ({ page }) => {
      await page.goto('/en');
      const footer = page.locator('footer');
      await expect(footer).toHaveScreenshot('footer.png');
    });
  });

  test.describe('Funding Page', () => {
    test('funding page looks correct', async ({ page }) => {
      await page.goto('/en/funding');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('funding-page.png', {
        fullPage: true,
        maxDiffPixels: 100,
      });
    });
  });

  test.describe('Search Page', () => {
    test('search page looks correct', async ({ page }) => {
      await page.goto('/en/search');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('search-page.png', {
        fullPage: true,
        maxDiffPixels: 100,
      });
    });

    test('search results look correct', async ({ page }) => {
      await page.goto('/en/search?q=funding');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('search-results.png', {
        fullPage: true,
        maxDiffPixels: 100,
      });
    });
  });

  test.describe('Mobile Views', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('homepage mobile looks correct', async ({ page }) => {
      await page.goto('/en');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('homepage-mobile.png', {
        fullPage: true,
        maxDiffPixels: 100,
      });
    });

    test('funding page mobile looks correct', async ({ page }) => {
      await page.goto('/en/funding');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('funding-mobile.png', {
        fullPage: true,
        maxDiffPixels: 100,
      });
    });
  });

  test.describe('Welsh Language', () => {
    test('Welsh homepage looks correct', async ({ page }) => {
      await page.goto('/cy');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('homepage-welsh.png', {
        fullPage: true,
        maxDiffPixels: 100,
      });
    });
  });
});

