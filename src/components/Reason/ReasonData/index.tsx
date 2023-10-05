import { memo } from 'react';

interface Props {
  item: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
}

const ReasonItem: React.FC<Props> = ({ item }): JSX.Element => {
  const { icon, title = 'Default title', description = 'Default description' } = item;

  return (
    <div className='item-box'>
      <div className='icon'>{icon}</div>
      <p className='title-box'>{title}</p>
      <p className='description'>{description}</p>
    </div>
  );
};

export default memo(ReasonItem);
