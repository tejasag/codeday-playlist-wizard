const axios = require("axios");

export default async (req, res) => {
  let clientId = process.env.SPOTIFY_CLIENT_ID;
  let clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  // Get the latest access token
  let accessToken = await axios("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString("base64")}`,
    },
    params: {
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
      client_id: clientId,
      clientSecret: clientSecret,
    },
  })
    .then((r) => r.data)
    .catch((err) => {
      console.log(err.toJSON());
      res.redirect("/bug");
    });

  // Fetch the track info
  let tracks = await axios("https://api.spotify.com/v1/search", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken.access_token}`,
      "Content-Type": "application/json",
    },
    params: {
      type: "track",
      q: `track:${req.query.song} ${
        req.query.artist[1] ? "artist:" + req.query.artist : ""
      }`,
    },
  })
    .then((r) => r.data)
    .catch((err) => {
      console.log(err.toJSON());
      res.redirect("/bug");
    });

  /* Uncomment this line if you want to allow explicit songs */
  // if (tracks.tracks.items[0].explicit) res.redirect("/rejected"); else

  if (!tracks.tracks.items[0]) res.redirect("/notfound");
  else {
    // Add the track to the playlist
    let addTrack = await axios(
      `https://api.spotify.com/v1/playlists/${process.env.SPOTIFY_PLAYLIST}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
          "Content-Type": "application/json",
        },
        params: {
          uris: tracks.tracks.items[0].uri,
        },
      }
    )
      .then((r) => r.data)
      .catch((e) => {
        console.log(e.response.data);
        res.redirect("/bug");
      });
    if (!addTrack.error) res.redirect("/success");
  }
};
