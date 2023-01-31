import {useState, useEffect} from 'react';
import MovieCard from './Moviecard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=f288d6ea';

const movie1 = {
"Title":"Barbie as The Princess and the Pauper",
"Type" : "movie",
"Year" : "2004",
"imdbID": "tt0426955",
"Poster": "https://m.media-amazon.com/images/M/MV5BMGY5MzU3MzItNDBjMC00YjQzLWEzMTUtMGMxMTEzYjhkMGNkXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"

}

const App = () => {

  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Barbie');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          type="text"
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
        <img
          src={SearchIcon} alt="search"
          onClick={() => searchMovies(searchTerm)}
         />
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ) )}
        </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>

          </div>
        )
      }



    </div>
  );
}

export default App;