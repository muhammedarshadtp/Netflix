import {NETFLIX_HEADER_LOGO, NETFLIX_USER_ICON } from "../utils/Image";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const Header = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            dispatch(removeUser())
          }).catch((error) => {
            // An error happened.
          });
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              navigate('/home')
            } else {
             dispatch(removeUser())
             navigate('/')
            }
          });
          return ()=> unsubscribe()
    },[])
    return (
        <div className="flex justify-between items-center w-screen p-4 z-10 bg-gradient-to-b from-black to-white-300 ">
        <img className="w-24 " src={NETFLIX_HEADER_LOGO} alt="" />
        <div className="flex ">
            <img className="w-10 " src={NETFLIX_USER_ICON} alt="UserIcon" />
            <button onClick={handleSignOut} >sign out</button>
        </div>
    </div>
    ) 
}

export default Header;