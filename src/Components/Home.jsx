
import { useSelector } from "react-redux";
import useMovieList from "../Hooks/useMovieList";
import usePopularMovie from "../Hooks/usePopularMovie";
import useTopRatedMovie from "../Hooks/useTopRatedMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";
import Search from "./Search";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";



const Home = () => {

    const SearchView = useSelector((store) => store?.gemini?.showSearch)

    useMovieList()
    usePopularMovie()
    useTopRatedMovie()
    useUpcomingMovie()
    return (
        <div >
            <Header />
            {
                SearchView ? <Search /> : <>
                    <MainContainer />
                    <SeconderyContainer />
                </>

            }



        </div>
    )
}

export default Home;