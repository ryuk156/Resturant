import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SEO from "../components/SEO/SEO";
import Slider from "../components/Slider/Slider";
import ProductList from "../components/ProductList/ProductList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
     <Slider />
     <ProductList />
    </div>
  );
}
