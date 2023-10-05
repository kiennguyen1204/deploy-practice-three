import { memo } from 'react';

interface Props {
  index: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const ReferFriendItem: React.FC<Props> = ({
  index = 0,
  icon,
  title = 'Default title',
  description = 'Default description'
}) => (
  <article className='item-bottom'>
    <header className='top-header'>
      <div className='flex-container index-circle'>{index + 1}</div>
      <div className='icon'>{icon}</div>
    </header>
    <section className='item-content'>
      <h2 className='title'>{title}</h2>
      <p className='description'>{description}</p>
    </section>
  </article>
);

export default memo(ReferFriendItem);
