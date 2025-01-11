import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/Api's"


const useMovieTrailer=(movieId)=>{
const [trailerId,setTrailerId]=useState(null)
    const getVideoTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        if (!json.results || json.results.length === 0) {
           
        }
        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[1] : json.results[0]
        setTrailerId(trailer)
    }
    useEffect(() => {
        getVideoTrailer();
    }, [])
    return{trailerId}
}


export default useMovieTrailer;