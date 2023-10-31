// component
import { WeedEducationPattern } from 'components/Education';
import InfoBottom from 'components/Info';
import WhatMake from 'components/Reason';
import ReferFriend from 'components/Refer';
import CustomerTestimonials from 'components/Testimonials';

// layouts
import BannerPattern from 'layouts/Banner';
import { BestSeller } from 'layouts/BestSeller';
import { FirstServicePattern } from 'layouts/ServiceOne';

const Homepage: React.FC = (): JSX.Element => (
  <div className='container-homepage'>
    <BannerPattern />
    <FirstServicePattern />

    <BestSeller />

    <CustomerTestimonials />
    <ReferFriend />
    <WhatMake />
    <InfoBottom />
    <WeedEducationPattern />
  </div>
);
export default Homepage;
