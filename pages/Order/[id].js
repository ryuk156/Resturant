import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order = () => {
    const status =0;
     const statusCheck = (index) =>{
       if(index-status<1) return styles.done;
       if(index-status===1) return styles.inProgress;
       if(index-status>1) return styles.undone;
     }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order Id</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>123456789</span>
              </td>
              <td>
                <span className={styles.name}>John deo</span>
              </td>
              <td>
                <span className={styles.address}>New York, 134 street</span>
              </td>
              <td>
                <span className={styles.total}>$60</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusCheck(0)}>
            <Image
              src="/images/bill_paid.png"
              alt=""
              width="100px"
              height="70px"
            />
            <span>Payment</span>
            <div className={styles.checkIcon}>
              <Image
              className={styles.checkedIcon}
                src="/images/check.png"
                alt=""
                width="50px"
                height="40px"
              />
            </div>
          </div>
          <div className={statusCheck(1)}>
            <Image
              src="/images/prepare.png"
              alt=""
              width="90px"
              height="70px"
            />
             <span>Preparing</span>
            <div className={styles.checkIcon}>
              <Image
              className={styles.checkedIcon}
                src="/images/check.png"
                alt=""
                width="50px"
                height="40px"
              />
            </div>
          </div>
          <div className={statusCheck(2)}>
            <Image
              src="/images/on_the_way.png"
              alt=""
              width="120px"
              height="70px"
            />
             <span>On the Way</span>
            <div className={styles.checkIcon}>
              <Image
              className={styles.checkedIcon}
                src="/images/check.png"
                alt=""
                width="50px"
                height="40px"
              />
            </div>
          </div>
          <div className={statusCheck(3)}>
            <Image
              src="/images/delivered.png"
              alt=""
              width="60px"
              height="80px"
            />
             <span>Delivered</span>
            <div className={styles.checkIcon}>
              <Image
              className={styles.checkedIcon}
                src="/images/check.png"
                alt=""
                width="50px"
                height="40px"
              />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
