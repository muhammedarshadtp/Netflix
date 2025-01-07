import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Api's";
import { useEffect } from "react";
import {  addNewMovie, } from "../utils/movieSlice";


const useMovieList = ()=>{
    const dispatch = useDispatch()

    const getMoviePlaying = async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json= await data.json();
        dispatch(addNewMovie(json.results))
    }
    useEffect(()=>{
        getMoviePlaying()
        
    },[])
}

export default useMovieList;