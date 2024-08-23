import { FunctionComponent, memo } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { useAppSelector } from "../redux/hooks";
import { OrderItem } from "../components";

const Order: FunctionComponent = () => {
  const orders = useAppSelector((state) => state.order.orders);

  const CloseIcon = memo(() => <FaArrowLeft />);

  return (
    <div className="basket__container">
      <Link to="/">
        <button className="basketClose">
          <CloseIcon />
        </button>
      </Link>

      <h1>Покупки</h1>

      {orders.map((item, index) => (
        <OrderItem item={item} index={index} />
      ))}
    </div>
  );
};

export default Order;
