import { memo } from 'react';

interface Props {
  item: {
    image: string;
    subtitle: string;
    title: string;
    description: string;
    to: string;
  };
}

const WeedEducationItem: React.FC<Props> = ({ item }): JSX.Element => {
  const { image, subtitle, title, description, to } = item;

  return (
    <article className='list-container weed-education-item' data-testid='weed-education-item'>
      <picture className='weed-education-item-image'>
        <img src={image} alt='main image' />
      </picture>

      <section className='wrapper-container weed-education-item-content'>
        <header className='wrapper-container weed-education-item-info'>
          <h2 className='weed-education-item-subtitle' data-testid='subtitle-test'>
            {subtitle}
          </h2>
          <h1 className='weed-education-item-title' data-testid='title-test'>
            {title}
          </h1>
          <p className='weed-education-item-description'>{description}</p>
        </header>
        <footer className='weed-education-item-read-more'>
          <a href={to} className='base-link'>
            Read More
          </a>
        </footer>
      </section>
    </article>
  );
};

export default memo(WeedEducationItem);
