import { useSelector } from "react-redux";
import lang from "../utils/language";


const GptSearchBar = () => {
    const langKey=useSelector((store)=> store.config.lang)
    return (
        <div className="pt-[12%] flex justify-center">
            <form className="bg-black  w-1/2 grid grid-cols-12 rounded-md">
                <input className="p-4 m-4 col-span-9 outline-none rounded-md" type="text" placeholder={lang[langKey].gptPlaceholder} />
                <button className="col-span-3 bg-red-600 m-4 py-2 px-4 text-white rounded-lg font-medium ">{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar; 