import { memo } from 'react';

// constants
import { DECODING_TYPES, LOADING_TYPES } from 'constants/enums';

// components
import Image from 'components/common/Image';

interface Props {
  image: string;
  name: string;
}

const PaymentMethodItem: React.FC<Props> = ({ image, name }): JSX.Element => (
  <li className='list-group-item'>
    <Image decoding={DECODING_TYPES.Async} loading={LOADING_TYPES.Lazy} src={image} alt={name} />
  </li>
);

export default memo(PaymentMethodItem);
