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
import ItemCard from 'components/common/item';

// styles
import './index.css';
import ThumbnailList from './ThumbListImage';

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

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  const { image, name, sale, discount, price, category, rate, totalReviews, description } =
    product || {};

  return (
    <>
      <div className='detail-container'>
        <div className='image-container'>
          <div className='flex-container image-product'>
            <img src={image} alt='main product' />
          </div>
          <div className='thumb-list'>
            {Array.from({ length: 4 }).map((_, index) => (
              <ThumbnailList
                key={index}
                currentImage={currentImage}
                handleThumbnailClick={handleThumbnailClick}
                image={image}
                index={index} // Pass the index as a prop
              />
            ))}
          </div>
        </div>
        <div className='info-container'>
          <div className='overview-container'>
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
                  <div className='rate-svg'>
                    <img src={Star} alt='star' />
                  </div>
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
          <div className='effects-container'>
            {dataItemDetail.effects.map((e) => (
              <div className='effects-box'>
                <img src={e.image} />
                <div className='effects-text'>
                  <p className='title'>{e.title}</p>
                  <p className='content'>{e.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='description-container'>
            <p className='title'>description</p>
            <p className='content'>{description}</p>
          </div>
        </div>
      </div>
      <div className='featured-product'>
        <p className='featured-title'>Featured Product</p>
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
      </div>
    </>
  );
};

export default Detail;
