import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SEO from "../components/SEO/SEO";
import Slider from "../components/Slider/Slider";
import ProductList from "../components/ProductList/ProductList";
import axios from "axios";

export default function Home({productList}) {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
     <Slider />
     <ProductList productList={productList} />
    </div>
  );
}


export const getServerSideProps = async ()=>{
    const  res = await axios.get("http://localhost:3000/api/products")
    return{
      props:{
        productList:res.data
      }
    }
}