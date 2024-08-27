import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {API_URL} from './context';

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({show: false, msg: ""});
  const {id} = useParams();
  // const [query, setQuery] = useState("titanic");
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
  
}, [])
  return (
    <div>Our Single Movie {id}</div>
  )
}

export default SingleMovie;