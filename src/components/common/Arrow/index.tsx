// asset
import ArrowPrev from 'assets/images/arrow_left.svg';
import ArrowNext from 'assets/images/arrow_right.svg';

// styles
import './index.css';

const SplideArrows: React.FC = (): JSX.Element => (
  <section className='splide__arrows'>
    <button className='splide__arrow splide__arrow--prev'>
      <img src={ArrowPrev} alt='prev arrow' />
    </button>
    <button className='splide__arrow splide__arrow--next'>
      <img src={ArrowNext} alt='prev arrow' />
    </button>
  </section>
);

export default SplideArrows;
