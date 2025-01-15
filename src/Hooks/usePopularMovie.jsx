import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Api's";
import { useEffect } from "react";
import { addPopularMovie } from "../utils/movieSlice";


const usePopularMovie = ()=>{
    const dispatch = useDispatch()
    const popularMovies=useSelector((store)=>store?.playingMovie?.popularMovie)
    const getMoviePlaying = async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json= await data.json();
        dispatch(addPopularMovie(json.results))
    }
    useEffect(()=>{
      !popularMovies &&  getMoviePlaying()
        
    },[])
}

export default usePopularMovie;