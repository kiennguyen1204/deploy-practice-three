import { Link } from 'react-router-dom';

// assets
import Logo from 'assets/images/footer_logo.svg';

// constants
import { QUICK_LINKS, MORE_LINKS, PAYMENT_METHODS } from 'constants/listLink';
import { TYPE_LINKS } from 'constants/enums';

// components
import PaymentMethodItem from 'layouts/Footer/PaymentMethod';
import FooterLinkList from 'layouts/Footer/FooterLinkList';

// styles
import './index.css';

const FooterPattern: React.FC = () => (
  <article className='footer-insider-container'>
    <section className='footer-insider-box'>
      <div className='wrapper-container footer-top'>
        <div className='wrapper-container footer-logo'>
          <h3 className='footer-title'>
            <Link to='/'>
              <img src={Logo} className='footer-logo' alt='logo' />
            </Link>
          </h3>
          <p className='footer-description'>
            #1 Canadian top rated online dispensary that meets the customers needs in every single
            medical marijuana aspect. The team here at TopShelfBC is heavily involved in the
            Canadian cannabis industry for over 15 years. We strive to provide the top quality
            products, service and care at the lowest prices you’ll ever find.
          </p>
        </div>
      </div>

      <div className='wrapper-container footer-content'>
        <FooterLinkList title='QUICK LINK' links={QUICK_LINKS} type={TYPE_LINKS.QUICK} />
        <FooterLinkList
          title='CONTACT US'
          links={[{ to: 'mailto:info@topshelfbc.cc', name: 'info@topshelfbc.cc' }]}
        />
        <FooterLinkList title='MORE' links={MORE_LINKS} type={TYPE_LINKS.MORE} />
        <div className='footer-content-item payment-method'>
          <ul className='list-group list-unstyled'>
            {PAYMENT_METHODS.map((el, index) => (
              <PaymentMethodItem key={index} {...el} />
            ))}
          </ul>
        </div>
      </div>
    </section>

    <hr className='spacing-line' />

    <section className='copyright wrapper-container'>
      <div className='list-group-copyright list-unstyled'>
        <div className='group-item'>
          <ul className='group-item-inner list-unstyled'>
            <li className='inner-item'>
              <Link to='/' className='inner-item-link'>
                Out Of Stock
              </Link>
            </li>
            <li className='inner-item'>
              <Link to='/' className='inner-item-link'>
                Privacy Policy
              </Link>
            </li>
            <li className='inner-item'>
              <Link to='/' className='inner-item-link'>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className='group-item'>
          <span className='copyright-text'>© 2022 Top Shelf BC. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  </article>
);

export default FooterPattern;
