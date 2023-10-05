import React, { ReactNode, memo } from 'react';

// styles
import './index.css';

interface Props {
  classes: string;
  title?: string;
  iShowAll?: boolean;
  children: ReactNode;
}

const Card: React.FC<Props> = ({ children, classes, iShowAll, title = '' }): JSX.Element => (
  <div className={`card-box-container ${classes}`}>
    {title.length > 0 && (
      <div className='flex header-title'>
        <div className='title'>{title}</div>
        {iShowAll && (
          <a href='https://weedmaps.com/learn' className='show-all-link'>
            Show All
          </a>
        )}
      </div>
    )}

    <div className='card-box'>
      <div className='card-box-element'>{children}</div>
    </div>
  </div>
);

export default memo(Card);
