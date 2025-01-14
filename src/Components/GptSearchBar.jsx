import { useSelector } from "react-redux";
import lang from "../utils/language";
import { useRef } from "react";
import {geminiAI} from "../utils/geminiAI"



const GptSearchBar = () => {
    const langKey=useSelector((store)=> store.config.lang)
    const searcText=useRef(null)
    const handdleGptSearch= async()=>{
        const gptQuery="Act as an movie recommendation system and suggest movies for query :"
         + searcText.current.value
          + "only give ne names of 5 movies, comma separated like the example given ahead. Example Result Gadar,sholy,gappy,kathi,Don";
        const res=await geminiAI(gptQuery)
        console.log(res?.candidates[0]?.content?.parts[0]?.text);
        
           
          
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