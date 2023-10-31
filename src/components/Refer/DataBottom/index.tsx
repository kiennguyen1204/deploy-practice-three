export interface Props {
  index: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const ReferFriendItem: React.FC<Props> = ({ index, icon, title, description }) => (
  <article className='item-bottom'>
    <section className='flex-start-container top-header'>
      <div className='flex-container index-circle'>{index}</div>
      <div className='icon'>{icon}</div>
    </section>
    <section className='item-content'>
      <h4 className='item-content-title'>{title}</h4>
      <p className='item-content-description'>{description}</p>
    </section>
  </article>
);

export default ReferFriendItem;
