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
      <header className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black via-black/80 to-transparent">
        <img 
          className="w-28 object-contain" 
          src={NETFLIX_HEADER_LOGO} 
          alt="Netflix" 
        />
        <div className="flex items-center space-x-4">
          <img 
            className="w-10 rounded" 
            src={NETFLIX_USER_ICON} 
            alt="User" 
          />
          <button 
            onClick={handleSignOut}
            className="text-white hover:text-gray-300 px-4 py-2 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;