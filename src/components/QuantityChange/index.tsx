// assets
import Minus from 'assets/images/minus.svg';
import Add from 'assets/images/add.svg';

// constants
import { IMG_NOT_FOUND } from 'constants/common';

// components
import Image from 'components/common/Image';

interface QuantityControlProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className='align-center amount-price'>
      <div className='flex-container amount'>
        <button
          className='flex-container amount-btn'
          onClick={onDecrease}
          disabled={quantity === 1}>
          <Image src={Minus} alt='Minus' />
        </button>

        <span className='flex-container'>{quantity}</span>

        <button className='amount-btn' onClick={onIncrease}>
          <Image src={Add} alt='Add' />
        </button>
      </div>
    </div>
  );
};

export default QuantityControl;
