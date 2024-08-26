import { FunctionComponent, memo } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { TabsItem } from "../components";
import { useAppSelector } from "../redux/hooks";
import { Product } from "../redux/products/types";
import { useAppDispatch } from "../redux/hooks";
import { delBasket, resetBasket } from "../redux/basket/slice";
import { setOrder } from "../redux/order/slice";
import box from "../assets/empty_box.png";

const Basket: FunctionComponent = () => {
  const baskets = useAppSelector((state) => state.basket.baskets);
  const dispatch = useAppDispatch();

  const CloseIcon = memo(() => <FaArrowLeft />);

  const deleteItem = (item: Product) => {
    dispatch(delBasket(item));
  };

  const buyOrder = () => {
    dispatch(setOrder(baskets));
    dispatch(resetBasket());
  };

  return (
    <div className="container">
      <Link to="/">
        <button className="basketClose">
          <CloseIcon />
        </button>
      </Link>

      <h1>Корзина</h1>

      {baskets.length > 0 ? (
        <>
          {baskets.map((item) => (
            <TabsItem key={item.id} item={item} deleteItem={deleteItem} />
          ))}
          <button className="buy" onClick={buyOrder}>
            Заказать
          </button>
        </>
      ) : (
        <div className="emptyBox">
          <img src={box} alt="empty box" />
          <p>Ваша орзина пуста. Добавьте что-нибудь, чтобы оформить заказ!</p>
        </div>
      )}
    </div>
  );
};

export default Basket;
