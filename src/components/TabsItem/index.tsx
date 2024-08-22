import { FunctionComponent } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

import styles from "./TabsItem.module.scss";
import phone from "../../assets/products/phone.png";
import { Product } from "../../redux/products/types";

type TabsItemProps = {
  item: Product;
  deleteItem: (item: Product) => void;
};

const TabsItem: FunctionComponent<TabsItemProps> = ({ item, deleteItem }) => {
  return (
    <div className={styles.container}>
      <img src={phone} alt="basketImg" />
      <div className={styles.description}>
        <h3>{item.text}</h3>
        <div className={styles.price}>
          <p className={styles.newPrice}>{item.newPrice}</p>
          <p className={styles.oldPrice}>{item.oldPrice}</p>
        </div>
      </div>
      <button
        className={styles.deleteItem}
        onClick={() => {
          deleteItem(item);
        }}
      >
        <IoIosCloseCircleOutline className={styles.img} />
      </button>
    </div>
  );
};

export default TabsItem;
