import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../constants/constants';
import axios from '../../axios';
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
 
    const getRandomPageNumber = (max) => Math.floor(Math.random() * max) + 1;

   
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        const totalPages = response.data.total_pages;

     
        const randomPageNumber = getRandomPageNumber(totalPages);
        return axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US&page=${randomPageNumber}`);
      })
      .then((response) => {
        const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
        setMovie(randomMovie);
      })
      .catch((error) => {
        console.error("Error fetching random movie:", error);
      });
  }, []);

  if (!movie) {
    // Return loading state or null
    return null;
  }

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}} className="banner ">
      <div className="content">
        <h1 className="title">{movie ? movie.title :""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview :""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

