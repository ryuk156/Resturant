import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size,setSize] = useState(0)
  const pizza = {
    id: 1,
    img: "/images/pizza.png",
    name: "CAMPION",
    price: [19.9, 29, 50],
    desc: "best pizza for ever to go and eat in eat-repeat",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgWrapper}>
          <Image src={pizza.img} width="300px" height="300px" alt="pizza_img" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <div className={styles.price}>${pizza.price[size]}</div>
        <div className={styles.desc}>{pizza.desc}</div>
        <h2 className={styles.title}>Choose the size</h2>
        <div className={styles.sizes}>
     
          <div className={styles.size} onClick={()=>setSize(0)}>
          <Image src="/images/pizza_size.png" width="80px" height="80px" alt="pizza_img" />
          <span className={styles.size_attribute}> Small </span>
          </div>
          <div className={styles.size} onClick={()=>setSize(1)}>
          <Image src="/images/pizza_size.png" width="95px" height="95px" alt="pizza_img" />
          <span className={styles.size_attribute}> Medium </span>
          </div>
          <div className={styles.size} onClick={()=>setSize(2)}>
          <Image src="/images/pizza_size.png" width="100px" height="100px" alt="pizza_img" />
          <span className={styles.size_attribute}> Large </span>
          </div>
        </div>
        <h2 className={styles.title}>Choose additional ingredients</h2>
        <div className={styles.ingredients}>
          <div className={styles.option}>
                <input type="checkbox" id="double" name="double" className={styles.checkbox} />
                <label htmlFor="double">Double ingredients</label>
          </div>
          <div className={styles.option}>
                <input type="checkbox" id="vegies" name="vegies" className={styles.checkbox} />
                <label htmlFor="vegies">Extra vegies</label>
          </div>
          <div className={styles.option}>
                <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox} />
                <label htmlFor="cheese">Extra cheese</label>
          </div>
        
        </div>
        <div className={styles.add}>
            <input type="number"  defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to cart</button>
         </div>
      </div>
    </div>
  );
};

export default Product;
