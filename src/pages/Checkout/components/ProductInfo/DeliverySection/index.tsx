// components
import Image from 'components/common/Image';

interface Props {
  title?: string;
  imgSrc: string;
  imgAlt: string;
  boldText?: string;
  regularText?: string;
}

export const DeliverySection: React.FC<Props> = ({
  title,
  imgSrc,
  imgAlt,
  boldText,
  regularText
}) => (
  <section className='flex-column delivery-content'>
    {title && <h2 className='image-title'>{title}</h2>}
    <div className='flex-column delivery-box'>
      <div className='flex-container deli-icon'>
        <Image src={imgSrc} alt={imgAlt} />
      </div>
      {boldText && <p className='deli-bold'>{boldText}</p>}
      {regularText && <p className='deli-text'>{regularText}</p>}
    </div>
  </section>
);
