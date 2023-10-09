import { memo } from 'react';

import { Link } from 'react-router-dom';

// constants
import { TYPE_LINKS } from 'constants/enums';

// styles
import './index.css';

interface LinkItem {
  to: string;
  name: string;
}

interface Props {
  title: string;
  links: LinkItem[];
  type?: TYPE_LINKS;
}

const FooterLinkList: React.FC<Props> = ({ title, links, type = TYPE_LINKS.MORE }): JSX.Element => (
  <section className='footer-content-item'>
    <h3 className='footer-title'>{title}</h3>
    <ul className={`wrapper-container list-group list-unstyled footer-link-list-${type}`}>
      {links.map((el, index) => (
        <li className='list-group-item' key={'quickLink__' + index}>
          <Link to={el.to} className='footer-link'>
            {el.name}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default memo(FooterLinkList);
