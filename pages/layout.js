import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>CodeDay Playlist Wizard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <code></code>
          {children}
          <p>
            Built by Sam Poder, please email support. Open sourced{" "}
            <a href="https://github.com/sampoder/playlist-wizard">here</a>.
          </p>
        </main>
      </div>
    </>
  );
}
