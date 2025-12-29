/**
 * Design Token Tests
 * Ensures brand compliance by verifying design tokens are correctly defined
 */

import fs from 'fs';
import path from 'path';

describe('Design Token System', () => {
  let cssContent: string;

  beforeAll(() => {
    const cssPath = path.join(process.cwd(), 'src/app/globals.css');
    cssContent = fs.readFileSync(cssPath, 'utf-8');
  });

  describe('Brand Colors', () => {
    it('defines brand red color', () => {
      expect(cssContent).toContain('--brand-red: #E11D2E');
    });

    it('defines brand yellow color', () => {
      expect(cssContent).toContain('--brand-yellow: #F4B400');
    });

    it('defines brand blue color', () => {
      expect(cssContent).toContain('--brand-blue: #123F56');
    });

    it('defines brand blue alt color', () => {
      expect(cssContent).toContain('--brand-blue-alt: #1E4A62');
    });
  });

  describe('Typography', () => {
    it('defines display font', () => {
      expect(cssContent).toContain("--font-display: 'Playfair Display'");
    });

    it('defines body font', () => {
      expect(cssContent).toContain("--font-body: 'Outfit'");
    });
  });

  describe('Spacing & Layout', () => {
    it('defines container max width', () => {
      expect(cssContent).toContain('--container-max:');
    });

    it('defines section spacing', () => {
      expect(cssContent).toContain('--section-spacing:');
    });
  });

  describe('Border Radius', () => {
    it('defines small radius', () => {
      expect(cssContent).toContain('--radius-sm:');
    });

    it('defines medium radius', () => {
      expect(cssContent).toContain('--radius-md:');
    });

    it('defines large radius', () => {
      expect(cssContent).toContain('--radius-lg:');
    });
  });

  describe('Shadows', () => {
    it('defines shadow levels', () => {
      expect(cssContent).toContain('--shadow-sm:');
      expect(cssContent).toContain('--shadow-md:');
      expect(cssContent).toContain('--shadow-lg:');
      expect(cssContent).toContain('--shadow-xl:');
    });
  });

  describe('Transitions', () => {
    it('defines transition speeds', () => {
      expect(cssContent).toContain('--transition-fast:');
      expect(cssContent).toContain('--transition-normal:');
      expect(cssContent).toContain('--transition-slow:');
    });
  });

  describe('Accessibility', () => {
    it('defines focus ring color', () => {
      expect(cssContent).toContain('--focus-ring:');
    });

    it('defines focus ring offset', () => {
      expect(cssContent).toContain('--focus-ring-offset:');
    });
  });
});

