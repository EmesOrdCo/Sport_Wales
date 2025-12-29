import { render, screen } from '@testing-library/react';
import { Logo } from '@/components/ui/Logo';

describe('Logo Component', () => {
  it('renders without crashing', () => {
    render(<Logo />);
    const logo = screen.getByLabelText('Sport Wales / Chwaraeon Cymru');
    expect(logo).toBeInTheDocument();
  });

  it('renders in light variant by default', () => {
    render(<Logo />);
    const svg = screen.getByLabelText('Sport Wales / Chwaraeon Cymru');
    expect(svg).toBeInTheDocument();
  });

  it('renders in dark variant when specified', () => {
    render(<Logo variant="dark" />);
    const svg = screen.getByLabelText('Sport Wales / Chwaraeon Cymru');
    expect(svg).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Logo className="custom-class" />);
    const svg = screen.getByLabelText('Sport Wales / Chwaraeon Cymru');
    expect(svg).toHaveClass('custom-class');
  });
});

