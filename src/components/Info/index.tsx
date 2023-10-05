// constants
import { DATA_INFO } from 'constants/listItem';

// components
import BoxInfoItem from './InfoItem';

// styles
import './index.css';

const InfoBottom: React.FC = (): JSX.Element => {
  return (
    <div className='box-info-bottom-container'>
      <div className='box-container'>
        {DATA_INFO.map(({ image, icon, title, description, to, shop }, index) => (
          <BoxInfoItem
            key={index}
            image={image}
            icon={icon}
            title={title}
            description={description}
            to={to as string}
            shop={shop}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoBottom;
