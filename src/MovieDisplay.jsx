import MoviesData from "./MoviesData";

function MoviesDisplay({setMovieDetail}) {

  return (
    <>
      {MoviesData.map((movie) => (
        <div key={movie.id} onClick={()=>setMovieDetail(movie)}>
          <h1>{movie.title}</h1>
        </div>
      ))}
    </>
  );
}

export default MoviesDisplay;
