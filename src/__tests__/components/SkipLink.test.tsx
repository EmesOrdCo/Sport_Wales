import { render, screen, fireEvent } from '@testing-library/react';
import { SkipLink } from '@/components/ui/SkipLink';

// Mock the translations
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      skipToContent: 'Skip to main content',
    };
    return translations[key] || key;
  },
}));

describe('SkipLink Component', () => {
  it('renders skip link', () => {
    render(<SkipLink />);
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toBeInTheDocument();
  });

  it('has correct href attribute', () => {
    render(<SkipLink />);
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toHaveAttribute('href', '#main-content');
  });

  it('is visually hidden by default (sr-only)', () => {
    render(<SkipLink />);
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toHaveClass('skip-link');
  });
});

