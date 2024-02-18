import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { useMovie } from "./useMovie";
import { useLocalStorage } from "./useLocalStorage";
import { useKey } from "./useKey";
const key = '57146006';

const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedID, setSelectedID] = useState(null);
  const {movies,isLoading,error} = useMovie(query,handleCloseMovie);
  //const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useLocalStorage([],"watched");


  function handleSelectMovie(id){
    setSelectedID(selectedID => id === selectedID ? null : id);
  }

  function handleCloseMovie(){
    setSelectedID(null);
  }

  function handleAddWatch(movie){
    setWatched(watched=>[...watched, movie]);
    
  }

  function handleDeleteWatched(id){
    setWatched(watched => watched.filter(movie=>movie.imdbID !==  id));
  }

  return ( 
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie}  />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {
            selectedID ? (
              <MovieDetails selectedID={selectedID} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatch} watched={watched} />
            ) :
            <>
              <WatchSummary watched={watched} />
              <WatchMoviesList watched={watched} onDeleteWatched={handleDeleteWatched} />
            </>
            }
        </Box>
      </Main>
    </>
  );
}
const Loader = () => {
  return <p className="loader">Loading...</p>
}

const ErrorMessage = ({message}) => {
  return <p className="error"><span>💥 {message}</span></p>
}

const Navbar = ({children}) =>{
  return (
    <nav className="nav-bar">
      {children}
    </nav>
  )
}

const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  )
}

const Search = ({query,setQuery}) =>{
  const inputEl = useRef(null);

  useKey('Enter', function() {
    if(document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input className="search" type="text" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)} ref={inputEl} />
  );
}

const NumResults = ({movies}) => {
  return (
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
  )
}

const Main = ({children}) => {
  return (
    <main className="main">
      {children}
    </main>
  )
}

const Box = ({children}) => {
  const [isOpen, setIsOpen] = useState([]);
  
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)} >{isOpen ? "–" : "+"}</button>
      {isOpen && children}
    </div>
  );
}

const MovieDetails = ({selectedID,onCloseMovie,onAddWatched,watched}) => {
  const [movie,setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director,Genre: genre} = movie;
  const [userRating, setUserRating] = useState('');
  const isWatched = watched.map(movie => movie.imdbID).includes(selectedID);
  const watchedUserRating = watched.find(movie=>movie.imdbID === selectedID)?.userRating;
  const countRef = useRef(0);
  useEffect(function(){
    if(userRating) countRef.current++;
  },[userRating]);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecissions: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }
  
  useKey('Escape',onCloseMovie);

  useEffect(function(){
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${selectedID}`);
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  },[selectedID]);

  useEffect(function(){
    if(!title) return;
    document.title = `Movie | ${title}`;
    return function(){
      document.title = "usePopcorn";
    }
  },[title]);

  return (
  <div className="details">
    {isLoading ? <Loader /> : 
    <>
      <header>
      <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
      <img src={poster} alt={`Poster of ${movie} movie`} />
      <div className="details-overview">
        <h2>{title}</h2>
        <p>{released} &bull; {runtime}</p>
        <p>{genre}</p>
        <p><span>⭐️</span>{imdbRating} IMDb Rating</p>
      </div>
      </header>
      <section>
        <div className="rating">
          {!isWatched ? (
            <>
            <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
            {userRating > 0 && (
              <button className="btn-add" onClick={handleAdd}>+ Add to list</button>)} </> ) 
            : 
            (<p>You rated with movie {watchedUserRating}<span> ⭐️</span></p>)}
        </div>
        <p><em>{plot}</em></p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </>
  }
  </div>
  );
}

const MovieList = ({movies,onSelectMovie}) => {

  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  )
}

const Movie = ({movie,onSelectMovie}) =>{
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)} key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}


const WatchSummary = ({watched}) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span className="test">⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

const WatchMoviesList = ({watched,onDeleteWatched}) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}

const WatchedMovie = ({movie,onDeleteWatched}) => {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button className="btn-delete" onClick={() => onDeleteWatched(movie.imdbID)}>X</button>
      </div>
    </li>
  );
}