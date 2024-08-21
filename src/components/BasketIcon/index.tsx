import { IoIosAddCircle } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import React from "react";

import styles from "./BasketIcon.module.scss";

const BasketIcon: React.FC<{ isBasket: boolean }> = React.memo(
  ({ isBasket }) => {
    return isBasket ? (
      <IoIosAddCircle className={`${styles.buttonImg} ${styles.basketAdd}`} />
    ) : (
      <SlBasket className={styles.buttonImg} />
    );
  }
);

export default BasketIcon;
