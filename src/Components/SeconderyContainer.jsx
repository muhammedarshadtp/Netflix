import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SeconderyContainer = () =>{
    
    const movies = useSelector((state) => state.playingMovies)
    return (
        <div className="bg-black ">
            <div className=" relative z-20 pl-4 md:pl-10 md:-mt-52">
            <MovieList title={"Now Playing"} movies={movies.addMovie}  />
            <MovieList title={"TopRated"} movies={movies.topratedMovie}  />
            <MovieList title={"Popular"} movies={movies.popularMovie}  />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovie}  />
            <MovieList title={"Trending"} movies={movies.addMovie}  />
            </div>
        </div>
    )
}

export default SeconderyContainer;