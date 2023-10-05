import './index.css';

const TopNavbar: React.FC = (): JSX.Element => (
  <section className='limit-toolbar-container'>
    <div className='limit-toolbar-box'>
      <div className='limit-toolbar-info'>
        <div className='limit-toolbar-text'>LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</div>
        <div className='limit-toolbar-time'>00:00:00</div>
      </div>
    </div>
  </section>
);

export default TopNavbar;
