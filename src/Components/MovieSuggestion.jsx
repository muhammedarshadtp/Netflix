import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const MovieSuggestion=()=>{
    const {movieName,movieResult}= useSelector((store)=>store.gemini)
    if(!movieName) return null
    return(
        <div className="p-2 m-2 ">
           <div className="">
            {movieName.map((movieNames,index)=> 
            <MovieList  key={movieNames} 
            title={movieNames} 
            movies={movieResult[index]} 
            className="hover:scale-150"

            /> )}
            
           </div>
        </div>
    )
}

export default MovieSuggestion;