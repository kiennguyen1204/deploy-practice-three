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
  image,
  title = 'Default Title',
  description = 'Default Description',
  to,
  shop,
  icon
}): JSX.Element => (
  <div className='item-box'>
    <div className='card-image'>
      <img src={image} alt={title} />
      {icon && <img className='flex-container icon-image' src={icon} alt={title} />}
    </div>
    <p className='title'>{title}</p>
    <p className='description'>{description}</p>
    <NavLink to={to} className='shop'>
      {shop}
    </NavLink>
  </div>
);

export default memo(BoxInfoItem);
