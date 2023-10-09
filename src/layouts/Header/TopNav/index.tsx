import './index.css';

const TopNavbar: React.FC = (): JSX.Element => (
  <section className='limit-toolbar-container'>
    <div className='limit-toolbar-box'>
      <div className='limit-toolbar-info'>
        <p className='limit-toolbar-text'>LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</p>
        <p className='limit-toolbar-time'>00:00:00</p>
      </div>
    </div>
  </section>
);

export default TopNavbar;
