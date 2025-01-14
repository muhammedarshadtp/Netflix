import { NETFLIX_LOGO } from "../utils/Image";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const GptSearch = () =>{
    return (
        <div > 
            <div className="absolute -z-20 "> 
                            <img src={NETFLIX_LOGO} alt="Header Logo" />
                        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
    )
}

export default GptSearch;