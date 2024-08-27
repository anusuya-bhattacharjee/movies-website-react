import React from 'react'
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movies} = useGlobalContext();
  return (
    <section className="movie-section">
    <div className='container gird grid-4-col'>
    {movies.map((movie) => {
      const {Title, Poster, imdbID}  = movie
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className='card'>
          <div className='card-info'>
          <h2>{Title}</h2>
          <img src={Poster} alt={imdbID}/>
          </div>
          </div>
          </NavLink>
        )
      })}
    </div>

    </section>
      
 
  )
  
}

export default Movies;