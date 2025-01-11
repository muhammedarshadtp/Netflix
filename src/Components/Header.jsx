import { NETFLIX_HEADER_LOGO, NETFLIX_USER_ICON } from "../utils/Image";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/supportedLanguages";
import { changeLangauge } from "../utils/configSlice";



const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const showLang=useSelector((store)=> store.gpt.showGptSearch)

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

  const handleGptSearchClick = () => {

    dispatch(toggleGptSearchView())
  }

  const handdleLangauges = (e) => {
    dispatch(changeLangauge(e.target.value))
  }
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black via-black/80 to-transparent">
        <img
          className="w-28 object-contain"
          src={NETFLIX_HEADER_LOGO}
          alt="Netflix"
        />
        <div className="flex items-center space-x-4">
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
          <button className="bg-purple-500 py-2 px-4 mx-4 text-white rounded-lg my-2" onClick={handleGptSearchClick}>
            {showLang ? "HomePage" : "Gpt Search"}</button>
          <img
            className="w-10 rounded"
            src={NETFLIX_USER_ICON}
            alt="User"
          />
          <button
            onClick={handleSignOut}
            className="text-white hover:text-gray-300 px-2 py-2 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;