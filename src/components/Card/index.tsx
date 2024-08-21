import { FunctionComponent, memo, useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { IoIosAddCircle } from "react-icons/io";

import { Product } from "../../redux/products/types";
import { setBasket, delBasket } from "../../redux/basket/slice";
import { setFavorite, delFavorite } from "../../redux/favorite/slice";
import phone from "../../assets/products/phone.png";
import styles from "./Card.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type CardProps = {
  item: Product;
};

const Card: FunctionComponent<CardProps> = memo(({ item }) => {
  const [basketAdd, setBasketAdd] = useState(false);
  const [favoriteAdd, setFavoriteAdd] = useState(false);
  const { baskets } = useAppSelector((state) => state.basket);
  const { favorites } = useAppSelector((state) => state.favorite);
  const dispatch = useAppDispatch();

  const addBasketItem = (item: Product) => {
    if (baskets.some((obj) => Number(obj.id) === Number(item.id))) {
      dispatch(delBasket(item));
      setBasketAdd(false);
      return;
    }
    dispatch(setBasket(item));
    setBasketAdd(true);
  };

  const addFavoriteItem = (item: Product) => {
    if (favorites.some((obj) => Number(obj.id) === Number(item.id))) {
      dispatch(delFavorite(item));
      setFavoriteAdd(false);
      return;
    }
    dispatch(setFavorite(item));
    setFavoriteAdd(true);
  };

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
        <button className={styles.button} onClick={() => addFavoriteItem(item)}>
          {favoriteAdd ? (
            <FaHeart
              className={`${styles.button__img} ${styles.favorite_add}`}
            />
          ) : (
            <CiHeart className={styles.button__img} />
          )}
        </button>
        <button className={styles.button} onClick={() => addBasketItem(item)}>
          {basketAdd ? (
            <IoIosAddCircle
              className={`${styles.button__img} ${styles.basket_add}`}
            />
          ) : (
            <SlBasket className={styles.button__img} />
          )}
        </button>
      </div>
    </div>
  );
});

export default Card;
