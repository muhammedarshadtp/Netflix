import { NETFLIX_LOGO } from "../utils/Image";
import MovieSuggestion from "./MovieSuggestion";
import SearchBar from "./SearchBar";


const Search = () =>{
    return (
        <>
        <div className="fixed -z-20 "> 
            <img className="h-screen object-cover" src={NETFLIX_LOGO} alt="Header Logo"/>
            </div>
        <div className=""> 
            
        <SearchBar/>
        <MovieSuggestion/>
        </div>
        </>
    )
}

export default Search;