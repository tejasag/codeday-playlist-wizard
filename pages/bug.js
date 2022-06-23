import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title} style={{ fontSize: "3em" }}>
        Oh no. Bugs.
      </h1>
      <p style={{ fontSize: "1.5em" }}>
        Something went wrong, please try again. If this happens multiple times
        please contact the volunteers.
      </p>
      <form action="/api/add">
        <input
          type="text"
          className={styles.card}
          style={{
            minWidth: "100px",
            fontSize: "1.5em",
            background: "none",
            padding: "10px",
            color: "white",
          }}
          id="song"
          name="song"
          required
          placeholder="Song name"
        />
        <input
          type="text"
          className={styles.card}
          style={{
            minWidth: "100px",
            fontSize: "1.5em",
            background: "none",
            padding: "10px",
            color: "white",
          }}
          id="artist"
          name="artist"
          placeholder="Artist"
        />
        <input
          className={styles.card}
          style={{
            fontSize: "1.5em",
            background: "none",
            padding: "10px",
            color: "white",
          }}
          type="submit"
          value="→"
        />
      </form>
    </>
  );
}
