import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      language: 'Language',
    };
    return translations[key] || key;
  },
  useLocale: () => 'en',
}));

// Mock the navigation
jest.mock('@/i18n/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

// Mock the routing
jest.mock('@/i18n/routing', () => ({
  routing: {
    locales: ['en', 'cy'],
  },
}));

describe('LanguageSwitcher Component', () => {
  it('renders language buttons', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('CY')).toBeInTheDocument();
  });

  it('has correct aria-label for language group', () => {
    render(<LanguageSwitcher />);
    const group = screen.getByRole('group', { name: /language/i });
    expect(group).toBeInTheDocument();
  });

  it('shows English as active when locale is en', () => {
    render(<LanguageSwitcher />);
    const enButton = screen.getByText('EN');
    expect(enButton).toHaveAttribute('aria-current', 'true');
  });

  it('renders in light variant by default', () => {
    render(<LanguageSwitcher />);
    const group = screen.getByRole('group');
    expect(group).toHaveClass('border-[#E2E8F0]');
  });

  it('renders in dark variant when specified', () => {
    render(<LanguageSwitcher variant="dark" />);
    const group = screen.getByRole('group');
    expect(group).toHaveClass('border-white/20');
  });
});

