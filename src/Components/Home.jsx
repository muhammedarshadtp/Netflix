
import useMovieList from "../Hooks/useMovieList";
import usePopularMovie from "../Hooks/usePopularMovie";
import useTopRatedMovie from "../Hooks/useTopRatedMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";



const Home = () => {
    useMovieList()
    usePopularMovie()
    useTopRatedMovie()
    useUpcomingMovie()
    return (
            <div >
            <Header />
            <GptSearch/>
            <MainContainer/>
            <SeconderyContainer/>
               
            </div>
    )
}

export default Home;