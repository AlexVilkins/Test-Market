import { FunctionComponent, ChangeEvent, memo } from "react";
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
  onChangeFilter: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Header: FunctionComponent<HeaderProps> = ({ onChangeFilter }) => {
  const FilterIcon = memo(() => (
    <SlMagnifier className={styles.filter__icon} />
  ));

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <div className={styles.filter}>
        <FilterIcon />
        <input
          type="text"
          placeholder="Поиск товара"
          onChange={onChangeFilter}
        />
      </div>
      <div className={styles.panel}>
        <Link className={styles.panel__favorite} to="/favorite">
          <SlHeart className={styles.icon} />
        </Link>

        <Link className={styles.panel__basket} to="/basket">
          <SlBasket className={styles.icon} />
        </Link>

        <Link className={styles.panel__orders} to="/order">
          <SlList className={styles.icon} />
        </Link>

        <Link className={styles.panel__setup} to="/login">
          <SlLogin className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
