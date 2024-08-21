import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import React from "react";

import styles from "./HeartIcon.module.scss";

const HeartIcon: React.FC<{ isFavorite: boolean }> = React.memo(
  ({ isFavorite }) => {
    return isFavorite ? (
      <FaHeart className={`${styles.buttonImg} ${styles.favorite_add}`} />
    ) : (
      <CiHeart className={styles.buttonImg} />
    );
  }
);

export default HeartIcon;
