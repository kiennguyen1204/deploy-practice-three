import { memo } from 'react';

// styles
import './index.css';

interface Props {
  header?: string;
  children: React.ReactNode;
  footer?: string;
  direction?: string;
  classes?: string;
}

// move List component from component common and rename List to ServiceList
const ServiceList: React.FC<Props> = ({ children, direction = 'row', classes }): JSX.Element => (
  <section className={`list-container ${classes}`}>
    <div
      className={`list-container-box ${
        direction === 'row' ? 'list-container-box-row' : 'list-container-box-column'
      }`}>
      {children}
    </div>
  </section>
);

export default memo(ServiceList);
