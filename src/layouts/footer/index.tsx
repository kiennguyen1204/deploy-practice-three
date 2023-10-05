import { FooterBanner } from 'layouts/footer/FooterBanner';
import FooterPattern from 'layouts/footer/FooterPattern';

export const Footer: React.FC = (): JSX.Element => (
  <footer className='footer-container'>
    <FooterBanner />
    <FooterPattern />
  </footer>
);
