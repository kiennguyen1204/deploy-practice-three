import Minus from 'assets/images/minus.svg';
import Add from 'assets/images/add.svg';

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
          <img src={Minus} alt='Minus' />
        </button>

        <span className='flex-container'>{quantity}</span>

        <button className='amount-btn' onClick={onIncrease}>
          <img src={Add} alt='Add' />
        </button>
      </div>
    </div>
  );
};

export default QuantityControl;
