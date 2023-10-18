// constants
import { MAX_STAR } from 'constants/common';

// assets
import Star from 'assets/images/star.svg';

// styles
import './index.css';

export const RatingAndReview: React.FC = (): JSX.Element => (
  <div className='align-center rating-n-review'>
    <span className='align-center rating'>
      <img src={Star} alt='Star' />
      <span className='star-text'>4.6/ {MAX_STAR}</span>
    </span>
    <span className='sign'></span>
    <span className='align-center reviews'>
      135
      <span className='text-review'>Reviews</span>
    </span>
  </div>
);
