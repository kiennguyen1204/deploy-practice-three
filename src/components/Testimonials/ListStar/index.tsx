// assets
import Star from 'assets/images/star.svg';

// styles
import './index.css';

const ListStar: React.FC = (): JSX.Element => (
  <div className='list-star'>
    {[...Array(5)].map((_, index) => (
      <img key={index} src={Star} alt='Star' />
    ))}
  </div>
);

export default ListStar;
