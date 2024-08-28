import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import {API_URL} from './context';

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({show: false, msg: ""});
  const {id} = useParams();

     // Api url
const API_URL = `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`
  
    const getMovie = async (url) =>{
      setIsLoading(true);
      try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          if(data.Response === "True"){
              setIsLoading(false);
              setIsError({
                  show: false,
                  msg: ""
              })
              setMovie(data);
          }else{
              setIsError({
                  show: true,
                  msg: data.Error
              })
          }
          
      }catch(e){
          console.log(e);
      }
  }

  useEffect(()=>{
    let timerOut = setTimeout(()=>{
        getMovie(API_URL)
    }, .800);

    return () => clearTimeout(timerOut);
  
}, [id])

if(isLoading){
    return (
      <div className="">
          <div className="loading">Loading...</div>
      </div>
    )
  } 
  return (
    <section className="movie-section">
    <div className="movie-card">
    <figure>
        <img src={movie.Poster} alt="" />
    </figure>

    <div className="card-content">
        <p className="title">{movie.Title}</p>
        <p className="card-text">{movie.Released}</p>
        <p className="card-text">{movie.Genre}</p>
        <p className="card-text">{movie.imdbRating}</p>
        <p className="card-text">{movie.Country}</p>
        <NavLink className="back-btn" to="/">Go Back</NavLink>
    </div>
    </div>

    </section>
  )
}

export default SingleMovie;