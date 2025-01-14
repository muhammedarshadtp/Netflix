import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/language";
import { useRef } from "react";
import {geminiAI} from "../utils/geminiAI"
import { API_OPTIONS } from "../utils/Api's";
import { addMovieResult } from "../utils/gptSlice";



const GptSearchBar = () => {
    const dispatch=useDispatch()
    const langKey=useSelector((store)=> store.config.lang)
    const searcText=useRef(null)
    // Search movie in TMDB
    const searchMovieTMDB = async (movie) =>{
        const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
        const json=await data.json()
         return json.results
    }


    const handdleGptSearch= async()=>{
        const gptQuery="Act as an movie recommendation system and suggest movies for query :"
         + searcText.current.value
          + "only give ne names of 5 movies, comma separated like the example given ahead. Example Result Gadar,sholy,gappy,kathi,Don";
        const res=await geminiAI(gptQuery)
        console.log(res?.candidates[0]?.content?.parts[0]?.text);
        const getMovie=res?.candidates[0]?.content?.parts[0]?.text.split(",")
        console.log(getMovie)
        const promiseArray= getMovie.map((movie)=>searchMovieTMDB(movie))
        const result= await Promise.all(promiseArray)
        console.log(result);
        dispatch(addMovieResult({movieName:getMovie,movieResult:result}))
        
           
          
    }
    return (
        <div className="pt-[12%] flex justify-center">
            <form className="bg-black  w-1/2 grid grid-cols-12 rounded-md" onSubmit={(e)=>e.preventDefault()}>
                <input className="p-4 m-4 col-span-9 outline-none rounded-md" ref={searcText} type="text" placeholder={lang[langKey].gptPlaceholder} />
                <button className="col-span-3 bg-red-600 m-4 py-2 px-4 text-white rounded-lg font-medium " onClick={handdleGptSearch} >{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar; 