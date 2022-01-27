import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import axios from "axios";

const Product = ({single_product}) => {
  const [price,setPrice] = useState(single_product.prices[0])
  const [size,setSize] = useState(0)
  const [extraItems,setExtraItems] = useState([])
  const [quantity,setQuantity] = useState(1)

  const calcPrice = (number) =>{
   setPrice(price+number)
  }

  const  handleSize=(sizeIndex)=>{
    const difference = single_product.prices[sizeIndex]-single_product.prices[size]
    setSize(sizeIndex)
    calcPrice(difference)
  }
  
  const handleChange=(e,opt)=>{
   const checked= e.target.checked
    if(checked){
     calcPrice(opt.price)
     setExtraItems([...extraItems,opt])
    }else{
      calcPrice(-opt.price)
      setExtraItems(extraItems.filter((extra)=>extra._id!==opt._id))
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgWrapper}>
          <Image src="/images/pizza.png" width="300px" height="300px" alt="pizza_img" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{single_product.title}</h1>
        <div className={styles.price}>${price}</div>
        <div className={styles.desc}>{single_product.desc}</div>
        <h2 className={styles.title}>Choose the size</h2>
        <div className={styles.sizes}>
     
          <div className={styles.size} onClick={()=>handleSize(0)}>
          <Image src="/images/pizza_size.png" width="80px" height="80px" alt="pizza_img" />
          <span className={styles.size_attribute}> Small </span>
          </div>
          <div className={styles.size} onClick={()=>handleSize(1)}>
          <Image src="/images/pizza_size.png" width="95px" height="95px" alt="pizza_img" />
          <span className={styles.size_attribute}> Medium </span>
          </div>
          <div className={styles.size} onClick={()=>handleSize(2)}>
          <Image src="/images/pizza_size.png" width="100px" height="100px" alt="pizza_img" />
          <span className={styles.size_attribute}> Large </span>
          </div>
        </div>
        <h2 className={styles.title}>Choose additional ingredients</h2>
        <div className={styles.ingredients}>
          {
            single_product.extraOptions.map((opt,i)=>{
              return(
                <div className={styles.option} key={opt._id}>
                <input type="checkbox" id={opt.text} name={opt.text} onChange={(e)=>handleChange(e,opt)} className={styles.checkbox} />
                <label htmlFor="double">{opt.text}</label>
          </div>
              )
            })
          }
         
         
        
        </div>
        <div className={styles.add}>
            <input type="number"  defaultValue={1} onChange={(e)=>setQuantity(e.target.value)} className={styles.quantity}/>
            <button className={styles.button}>Add to cart</button>
         </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({params})=>{
  const  res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return{
    props:{
      single_product:res.data
    }
  }
}

export default Product;
