import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title} style={{ fontSize: "3em" }}>
        Sorry, we couldn't add the song.
      </h1>
      <p style={{ fontSize: "1.5em" }}>
        This is because our filters detected the song as being explicit and not
        suitable for the event.
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
        ← Go back.
      </a>
    </>
  );
}
