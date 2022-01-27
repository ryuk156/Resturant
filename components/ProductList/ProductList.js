import Image from "next/image";
import styles from "../../styles/ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";


const ProductList = ({productList}) =>{
  console.log(productList)
    return(
       <div className={styles.container}>
         <h1 className={styles.title}>
          <u>The Best Food in the town</u>
         </h1>
         <h1 className={styles.desc}>
         “People who love to eat are always the best people.” —Julia Child
         </h1 >
         <div className={styles.wrapper}>
           {productList.map((product)=>{
             return (
              <ProductCard product={product} key={product._id}/>
             )
           })}
        
       
        
         </div>
       </div>
    )
}

export default ProductList