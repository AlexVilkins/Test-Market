import { FunctionComponent } from "react";

import styles from "./Footer.module.scss";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.container}>
      <p>Made by Viktor P. © 2023</p>
    </footer>
  );
};

export default Footer;
