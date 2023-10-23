import { generateIdFromName } from 'utils/stringUtils';

// contexts
import { ProductContext } from 'contexts/ProductsProvider';

// styles
import './index.css';
import { useContext } from 'react';

export const ProductCategoryList: React.FC = (): JSX.Element => {
  const { products } = useContext(ProductContext);

  return (
    <div className='list-container list-check'>
      {products.map((element, index) => (
        <label
          key={index}
          className='align-center check-item block'
          htmlFor={generateIdFromName(element.name)}>
          <input
            type='radio'
            value={element.quantity}
            id={generateIdFromName(element.name)}
            hidden
          />
          <span className='flex-container radio'></span>
          <span className='flex-container name'>{element.name}</span>
          <span className='line'></span>
          <span className='value'>{element.quantity}</span>
        </label>
      ))}
    </div>
  );
};
