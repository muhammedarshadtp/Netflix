import { NETFLIX_LOGO } from "../utils/Image";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const GptSearch = () =>{
    return (
        <>
        <div className="fixed -z-20 "> 
            <img className="h-screen object-cover" src={NETFLIX_LOGO} alt="Header Logo"/>
            </div>
        <div className=""> 
            
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
        </>
    )
}

export default GptSearch;