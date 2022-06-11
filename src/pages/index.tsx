import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ComboBoxExample from "../components/Combobox";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <ComboBoxExample />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
