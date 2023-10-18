import { memo } from 'react';

export interface Props {
  item: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
}

const ReasonItem: React.FC<Props> = ({ item }): JSX.Element => {
  const { icon, title, description } = item;

  return (
    <section className='item-box'>
      <div className='icon'>{icon}</div>
      <p className='title-box'>{title}</p>
      <p className='description'>{description}</p>
    </section>
  );
};

export default memo(ReasonItem);
