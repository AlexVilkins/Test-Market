import React from "react";
import { FaStar, FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { IoIosAddCircle } from "react-icons/io";

import { Product } from "../../redux/products/types";
import phone from "../../assets/products/phone.png";
import styles from "./Card.module.scss";

type CardProps = {
  item: Product;
};

const Card: React.FC<CardProps> = React.memo(({ item }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={phone} alt="phone" />
      <div className={styles.rating}>
        <FaStar className={styles.rating__star} />
        <p>{item.rating}</p>
      </div>
      <div className={styles.card__description}>{item.text}</div>
      <div className={styles.card__price}>
        <div>
          <div className={styles.card__price_new}>{item.newPrice} Р</div>
          <div className={styles.card__price_old}>{item.oldPrice}</div>
        </div>
        <button className={styles.button}>
          {/* <CiHeart className={styles.card__button_img} /> */}
          <FaHeart className={`${styles.button__img} ${styles.favorite_add}`} />
        </button>
        <button className={styles.button}>
          {/* <SlBasket className={styles.card__button_img} /> */}
          <IoIosAddCircle
            className={`${styles.button__img} ${styles.basket_add}`}
          />
        </button>
      </div>
    </div>
  );
});

export default Card;
