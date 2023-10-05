// constants
import { LIST_ITEM_EDUCATION } from 'constants/listItem';

// components
import Card from 'components/common/Card';
import WeedEducationItem from './EducationList';

// styles
import './index.css';

export const WeedEducationPattern: React.FC = (): JSX.Element => (
  <Card classes={'weed-education-container'} title='WEED EDUCATION' iShowAll>
    <main className='weed-education-box'>
      <section className='weed-education-group'>
        {LIST_ITEM_EDUCATION.map((item, index) => (
          <WeedEducationItem key={index} item={item} />
        ))}
      </section>
    </main>
  </Card>
);
