// constants
import { BUTTON_VARIANT } from 'constants/enums';
import { CONTENT_DATA_BOTTOM } from 'constants/listItem';

// components
import ReferFriendItem from '../DataBottom';
import Button from 'components/common/Button';
import Image from 'components/common/Image';

// styles
import './index.css';

const ContentBottom: React.FC = (): JSX.Element => {
  const handleNavigateToCategory = () => {
    // TODO: handle onclick
  };

  const listContentBottom = CONTENT_DATA_BOTTOM.map((item) => ({
    ...item,
    icon: <Image src={item.url} alt={item.urlAlt} />
  }));

  return (
    <div className='content-bottom'>
      <div className='list-content'>
        {listContentBottom.map((el) => (
          <ReferFriendItem
            index={el.id}
            icon={el.icon}
            title={el.title}
            description={el.description}
          />
        ))}
      </div>

      <Button
        variant={BUTTON_VARIANT.PRIMARY}
        onClick={handleNavigateToCategory}
        label='Choose your Weed'
        className='btn btn-action flex-container custom-button'
      />
    </div>
  );
};

export default ContentBottom;
