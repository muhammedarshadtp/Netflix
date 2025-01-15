import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Api's";
import { useEffect } from "react";
import { addHorrorMovie } from "../utils/movieSlice";


const useHorrorMovie = ()=>{
    const dispatch = useDispatch()
    const horrorMovies=useSelector((store)=>store?.playingMovie?.horrorMovie)
    const getHorrorMovie= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json= await data.json();
        dispatch(addHorrorMovie(json.results))
    }
    useEffect(()=>{
      !horrorMovies &&  getHorrorMovie()
        
    },[])
}

export default useHorrorMovie;