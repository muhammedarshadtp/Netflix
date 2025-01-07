
import useMovieList from "../Hooks/useMovieList";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";



const Home = () => {
    useMovieList()
    return (
            <div >
            <Header />
            <MainContainer/>
            <SeconderyContainer/>
               
            </div>
    )
}

export default Home;