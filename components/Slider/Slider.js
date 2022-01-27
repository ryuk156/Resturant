import Image from "next/image";
import styles from "../../styles/Slider.module.css";
import { useState } from "react";
const Slider = () => {
  const [val, setVal] = useState(0);

  let images = ["/images/slider-4.png", "/images/slider-5.png","/images/slider-6.png"];

  const handleArrow = (direction) => {
    if (direction === "left") {
      setVal(val !== 0 ? val - 1 : images.length - 1);
    }
    if (direction === "right") {
      setVal(val !== images.length - 1 ? val + 1 : 0);
    }
  };

  console.log(val);
  return (
    <div className={styles.container}>
      <span
        className={styles.arrow}
        style={{ left: 0 }}
        onClick={() => handleArrow("left")}
      >
        <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
      </span>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * val}vw)` }}
      >
        {images.map((img, index) => {
          return (
            <div className={styles.imgWrappper} key={index}>
              <Image src={img} width="1366px" height="437px" alt="" />
            </div>
          );
        })}
      </div>
      <span
        className={styles.arrow}
        style={{ right: 0 }}
        onClick={() => handleArrow("right")}
      >
        <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default Slider;
