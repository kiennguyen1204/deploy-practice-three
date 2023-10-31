// mocks
import { dataItemDetail } from 'mocks/dataList';

// styles
import './index.css';

const DataItemDetail: React.FC = (): JSX.Element => (
  <div className='list-container effects-container'>
    {dataItemDetail.effects.map((e) => (
      <figure className='effects-box'>
        <img src={e.image} />
        <figcaption className='effects-text'>
          <p className='title'>{e.title}</p>
          <p className='content'>{e.content}</p>
        </figcaption>
      </figure>
    ))}
  </div>
);

export default DataItemDetail;
