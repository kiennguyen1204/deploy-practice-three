import { ReactElement } from 'react';
import './index.css';

const LoadingSpinner: React.FC = (): ReactElement => (
  <section className='spinner-container' data-testid='spinner-container'>
    <div className='loading-spinner' data-testid='loading-spinner' />
  </section>
);

export default LoadingSpinner;
