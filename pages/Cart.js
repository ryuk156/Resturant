import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgWrapper}>
                <Image
                  src="/images/pizza.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CARLOZ</span>
            </td>
            <td>
              <span className={styles.extras}>Extra cheese, vegies</span>
            </td>
            <td>
              <span className={styles.price}>$19</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$60</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.imgWrapper}>
                <Image
                  src="/images/pizza.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CARLOZ</span>
            </td>
            <td>
              <span className={styles.extras}>Extra cheese, vegies</span>
            </td>
            <td>
              <span className={styles.price}>$19</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$60</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.imgWrapper}>
                <Image
                  src="/images/pizza.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CARLOZ</span>
            </td>
            <td>
              <span className={styles.extras}>Extra cheese, vegies</span>
            </td>
            <td>
              <span className={styles.price}>$19</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>$60</span>
            </td>
          </tr>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> Subtotal: </b> $78.89
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount</b> $78.89
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> $78.89
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
