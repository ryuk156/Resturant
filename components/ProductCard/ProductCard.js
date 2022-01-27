import Image from "next/image";
import styles from "../../styles/ProductCard.module.css";
import Link from 'next/link'

const ProductCard = ({product}) => {
  return (
    <div className={styles.container}>
      <Link href={`/Product/${product._id}`} passHref>
      <Image
        src={product.img}
        width="160px"
        height="160px"
        alt="pizza_image"
      />
      </Link>
     
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>$ {product.prices[0]}</div>
      <div className={styles.desc}>
        {product.desc}
      </div>
    </div>
  );
};

export default ProductCard;
