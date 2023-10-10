import { memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  item: {
    image?: string;
    subtitle?: string;
    title?: string;
    description?: string;
    to?: string;
  };
}

const WeedEducationItem: React.FC<Props> = ({ item }): JSX.Element => {
  const {
    image = '../../../assets/images/default_image.webp',
    subtitle = '',
    title = '',
    description = 'Default Description',
    to = 'https://dol.ny.gov/cannabis-education'
  } = item || {};

  return (
    <article className='list-container weed-education-item'>
      <picture className='weed-education-item-image'>
        <img src={image} alt='main image' />
      </picture>

      <section className='wrapper-container weed-education-item-content'>
        <header className='wrapper-container weed-education-item-info'>
          <h2 className='weed-education-item-subtitle'>{subtitle}</h2>
          <h1 className='weed-education-item-title'>{title}</h1>
          <p className='weed-education-item-description'>{description}</p>
        </header>
        <footer className='weed-education-item-read-more'>
          <Link to={to} className='base-link'>
            Read More
          </Link>
        </footer>
      </section>
    </article>
  );
};

export default memo(WeedEducationItem);
