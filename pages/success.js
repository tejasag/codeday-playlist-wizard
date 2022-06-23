import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title} style={{ fontSize: "3em" }}>
        Success, song added!
      </h1>
      <p style={{ fontSize: "1.5em" }}>
        Thank you so much for contributing, we truly appreciate it.
      </p>

      <a
        href="/"
        className={styles.card}
        style={{
          fontSize: "1.5em",
          background: "none",
          padding: "10px",
          color: "white",
          maxWidth: "200px",
        }}
      >
        ← Add more.
      </a>
    </>
  );
}
