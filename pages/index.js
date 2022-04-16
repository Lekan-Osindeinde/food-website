import Head from "next/head";
import Features from "../components/Features";
import Order from "../components/order";
import Product from "../components/product";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food ordering App</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <ProductList />
      <Product />
      <Order />
    </div>
  );
}
