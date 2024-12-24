function MoviesDeatils({ movieDetail }) {


  return <>{movieDetail && <div><p>Actor : {movieDetail.actor}</p>
  <p>
Director
 : {movieDetail.
director
}</p></div> }</>;
}

export default MoviesDeatils;
