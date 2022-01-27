import Image from "next/image";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/images/footer.jpg"
          objectFit="cover"
          layout="fill"
          alt=""
        />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <p className={styles.focus}>
            W̶h̶e̶n̶ y̶o̶u̶ t̶h̶i̶n̶k̶ y̶o̶u̶ s̶e̶e̶ y̶o̶u̶r̶ f̶o̶o̶d̶ c̶o̶m̶i̶n̶g̶ a̶t̶ a̶ r̶e̶s̶t̶a̶u̶r̶a̶n̶t̶,̶ a̶n̶d̶ t̶h̶e̶n̶
            y̶o̶u̶ r̶e̶a̶l̶i̶z̶e̶ i̶t̶’̶s̶ n̶o̶t̶ y̶o̶u̶r̶s̶.
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            22334 R. Kingfisher Road #555.
            <br /> Brazil, 662200
            <br /> (333) 234-1111
          </p>
          <p className={styles.text}>
            2664 R. Devnagri Road #555.
            <br /> Brazil, 662200
            <br /> (333) 234-1111
          </p>
          <p className={styles.text}>
            22374 R. Royal Road #555.
            <br /> Brazil, 662200
            <br /> (333) 234-1111
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTILL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY AND SUNDAY
            <br /> 11:00 - 5:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
