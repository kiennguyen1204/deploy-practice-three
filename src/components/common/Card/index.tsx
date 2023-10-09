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
  <article className={`card-box-container ${classes}`}>
    {title.length > 0 && (
      <header className='flex-space-between-container header-title'>
        <h2 className='title'>{title}</h2>
        {iShowAll && (
          <a href='https://weedmaps.com/learn' className='show-all-link'>
            Show All
          </a>
        )}
      </header>
    )}

    <section className='card-box'>
      <div className='card-box-element'>{children}</div>
    </section>
  </article>
);

export default memo(Card);
