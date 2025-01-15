import { IMG_CDN_URL } from "../utils/Api's";


const MovieCard = ({posterPath}) =>{
    if(!posterPath) return null
    return (
        <div className="relative w-32 md:w-44 md:pr-2 transform hover:scale-105 transition-all duration-300 ease-in-out">
            <img src={IMG_CDN_URL + posterPath} alt="Movie Image" className="rounded-md"/>
        </div>
    )
}

export default MovieCard;