import React from 'react'
import { useGlobalContext } from './context';

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext();

  return (
    <>
      <section className="search-section">
      <h2>Search Your Favorite Movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search here"
        value={query}
        onChange={(e) => setQuery(e.target.value)} />
      </form>
      
      <div className='card-error'>
        <p>{isError.show && isError.msg}</p>
      </div>

      </section>
    </>
  )


}

export default Search;