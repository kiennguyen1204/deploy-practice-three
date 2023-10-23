import React, { memo, useCallback } from 'react';

// constants
import { Product } from 'interfaces/item';
import { SOLD_OUT } from 'constants/common';

// assets
import Star from 'assets/images/seller/star.svg';

// styles
import './index.css';
import { Link } from 'react-router-dom';

export interface Props {
  item: Product;
  className: string;
  onAddToCart: (product: Product) => void;
}

const ItemCard: React.FC<Props> = ({ item, className, onAddToCart }): JSX.Element => {
  const MAX_STAR = 5;

  const { isSoldOut, discount, image, category, name, rate, reviews, sale, price, volume } = item;

  const handleAddToCart = useCallback(() => {
    onAddToCart(item);
  }, [onAddToCart, item]);

  return (
    <article
      className={`item-card ${className}`}
      data-testid={`item-card-${item.id}`}
      key={item.id}>
      <Link to={`/products/${item.id}`} key={item.id}>
        <section className='image-card'>
          {isSoldOut && (
            <p className='sold-out' data-testid='sold-out'>
              Out Of Stock
            </p>
          )}
          <img src={image} alt={isSoldOut ? SOLD_OUT : ''} data-testid='item-image' />
        </section>

        <section className='content-item'>
          <p className='cate-item' data-testid='category'>
            {category}
          </p>
          <h2 className='title-item' data-testid='name'>
            {name}
          </h2>

          <div className='star-review'>
            <span className='voted'>
              <img src={Star} alt='Star' data-testid='star-image' />
              {rate}/{MAX_STAR}
            </span>

            <span className='review' data-testid='reviews'>
              {reviews}
              <span className='reviewsText'>Reviews</span>
            </span>
          </div>

          <div className='sale' data-testid='sale'>
            {sale}
          </div>

          <div className='discount-n-price' data-testid='discount'>
            {discount && <p className='discount'>${discount}</p>}
            <p className='price' data-testid='price'>
              {price}
            </p>
          </div>

          <div className='volumes' data-testid='volumes'>
            {volume.map((item: string, index: number) => (
              <div className='volume-child' key={index} data-testid={`volume-${index}`}>
                {item}
              </div>
            ))}
          </div>
        </section>
      </Link>

      <div className='flex-container button-buy'>
        <button
          className='btn btn-add-cart'
          onClick={handleAddToCart}
          data-testid='add-to-cart-button'>
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default memo(ItemCard);
