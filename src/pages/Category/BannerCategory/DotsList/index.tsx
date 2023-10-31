// styles
import './index.css';

const DotsList: React.FC = (): JSX.Element => (
  <div className='flex-container dots'>
    {Array.from({ length: 4 }, (_, index) => (
      <span key={index} className={`dot ${index === 0 && 'active'} `} />
    ))}
  </div>
);

export default DotsList;
