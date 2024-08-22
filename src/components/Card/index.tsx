import {
  FunctionComponent,
  memo,
  useState,
  useCallback,
  useEffect,
} from "react";
import { FaStar } from "react-icons/fa6";

import { Product } from "../../redux/products/types";
import { setBasket, delBasket } from "../../redux/basket/slice";
import { setFavorite, delFavorite } from "../../redux/favorite/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { HeartIcon, BasketIcon } from "..";
import phone from "../../assets/products/phone.png";
import styles from "./Card.module.scss";

type CardProps = {
  item: Product;
};

const Card: FunctionComponent<CardProps> = memo(({ item }) => {
  const [basketAdd, setBasketAdd] = useState(false);
  const [favoriteAdd, setFavoriteAdd] = useState(false);
  const { baskets } = useAppSelector((state) => state.basket);
  const { favorites } = useAppSelector((state) => state.favorite);
  const dispatch = useAppDispatch();

  useEffect(() => {
    basketCheck();
    favoriteCheck();
  }, []);

  const basketCheck = useCallback(() => {
    if (baskets.some((obj) => Number(obj.id) === Number(item.id))) {
      setBasketAdd(true);
    } else {
      setBasketAdd(false);
    }
  }, [baskets, item.id]);

  const favoriteCheck = useCallback(() => {
    if (favorites.some((obj) => Number(obj.id) === Number(item.id))) {
      setFavoriteAdd(true);
    } else {
      setFavoriteAdd(false);
    }
  }, [favorites, item.id]);

  const addBasketItem = useCallback(
    (item: Product) => {
      if (baskets.some((obj) => Number(obj.id) === Number(item.id))) {
        dispatch(delBasket(item));
        setBasketAdd(false);
        return;
      }
      dispatch(setBasket(item));
      setBasketAdd(true);
    },
    [baskets, dispatch]
  );

  const addFavoriteItem = useCallback(
    (item: Product) => {
      if (favorites.some((obj) => Number(obj.id) === Number(item.id))) {
        dispatch(delFavorite(item));
        setFavoriteAdd(false);
        return;
      }
      dispatch(setFavorite(item));
      setFavoriteAdd(true);
    },
    [favorites, dispatch]
  );

  const StarIcon = memo(() => <FaStar className={styles.rating__star} />);

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={phone} alt="phone" />
      <div className={styles.rating}>
        <StarIcon />
        <p>{item.rating}</p>
      </div>
      <h1 className={styles.card__description}>{item.text}</h1>
      <div className={styles.card__price}>
        <div>
          <p className={styles.card__price_new}>{item.newPrice} Р</p>
          <p className={styles.card__price_old}>{item.oldPrice}</p>
        </div>
        <button className={styles.button} onClick={() => addFavoriteItem(item)}>
          <HeartIcon isFavorite={favoriteAdd} />
        </button>
        <button className={styles.button} onClick={() => addBasketItem(item)}>
          <BasketIcon isBasket={basketAdd} />
        </button>
      </div>
    </div>
  );
});

export default Card;
