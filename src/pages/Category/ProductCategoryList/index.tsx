import { generateIdFromName } from 'utils/stringUtils';

// mocks
import { LIST_PRODUCT_CATEGORY_FILTER } from 'mocks/dataList';

// styles
import './index.css';

export const ProductCategoryList: React.FC = (): JSX.Element => (
  <div className='list-container list-check'>
    {LIST_PRODUCT_CATEGORY_FILTER.map((element, index) => (
      <label
        key={index}
        className='align-center check-item block'
        htmlFor={generateIdFromName(element.name)}>
        <input type='radio' value={element.value} id={generateIdFromName(element.name)} hidden />
        <span className='flex-container radio'></span>
        <span className='flex-container name'>{element.name}</span>
        <span className='line'></span>
        <span className='value'>{element.value}</span>
      </label>
    ))}
  </div>
);
