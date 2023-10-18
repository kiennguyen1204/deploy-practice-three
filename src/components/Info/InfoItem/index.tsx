import { memo } from 'react';
import { NavLink } from 'react-router-dom';

export interface Props {
  image: string;
  title: string;
  icon?: string;
  description: string;
  to: string;
  shop: string;
}

const BoxInfoItem: React.FC<Props> = ({
  image,
  title,
  description,
  to,
  shop,
  icon = '/src/assets/images/default_image.webp'
}): JSX.Element => (
  <section className='item-box' data-testId='box-info-item'>
    <picture className='flex-row-container card-image'>
      <img src={image} alt={title} />

      <img
        className='flex-container icon-image'
        src={icon}
        alt={`${title} Icon`}
        aria-hidden='true'
      />
    </picture>
    <h2 className='title' data-testid='title'>
      {title}
    </h2>
    <p className='description' data-testid='description'>
      {description}
    </p>
    <NavLink to={to} className='shop' aria-label={`Visit ${shop}`} data-testid='shop'>
      {shop}
    </NavLink>
  </section>
);

export default memo(BoxInfoItem);
