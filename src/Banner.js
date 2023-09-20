import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import request from "./request";
import { YouTubeAPIKey } from "./config";
import YouTube from "react-youtube";

function Banner() {
  const [movie, setMovie] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(request.fetchNetflixOriginals);
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length - 1
        );
        const randomMovie = response.data.results[randomIndex];
        setMovie(randomMovie);

        const youtubeVideoId = await fetchYouTubeVideoId(randomMovie.name);
        setVideoId(youtubeVideoId);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Fetched movie:", movie);
  }, [movie]);

  async function fetchYouTubeVideoId(movieName) {
    try {
      const API_KEY = YouTubeAPIKey;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            q: `${movieName} trailer`,
            type: "video",
            part: "id",
            maxResults: 1,
          },
        }
      );

      if (response.data.items.length > 0) {
        return response.data.items[0].id.videoId;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching YouTube video ID:", error);
      return null;
    }
  }

  const opts = {
    width: "100%",
    height:900,

    playerVars: {
      autoplay:  1 ,
      controls: 0,
    },
  };

  const onReady = (event) => {
    setIsPlayerReady(true);
  }

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div
      className="banner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && videoId ? (
        <div  className="banner_video" style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",

        }}>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        </div>
      ) : (
        <>
          <img
            className="banner_image"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",

            }}
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.name}
          />
          <div className="banner--fadeBottom" />
        </>
      )}
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
    </div>
  );
}

export default Banner;
