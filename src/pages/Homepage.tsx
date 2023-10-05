import { WeedEducationPattern } from '../components/Education';
import InfoBottom from '../components/Info';
import WhatMake from '../components/Reason';
import ReferFriend from '../components/Refer';
import CustomerTestimonials from '../components/testimonials';
import BannerPattern from '../layouts/banner';
import { BestSeller } from '../layouts/bestSeller';
import { FirstServicePattern } from '../layouts/serviceOne';

export const Homepage = () => {
  return (
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
};
