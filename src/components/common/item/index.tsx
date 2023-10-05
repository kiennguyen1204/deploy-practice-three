import React, { memo } from 'react';

// constants
import { Item } from 'interfaces/item';

// assets
import Star from 'assets/images/seller/star.svg';

// styles
import './index.css';
import { Link } from 'react-router-dom';

interface Props {
  item: Item;
  index: number;
  className: string;
  onClick: () => void;
}

const ItemCard: React.FC<Props> = ({ item, index, className, onClick }): JSX.Element => {
  const MAX_STAR = 5;

  const {
    perPrice = 'Default Per Price',
    isSoldOut = false,
    discount = 'Default Discount',
    unit = 'Default Unit',
    image,
    title,
    category,
    name,
    rate,
    reviews,
    sale,
    price,
    volume
  } = item;

  return (
    <div className={`item-card ${className} ${item.id}`} key={index}>
      <Link to={`/products/${item.id}`} key={item.id}>
        <div className='image-card'>
          {perPrice && <p className='per-price'>{perPrice}</p>}
          {isSoldOut && <p className='sold-out'>Sold Out</p>}
          <img src={image} alt={title} />
        </div>

        <div className='content-item'>
          <p className='cate-item'>{category}</p>
          <p className='title-item'>{name}</p>

          <div className='star-review'>
            <span className='voted'>
              <img src={Star} alt='Star' />
              {rate}/{MAX_STAR}
            </span>

            <span className='review'>
              {reviews}
              <span className='reviewsText'>Reviews</span>
            </span>
          </div>

          <div className='purity'>{sale}</div>

          <div className='discount-n-price'>
            {discount && <p className='discount'>{discount}</p>}
            <p className='price'>
              {price}
              {!discount && unit && unit.length > 0 && <span className='unit'>{` / ${unit}`}</span>}
            </p>
          </div>

          <div className='volumes'>
            {volume.map((item: string, index: number) => (
              <div className='volume-child' key={index}>
                {item}
              </div>
            ))}
          </div>

          <div className='button-buy'>
            <button className='btn btn-add-cart' onClick={onClick}>
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default memo(ItemCard);
