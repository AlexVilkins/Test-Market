import { FunctionComponent } from "react";

import { Product } from "../../redux/products/types";
import styles from "./OrderItem.module.scss";
import img from "../../assets/products/phone.png";

type OrderItemProps = {
  item: Product[];
  index: number;
};

const OrderItem: FunctionComponent<OrderItemProps> = ({ item, index }) => {
  return (
    <div className={styles.container}>
      <h2>Заказ #{index}</h2>
      {item.map(() => (
        <img src={img} alt="phone" />
      ))}
      <p className={styles.price}>
        Сумма заказа: {item.reduce((sum, obj) => obj.newPrice + sum, 0)} руб.
      </p>
    </div>
  );
};

export default OrderItem;
