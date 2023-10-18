import { memo } from 'react';

export interface Props {
  index: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const ReferFriendItem: React.FC<Props> = ({ index, icon, title, description }) => (
  <article className='item-bottom'>
    <section className='flex-start-container top-header'>
      <div className='flex-container index-circle'>{index + 1}</div>
      <div className='icon'>{icon}</div>
    </section>
    <section className='item-content'>
      <h2 className='title'>{title}</h2>
      <p className='description'>{description}</p>
    </section>
  </article>
);

export default memo(ReferFriendItem);
