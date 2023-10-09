import { FooterBanner } from 'layouts/Footer/FooterBanner';
import FooterPattern from 'layouts/Footer/FooterPattern';

export const Footer: React.FC = (): JSX.Element => (
  <footer className='footer-container'>
    <FooterBanner />
    <FooterPattern />
  </footer>
);
