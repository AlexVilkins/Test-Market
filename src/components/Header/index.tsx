import { FunctionComponent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  SlMagnifier,
  SlList,
  SlBasket,
  SlLogin,
  SlHeart,
} from "react-icons/sl";

import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

type HeaderProps = {
  filterVal: string;
  onChangeFilter: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Header: FunctionComponent<HeaderProps> = ({
  filterVal,
  onChangeFilter,
}) => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.header__logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className={styles.filter}>
        <SlMagnifier className={styles.filter__icon} />
        <input
          type="text"
          placeholder="Поиск товара"
          value={filterVal}
          onChange={onChangeFilter}
        />
      </div>
      <div className={styles.panel}>
        <div className={styles.panel__favorite}>
          <Link to="/favorite">
            <SlHeart className={styles.icon} />
          </Link>
        </div>
        <div className={styles.panel__basket}>
          <Link to="/basket">
            <SlBasket className={styles.icon} />
          </Link>

          {/* <div>{basketPrice() > 0 ? basketPrice() : 0} руб.</div> */}
        </div>
        <div className={styles.panel__orders}>
          <SlList className={styles.icon} />
        </div>
        <div className={styles.panel__setup}>
          <Link to="/login">
            <SlLogin className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
