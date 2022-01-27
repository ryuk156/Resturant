import Image from "next/image";
import styles from "../../styles/ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";


const ProductList = () =>{
    return(
       <div className={styles.container}>
         <h1 className={styles.title}>
          <u>The Best Food in the town</u>
         </h1>
         <h1 className={styles.desc}>
         “People who love to eat are always the best people.” —Julia Child
         </h1 >
         <div className={styles.wrapper}>
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
        
         </div>
       </div>
    )
}

export default ProductList