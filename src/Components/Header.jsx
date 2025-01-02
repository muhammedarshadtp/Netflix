import {NETFLIX_HEADER_LOGO, NETFLIX_USER_ICON } from "../utils/Image";
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";



const Header = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            dispatch(removeUser)
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="flex justify-between items-center w-screen px-8 py-4 m-4 z-10">
        <img className="w-24 " src={NETFLIX_HEADER_LOGO} alt="" />
        <div className="flex ">
            <img className="w-10 " src={NETFLIX_USER_ICON} alt="UserIcon" />
            <button onClick={handleSignOut} >sign out</button>
        </div>
    </div>
    ) 
}

export default Header;