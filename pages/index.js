import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title} style={{ fontSize: "3em" }}>
        Contribute the CodeDay Playlist
      </h1>
      <p style={{ fontSize: "1.5em" }}>
        We'll be playing some epic tunes throughout the event, add your
        favourite songs to the playlist using this site!{" "}
        <a
          href={`https://open.spotify.com/playlist/${process.env.SPOTIFY_PLAYLIST}`}
        >
          Listen to the full playlist
        </a>
        .
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
          placeholder="Artist (optional)"
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
