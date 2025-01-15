import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Api's";
import { useEffect } from "react";
import { addUpcomingMovie } from "../utils/movieSlice";


const useUpcomingMovie = ()=>{
    const dispatch = useDispatch()
    const upComingMovies=useSelector((store)=>store?.playingMovie?.upcomingMovie)
    const getUpcomingMovie = async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json= await data.json();
        dispatch(addUpcomingMovie(json.results))
    }
    useEffect(()=>{
      !upComingMovies &&  getUpcomingMovie()
        
    },[])
}

export default useUpcomingMovie;