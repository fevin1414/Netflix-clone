import React, { useEffect,useState } from 'react'
import "./Row.css"
import axios from './axios';
import request from './request';
function Row({title,fetchUrl,isLargeRow=false}) {
  const [movies,setMovies]=useState([]);
 const base_url="https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
        console.log("Response:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

   console.log("row:"+movies);
  return (
    <div className="row">
  <h2>{title}</h2>
  {movies.map(movie=>(
    <img src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} alt={movie.name}/>
  ))}
    </div>
  )
}

export default Row
