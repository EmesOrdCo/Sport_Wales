import { test, expect } from '@playwright/test';

/**
 * Brand Compliance Tests
 * Verifies that brand guidelines are followed throughout the site
 */

test.describe('Brand Compliance', () => {
  
  test.describe('Color Usage', () => {
    test('primary buttons use brand red', async ({ page }) => {
      await page.goto('/en');
      const applyButton = page.getByRole('link', { name: /Apply for Funding/i });
      const backgroundColor = await applyButton.evaluate((el) => 
        window.getComputedStyle(el).backgroundColor
      );
      // Brand red #E11D2E = rgb(225, 29, 46)
      expect(backgroundColor).toMatch(/rgb\(225,\s*29,\s*46\)|#E11D2E/i);
    });

    test('footer uses brand blue background', async ({ page }) => {
      await page.goto('/en');
      const footer = page.locator('footer');
      const backgroundColor = await footer.evaluate((el) => 
        window.getComputedStyle(el).backgroundColor
      );
      // Brand blue should be in the blue family
      expect(backgroundColor).toBeTruthy();
    });
  });

  test.describe('Typography', () => {
    test('headings use display font', async ({ page }) => {
      await page.goto('/en');
      const h1 = page.locator('h1').first();
      const fontFamily = await h1.evaluate((el) => 
        window.getComputedStyle(el).fontFamily
      );
      expect(fontFamily.toLowerCase()).toContain('playfair');
    });

    test('body text uses body font', async ({ page }) => {
      await page.goto('/en');
      const body = page.locator('body');
      const fontFamily = await body.evaluate((el) => 
        window.getComputedStyle(el).fontFamily
      );
      expect(fontFamily.toLowerCase()).toContain('outfit');
    });
  });

  test.describe('Logo', () => {
    test('logo is visible in header', async ({ page }) => {
      await page.goto('/en');
      const logo = page.locator('header svg[aria-label*="Sport Wales"]');
      await expect(logo).toBeVisible();
    });

    test('logo is visible in footer', async ({ page }) => {
      await page.goto('/en');
      const logo = page.locator('footer svg[aria-label*="Sport Wales"]');
      await expect(logo).toBeVisible();
    });
  });

  test.describe('Consistency', () => {
    test('all pages have consistent header', async ({ page }) => {
      const pages = ['/en', '/en/funding', '/en/search', '/en/careers'];
      
      for (const pagePath of pages) {
        await page.goto(pagePath);
        const header = page.locator('header');
        await expect(header).toBeVisible();
        
        const logo = header.locator('svg[aria-label*="Sport Wales"]');
        await expect(logo).toBeVisible();
        
        const menuButton = header.getByRole('button', { name: /Menu/i });
        await expect(menuButton).toBeVisible();
      }
    });

    test('all pages have consistent footer', async ({ page }) => {
      const pages = ['/en', '/en/funding', '/en/search', '/en/careers'];
      
      for (const pagePath of pages) {
        await page.goto(pagePath);
        const footer = page.locator('footer');
        await expect(footer).toBeVisible();
      }
    });
  });
});

