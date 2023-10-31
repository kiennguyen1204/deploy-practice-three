import { useState } from 'react';

// constants
import { TAB_LIST } from 'constants/listItem';

// styles
import './index.css';

const TabList: React.FC = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const changeTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <ul className='flex-row-container nav-pill'>
      {TAB_LIST.map((tab, index) => (
        <li
          className={`nav-item ${index === currentTab && 'active'}`}
          onClick={() => changeTab(index)}
          key={index}>
          <button className='btn nav-link'>{tab.title}</button>
        </li>
      ))}
    </ul>
  );
};

export default TabList;
