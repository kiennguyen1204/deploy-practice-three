import { memo } from "react";

import { Link } from "react-router-dom";

// assets
import Logo from "assets/images/logo.svg";
import LogoMobile from "assets/images/logo_mobile.svg";
import Menu from "assets/images/menu.svg";

// constant
import { BUTTON_VARIANT } from "constants/enums";

// layouts
import AccountCart from "layouts/Header/AccountCart";

// components
import Input from "components/common/Input";
import Button from "components/common/Button";
import SearchIcon from "assets/images/search_normal.svg";

// styles
import "./index.css";

interface Props {
  onClick: () => void;
}

const MiddleNavbar: React.FC<Props> = ({ onClick }): JSX.Element => (
  <section className="navbar-container">
    <div className="flex-space-between-container navbar-box">
      <div className="navbar-brand-name">
        <button className="btn menu" onClick={onClick}></button>
        <img src={Menu} alt="menu" />
        <Link to="/">
          <img src={LogoMobile} className="mobile-logo" alt="logo" />
          <img src={Logo} className="navbar-logo" alt="logo" />
        </Link>
      </div>

      <div className="navbar-search-box">
        <div className="form-group">
          <div className="flex-row floating-form">
            <Input placeholder="Search..." className="form-control" />
            <Button
              icon={<img src={SearchIcon} alt="cart" />}
              className="btn search-button"
              onClick={onClick}
              variant={BUTTON_VARIANT.PRIMARY}
            />
          </div>
        </div>
      </div>

      <AccountCart />
    </div>
  </section>
);

export default memo(MiddleNavbar);
