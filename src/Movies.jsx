
import { useState } from "react";
import MoviesDisplay from "./MovieDisplay";
import MoviesDeatils from "./MoviesDetails";

function Movies(){
let [movieDetail,setMovieDetail]=useState(null);
console.log(movieDetail);
   
    return(
        <>
        <h1>Movies</h1>
        <MoviesDisplay  setMovieDetail={setMovieDetail} />
        <MoviesDeatils movieDetail={movieDetail} />
        </>
    )
}

export default Movies;