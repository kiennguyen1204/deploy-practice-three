import { useState } from 'react';

// components
import Image from 'components/common/Image';

// styles
import './index.css';

interface Props {
  image?: string;
}

const ThumbsList: React.FC<Props> = ({ image }): JSX.Element => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  return (
    <div className='thumb-list'>
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <a
            className={`thumb-item ${index === currentImage && 'choosing'}`}
            onClick={() => setCurrentImage(index)}>
            <Image src={image} alt={`Thumbnail ${index}`} />
          </a>
        );
      })}
    </div>
  );
};

export default ThumbsList;
