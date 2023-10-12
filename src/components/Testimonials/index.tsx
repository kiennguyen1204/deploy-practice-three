import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// assets
import Star from 'assets/images/star.svg';
import Google from 'assets/images/google_grey.svg';

// mocks
import { TESTIMONIALS_LIST } from 'mocks/testimonialsList';

// components
import SplideArrows from 'components/common/Arrow';

// styles
import './index.css';

const CustomerTestimonials: React.FC = (): JSX.Element => {
  const splideOpts = {
    type: 'loop',
    perPage: 1.8,
    perMove: 1,
    gap: '24px',
    padding: '15%',
    pagination: false,
    breakpoints: {
      576: { perPage: 1, padding: '5%' },
      991: { perPage: 2 },
      1024: {
        perPage: 1.5
      },
      1100: { perPage: 1.5 },
      1200: { perPage: 1 },
      1920: { gap: '32px' }
    }
  };

  const MAX_STAR = 5;

  return (
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
                <div className='list-star'>
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <img key={index} src={Star} alt='Star' />
                    ))}
                </div>
                <p className='total-reviews'>
                  on 135 <span className='review-text'>Reviews</span>
                </p>
              </div>
            </div>
          </div>

          <div className='testimonials-list'>
            <Splide hasTrack={false} options={splideOpts} aria-label='My Favorite Images'>
              <SplideTrack>
                {TESTIMONIALS_LIST.map((el, index) => {
                  const arrStar = Array.from(
                    {
                      length: MAX_STAR
                    },
                    (_, index) => index + 1
                  );
                  return (
                    <SplideSlide key={index}>
                      <article className='testimonials-container-box'>
                        <header className='testimonials-container-box-header'>
                          <figure className='card-image'>
                            <img
                              decoding='async'
                              loading='lazy'
                              src={el.avatar}
                              className='splide-product-image'
                              alt={el.userName}
                            />
                            <figcaption className='user-name'>{el.userName}</figcaption>
                          </figure>
                        </header>
                        <div className='box-content-testimonials'>
                          <div className='rating-star'>
                            {arrStar.map((item) => (
                              <img
                                key={item}
                                src={item <= el.star ? Star : '/src/assets/images/star.svg'}
                                alt='Star'
                              />
                            ))}
                          </div>
                          <p className='comment-content'>{el.comment}</p>
                          <p className='date-comment'>{el.date}</p>
                        </div>
                      </article>
                    </SplideSlide>
                  );
                })}
              </SplideTrack>

              <SplideArrows />
            </Splide>
          </div>
        </section>
      </div>
    </article>
  );
};

export default CustomerTestimonials;
