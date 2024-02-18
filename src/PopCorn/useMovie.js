import { useState,useEffect } from "react";
const key = '57146006';

export function useMovie(query,callback) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error,setError] = useState('');
    useEffect(() => {
        callback?.();
        const controller = new AbortController();
    
        async function fetchMovies() {
          try {
          setLoading(true);
          setError("");
          const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${query}`,{signal: controller.signal});
          if(!res.ok) throw new Error("Something wsent wrong fetching from API");
          const data = await res.json();
          if(data.Response === 'False') throw new Error('Movie not found');
          setMovies(data.Search);
          setError("");
          } catch(err){
            if(err.name !== "AbortError"){
              setError(err.message);
            }
          } finally {
            setLoading(false);
          }
        }
        if(query.length < 3){
          setMovies([]);
          setError('');
          return;
        }

        fetchMovies();
        return function(){
          controller.abort();
        }
    },[query]);
    return {movies, isLoading, error};
}