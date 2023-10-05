interface Props {
  currentImage: number;
  handleThumbnailClick: (index: number) => void;
  image?: string;
  index: number;
}

const ThumbnailList: React.FC<Props> = ({
  currentImage,
  handleThumbnailClick,
  image,
  index
}): JSX.Element => {
  const handleClick = () => {
    handleThumbnailClick(index);
  };

  return (
    <div className='thumb-list'>
      <a className={`thumb-item ${index === currentImage && 'choosing'}`} onClick={handleClick}>
        <img src={image} alt={`Thumbnail ${index}`} />
      </a>
    </div>
  );
};

export default ThumbnailList;
