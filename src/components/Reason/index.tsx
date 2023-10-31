import ContentBox from './ListContent';

// styles
import './index.css';

const WhatMake: React.FC = (): JSX.Element => (
  <article className='what-make-box-container'>
    <section className='wrapper-element'>
      <h3 className='reason-title' data-testid='what-make-title'>
        WHAT MAKES US THE <span className='reason-title-number'>#1</span> ONLINE MARIJUANA
        DISPENSARY IN CANADA?
      </h3>

      <p className='reason-description'>
        When it comes to what makes us the foremost online marijuana dispensary in Canada, we could
        wax lyrical about our positive qualities. Instead, to make this information clearer, we’ve
        highlighted the six prioritized features that we feel makes us a cut above the rest.
      </p>

      <ContentBox />
    </section>
  </article>
);

export default WhatMake;
