// assets
import Google from 'assets/images/google_grey.svg';

// components
import ListStar from './ListStar';
import ListTestimonials from './ListTestimonials';

// styles
import './index.css';

const CustomerTestimonials: React.FC = (): JSX.Element => (
  <article className='testimonials-list-container'>
    <div className='testimonials-list-container-box'>
      <header>
        <h3 className='title-header'>CUSTOMER TESTIMONIALS</h3>
      </header>
      <section className='list-data'>
        <div className='box-voted'>
          <h4 className='voted-box-title'>VOTED BEST ONLINE DISPENSARY IN CANADA</h4>
          <hr className='line-hor' />
          <div className='google-grey'>
            <img src={Google} alt='Google' />
          </div>
          <div className='bottom-box-voted'>
            <p className='excellence'>EXCELLENCE</p>
            <div className='rating-bottom'>
              <ListStar />
              <p className='total-reviews'>
                on 135 <span className='review-text'>Reviews</span>
              </p>
            </div>
          </div>
        </div>

        <ListTestimonials />
      </section>
    </div>
  </article>
);

export default CustomerTestimonials;
