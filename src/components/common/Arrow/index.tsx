import './index.css';

const SplideArrows: React.FC = (): JSX.Element => {
  return (
    <div className='splide__arrows'>
      <button className='splide__arrow splide__arrow--prev'>
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m15 6l-6 6l6 6'
          />
        </svg>
      </button>
      <button className='splide__arrow splide__arrow--next'>
        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m9 6l6 6l-6 6'
          />
        </svg>
      </button>
    </div>
  );
};

export default SplideArrows;
