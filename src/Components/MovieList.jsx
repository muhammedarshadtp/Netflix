import MovieCard from "./MovieCard";


const MovieList = ({title,movies})=>{
    if (!movies || movies.length === 0) {
        return <p>No movies available.</p>;
    }
    return (
        <div className="md:px-2">
            <h1 className="text-lg md:text-2xl font-bold py-2 text-white">{title}</h1> 
            <div className="flex overflow-x-scroll scrollbar-hide">
                
                <div className="flex space-x-4">
                    {movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
         
                </div>
            </div>
           
        </div>
    )
}

export default MovieList;