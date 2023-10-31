import React, { ReactNode, memo } from 'react';

// styles
import './index.css';

export interface Props {
  classes: string;
  title?: string;
  children: ReactNode;
}

const Card: React.FC<Props> = ({ children, classes, title = '' }): JSX.Element => (
  <article className={`card-box-container ${classes}`}>
    {title.length > 0 && (
      <header className='flex-space-between-container header-title'>
        <h2 className='card-title'>{title}</h2>

        <a href='https://weedmaps.com/learn' className='show-all-link'>
          Show All
        </a>
      </header>
    )}

    <section className='card-box'>
      <div className='card-box-element'>{children}</div>
    </section>
  </article>
);

export default Card;
