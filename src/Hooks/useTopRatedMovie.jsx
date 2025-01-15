import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Api's";
import { useEffect } from "react";
import {addTopRatedMovie } from "../utils/movieSlice";


const useTopRatedMovie = ()=>{
    const dispatch = useDispatch()
    const topRatedMovies=useSelector((store)=>store?.playingMovie?.topratedMovie)
    const getTopRatedMovie = async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json= await data.json();
        dispatch(addTopRatedMovie(json.results))
    }
    useEffect(()=>{
      !topRatedMovies &&  getTopRatedMovie()
        
    },[])
}

export default useTopRatedMovie;