import { NETFLIX_HEADER_LOGO, NETFLIX_USER_ICON } from "../utils/Image";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toggleSearchView } from "../utils/geminiSlice";
import { SUPPORTED_LANGUAGES } from "../utils/supportedLanguages";
import { changeLangauge } from "../utils/configSlice";



const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showLogout, setShowLogout] = useState(false);

  const showLang=useSelector((store)=> store?.gemini?.showSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/home')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return () => unsubscribe()
  }, [])

  const handleSearchClick = () => {

    dispatch(toggleSearchView())
  }

  const handdleLangauges = (e) => {
    dispatch(changeLangauge(e.target.value))
  }
  const toggleLogoutButton =()=>{
    setShowLogout((prevState)=>!prevState)
  }
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center py-5 px-8 md:py-4 bg-gradient-to-b from-black via-black/80 to-transparent flex-col md:flex-row">
        <img
          className="w-28  object-contain"
          src={NETFLIX_HEADER_LOGO}
          alt="Netflix"
        />
        <div className="flex items-center md:space-x-10 space-x-10">
          {showLang && (
            <select className="bg-gray-600 text-white
            rounded-lg px-4 py-2 outline-none"
               onChange={handdleLangauges} >
               {SUPPORTED_LANGUAGES.map((lang) => (
                 <option key={lang.identifier} value={lang.identifier}>
                   {lang.name}
                 </option>
               ))}
             </select>
          )}
          <button className="bg-purple-500 py-2 px-2 md:px-4 mx-4 text-white rounded-lg my-2" onClick={handleSearchClick}>
            {showLang ? "HomePage" : "Gemini Search"}</button>
            <div className="relative">
            <img
              className=" w-10 rounded cursor-pointer"
              src={NETFLIX_USER_ICON}
              alt="User"
              onClick={toggleLogoutButton} 
            />
            {showLogout && (
              <button
                onClick={handleSignOut}
                className="absolute right-0 mt-2 bg-red-600 text-white py-2 px-2 rounded-lg shadow-lg"
              >
                SignOut
              </button>
            )}
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;