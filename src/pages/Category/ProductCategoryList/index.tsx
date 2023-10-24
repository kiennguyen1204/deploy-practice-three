import { generateIdFromName } from 'utils/stringUtils';

// contexts
import { ProductContext } from 'contexts/ProductsProvider';
import { useContext } from 'react';

// styles
import './index.css';

interface Props {
  handleSearchByName: (name: string) => void;
}

export const ProductCategoryList: React.FC<Props> = ({ handleSearchByName }): JSX.Element => {
  const { products } = useContext(ProductContext);

  return (
    <div className='list-container list-check'>
      {products.map((element) => (
        <label
          key={element.id}
          className='align-center check-item block'
          htmlFor={generateIdFromName(element.name)}
          onClick={() => handleSearchByName(element.name)}>
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
