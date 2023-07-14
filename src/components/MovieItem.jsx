function MovieItem({ movie }) {
  console.log(movie);
  return (
    <div className="movie-container">
      <h3 className="title">{movie.Title}</h3>
      <img src={movie.Poster} alt="" />
      <div className="movie-info">
        <h5>Year: {movie.Year}</h5>
        <h5>IMDB ID : {movie.imdbID}</h5>
      </div>
    </div>
  );
}

export default MovieItem;
