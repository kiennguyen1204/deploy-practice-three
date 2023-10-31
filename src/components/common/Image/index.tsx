// assets
import { IMG_NOT_FOUND } from 'constants/common';
import { DECODING_TYPES, LOADING_TYPES } from 'constants/enums';

interface Props {
  src: string | undefined;
  alt: string;
  className?: string;
  decoding?: DECODING_TYPES;
  loading?: LOADING_TYPES;
}

const Image: React.FC<Props> = ({
  src,
  alt,
  className,
  decoding = DECODING_TYPES.Async,
  loading = LOADING_TYPES.Lazy
}): JSX.Element => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target) {
      target.src = IMG_NOT_FOUND;
    }
  };

  return (
    <img
      src={src}
      onError={handleImageError}
      alt={alt}
      className={className}
      decoding={decoding}
      loading={loading}
    />
  );
};

export default Image;
