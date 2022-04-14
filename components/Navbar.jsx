import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callbutton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>017 8651 5434</div>
        </div>
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
        <ul className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
          <li className={styles.menuItem}>Homepage</li>
          <li className={styles.menuItem}>Product</li>
          <li className={styles.menuItem}>Menu</li>
          <li className={styles.menuItem}>Events</li>
          <li className={styles.menuItem}>Blog</li>
          <li className={styles.menuItem}>Contatct</li>
        </ul>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width="50px" height="50px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
