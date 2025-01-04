
import useMovieList from "../Hooks/useMovieList";
import Header from "./Header";



const Home = () => {
    useMovieList()
    return (
            <div >
            <Header />
               
            </div>
    )
}

export default Home;