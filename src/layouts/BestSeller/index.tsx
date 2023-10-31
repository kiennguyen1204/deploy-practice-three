import { useState } from 'react';

// components
import { Sellers } from './Sellers';
import TabList from './TabList';

// styles
import './index.css';

export const BestSeller: React.FC = (): JSX.Element => {
  const [currentTab] = useState<number>(0);

  return (
    <section className='best-seller-container'>
      <div className='best-seller-container-box'>
        <h2 className='best-seller-title'>BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</h2>

        <div className='best-seller-box-wrapper'>
          <TabList />
        </div>

        <div className='tab-content'>
          <div className={`tab-pane fade ${currentTab === 0 && 'show active'}`} tabIndex={0}>
            <Sellers />
          </div>
        </div>
      </div>
    </section>
  );
};
