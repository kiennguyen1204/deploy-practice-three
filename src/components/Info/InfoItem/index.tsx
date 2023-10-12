import { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  image: string;
  title: string;
  icon?: string;
  description: string;
  to: string;
  shop: string;
}

const BoxInfoItem: React.FC<Props> = ({
  image = '/src/assets/images/default_image.webp',
  title = '',
  description = 'Default Description',
  to = '',
  shop = '',
  icon = 'assets/images/default_image.webp'
}): JSX.Element => (
  <section className='item-box'>
    <picture className='flex-row-container card-image'>
      <img src={image} alt={title} />

      <img
        className='flex-container icon-image'
        src={icon}
        alt={`${title} Icon`}
        aria-hidden='true'
      />
    </picture>
    <h2 className='title'>{title}</h2>
    <p className='description'>{description}</p>
    <NavLink to={to} className='shop' aria-label={`Visit ${shop}`}>
      {shop}
    </NavLink>
  </section>
);

export default memo(BoxInfoItem);
