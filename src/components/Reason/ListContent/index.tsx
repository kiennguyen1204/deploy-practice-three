// constants
import { CONTENT_DATA } from 'constants/listItem';

// components
import ReasonItem from '../ReasonData';
import Image from 'components/common/Image';

// styles
import './index.css';

const ContentBox: React.FC = (): JSX.Element => {
  const listService = CONTENT_DATA.map((item) => ({
    ...item,
    icon: <Image src={item.url} alt={item.title} />
  }));

  return (
    <div className='content-box-container'>
      {listService.map((item) => (
        <ReasonItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContentBox;
