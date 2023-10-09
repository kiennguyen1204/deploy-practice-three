import { useState } from 'react';

// components
import { Sellers } from './Sellers';

// styles
import './index.css';

export const BestSeller: React.FC = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const tabsList = [
    {
      title: 'Best Sellers',
      to: 'populate'
    },
    {
      title: 'Bundles & Promotions',
      to: 'Promotions'
    },
    {
      title: 'On Sale',
      to: 'Sale'
    }
  ];

  const changeTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <section className='best-seller-container'>
      <div className='best-seller-container-box'>
        <h2 className='best-seller-title'>BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</h2>

        <div className='best-seller-box-wrapper'>
          <ul className='flex-row-container nav-pill'>
            {tabsList.map((tab, index) => {
              return (
                <li
                  className={`nav-item ${index === currentTab && 'active'}`}
                  onClick={() => changeTab(index)}
                  key={index}>
                  <button className='btn nav-link'>{tab.title}</button>
                </li>
              );
            })}
          </ul>
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
