import { FunctionComponent, memo } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { TabsItem } from "../components";
import { useAppSelector } from "../redux/hooks";
import { Product } from "../redux/products/types";
import { useAppDispatch } from "../redux/hooks";
import { delBasket, resetBasket } from "../redux/basket/slice";
import { setOrder } from "../redux/order/slice";

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
    <div className="basket__container">
      <Link to="/">
        <button className="basketClose">
          <CloseIcon />
        </button>
      </Link>

      <h1>Корзина</h1>

      {baskets.map((item) => (
        <TabsItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}

      <button className="buy" onClick={buyOrder}>
        Заказать
      </button>
    </div>
  );
};

export default Basket;
