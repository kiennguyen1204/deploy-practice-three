// constant
import { BUTTON_VARIANT } from 'constants/enums';

// components
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import SearchIcon from 'assets/images/search_normal.svg';
import Image from 'components/common/Image';

interface Props {
  onClick: (keyword: string) => void;
  searchValue: string;
  onSetSearchValue: (value: string) => void;
}

const SearchBox: React.FC<Props> = ({ onClick, searchValue, onSetSearchValue }) => {
  const handleSearch = () => {
    onClick(searchValue);
  };

  return (
    <div className='navbar-search-box'>
      <div className='form-group'>
        <div className='flex-row floating-form'>
          <Input
            placeholder='Search...'
            className='form-control'
            value={searchValue}
            onChange={onSetSearchValue}
          />
          <Button
            icon={<Image src={SearchIcon} alt='search' />}
            className='btn search-button'
            onClick={handleSearch}
            variant={BUTTON_VARIANT.PRIMARY}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
