import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackground";


const MainContainer=()=>{

    const movies = useSelector((state) => state.playingMovies)
    
    if (!movies || !movies.addMovie ) return 
    const {addMovie} = movies

    const movie = addMovie[0];

    const{ original_title,overview,id}=movie
    return (
        <div className="relative bg-black pt-[25%] md:pt-0">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackGround movieId={id}/>
        </div>
    )
}

export default MainContainer;