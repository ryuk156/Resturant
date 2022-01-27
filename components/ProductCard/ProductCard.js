import Image from "next/image";
import styles from "../../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/pizza.png"
        width="160px"
        height="160px"
        alt="pizza_image"
      />
      <div className={styles.title}>Cheese Pizza</div>
      <div className={styles.price}> $50.6</div>
      <div className={styles.desc}>
        The most popular cheeses used in the preparation of pizza are mozzarella
        (accounting for about 30%), provolone, cheddar and Parmesan. Emmental,
        Romano and ricotta are often used as toppings, and processed pizza
        cheeses manufactured specifically for pizza are mass-produced.
      </div>
    </div>
  );
};

export default ProductCard;
