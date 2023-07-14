import MovieItem from './MovieItem'

function MovieList({moviePlaceHolder}) {

    return ( 
        <div className='main-container'>
            {moviePlaceHolder.map((movie , idx) => {
                return <MovieItem key = {idx} movie = {movie} />
            })}
        </div>
    
    );
}

export default MovieList;{}