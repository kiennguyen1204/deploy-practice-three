// styles
import './index.css';

interface Props {
  volume: string[];
}

const Volumes: React.FC<Props> = ({ volume }): JSX.Element => (
  <div className='flex-container volumes' data-testid='volumes'>
    {volume.map((item: string, index: number) => (
      <div className='flex-container volume-child' key={index} data-testid={`volume-${index}`}>
        {item}
      </div>
    ))}
  </div>
);

export default Volumes;
