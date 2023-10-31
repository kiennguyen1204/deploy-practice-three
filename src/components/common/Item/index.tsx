import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

// interface
import { Product } from 'interfaces/item';

// assets
import Star from 'assets/images/seller/star.svg';

// constants
import { MAX_STAR, SOLD_OUT } from 'constants/common';

// components
import Image from 'components/common/Image';

import Volumes from '../Volumes';

// styles
import './index.css';

export interface Props {
  item: Product;
  className: string;
  onAddToCart: (product: Product) => void;
}

const ItemCard: React.FC<Props> = ({ item, className, onAddToCart }): JSX.Element => {
  const {
    isSoldOut,
    discount,
    image,
    category,
    name,
    rate = 0,
    reviews,
    sale,
    price,
    volume
  } = item;

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
          <Image src={image} alt={isSoldOut ? SOLD_OUT : ''} data-testid='item-image' />
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
              <Image src={Star} alt='Star' data-testid='star-image' />
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

          <Volumes volume={volume} />
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
