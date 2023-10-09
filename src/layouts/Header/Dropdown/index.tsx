import { Link } from 'react-router-dom';

// styles
import './index.css';

type DropdownItem = {
  to: string;
  name: string;
};

type Props = {
  children: DropdownItem[];
};

const DropdownBox: React.FC<Props> = ({ children = [] }): JSX.Element => (
  <section className='dropdown-box-container'>
    <div className='dropdown-box'>
      <div className='dropdown-box-content'>
        {children.map((el, index) => (
          <Link to={el.to} className='dropdown-box-content__item-link' key={index}>
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default DropdownBox;
