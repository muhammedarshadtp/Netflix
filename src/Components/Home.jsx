import { NETFLIX_LOGO } from "../utils/Image";
import Header from "./Header";


const Home = () => {
    return (
            <div className="w-full h-screen">
            <Header />
                <img src={NETFLIX_LOGO} alt="Header Logo" className="w-full h-full object-cover" />
            </div>
        
    )
}

export default Home;