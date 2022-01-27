import Image from "next/image";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.logo}>
          <Image
            src="/images/eat-repeat-white.png"
            width="100px"
            height="60px"
            alt="logo"
          />
        </div>
      </div>
      <div className={styles.items}>
        <ul className={styles.list}>
          <li className={styles.listItems}>Home</li>
          <li className={styles.listItems}>Product</li>
          <li className={styles.listItems}>Blog</li>
          <li className={styles.listItems}>Contact</li>
          <li className={styles.listItems}>About</li>
          <li className={styles.listItems}>Services</li>
        </ul>
      </div>
      <div className={styles.items}>
        <div className={styles.cart}>
          <span className={styles.shopping_cart}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </span>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
