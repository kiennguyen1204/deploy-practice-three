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
    image = '/src/assets/images/default_image.webp',
    subtitle = 'Default Subtitle',
    title = 'Default Title',
    description = 'Default Description',
    to = '/default-link'
  } = item || {};

  return (
    <article className='weed-education-item'>
      <figure className='weed-education-item-image'>
        <img src={image} alt='main image' />
      </figure>

      <section className='wrapper-container weed-education-item-content'>
        <header className='weed-education-item-info'>
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
