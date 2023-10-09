import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// assets
import Star from 'assets/images/star.svg';

// mocks
import { dataItemDetail } from 'mocks/dataList';

// interfaces
import { Item } from 'interfaces/item';

// services
import { getProductById, getProducts } from 'services/api-action';

// components
import ItemCard from 'components/common/Item';

// styles
import './index.css';

const Detail: React.FC = (): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Item | null>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [featuredProducts, setFeaturedProducts] = useState<Item[]>([]);

  useEffect(() => {
    const fetchProductById = async () => {
      if (productId) {
        const data = await getProductById(productId);
        setProduct(data || null);
      }
    };

    fetchProductById();
  }, [productId]);

  const handleOnclick = () => {
    // TODO: Handle click
  };

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const productsData = await getProducts();
      setFeaturedProducts(productsData);
    };

    fetchFeaturedProducts();
  }, []);

  const { image, name, sale, discount, price, category, rate, totalReviews, description } =
    product || {};

  return (
    <>
      <article className='list-container detail-container'>
        <section className='list-container image-container'>
          <picture className='flex-container image-product'>
            <img src={image} alt='main product' />
          </picture>

          <div className='thumb-list'>
            {Array.from({ length: 4 }).map((_, index) => {
              const handleThumbnailClick = () => {
                setCurrentImage(index);
              };

              return (
                <a
                  className={`thumb-item ${index === currentImage && 'choosing'}`}
                  onClick={handleThumbnailClick}>
                  <img src={image} alt={`Thumbnail ${index}`} />
                </a>
              );
            })}
          </div>
        </section>

        <div className='list-container info-container'>
          <div className='list-container overview-container'>
            <p className='category'>{category}</p>
            <p className='title'>{name}</p>
            <div className='sale'>
              <p>{sale}</p>
            </div>
            <div className='numeral-container'>
              <div className='price-container'>
                <p className='discount'>{discount}</p>
                <p className='price'>{price}</p>
              </div>
              <div className='review-container'>
                <div className='rate-box'>
                  <picture className='rate-svg'>
                    <img src={Star} alt='star' />
                  </picture>
                  <span className='rate-text'>{rate}</span>
                </div>
                <div className='divider'></div>
                <div className='review-box'>
                  <div className='review-text'>
                    {totalReviews} <span className='reviews'>Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='list-container effects-container'>
            {dataItemDetail.effects.map((e) => (
              <figure className='effects-box'>
                <img src={e.image} />
                <figcaption className='effects-text'>
                  <p className='title'>{e.title}</p>
                  <p className='content'>{e.content}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className='list-container description-container'>
            <p className='title'>description</p>
            <p className='content'>{description}</p>
          </div>
        </div>
      </article>

      <section className='featured-product'>
        <h2 className='featured-title'>Featured Product</h2>
        <div className='container-list-item'>
          {featuredProducts.map((featuredProduct, index) => (
            <ItemCard
              item={featuredProduct}
              key={index}
              index={0}
              className={'card-item'}
              onClick={handleOnclick}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Detail;
