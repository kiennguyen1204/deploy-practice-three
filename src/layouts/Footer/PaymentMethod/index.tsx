import { memo } from 'react';

interface Props {
  image: string;
  name: string;
}

const PaymentMethodItem: React.FC<Props> = ({ image, name }): JSX.Element => (
  <li className='list-group-item'>
    <img decoding='async' loading='lazy' src={image} alt={name} />
  </li>
);

export default memo(PaymentMethodItem);
