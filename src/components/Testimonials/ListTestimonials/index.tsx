import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

// assets
import Star from 'assets/images/star.svg';

// mocks
import { TESTIMONIALS_LIST } from 'mocks/testimonialsList';

// constants
import { MAX_STAR } from 'constants/common';

// styles
import './index.css';

const ListTestimonials: React.FC = (): JSX.Element => {
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

  return (
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
      </Splide>
    </div>
  );
};

export default ListTestimonials;
