import { useRef, useState } from "react";
import { CheckValidation } from "../utils/Validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/Image";
import { useDispatch } from "react-redux";

const Login = () => {

    const [signInForm, setSignInForm] = useState(true)
    const [errorMessege, setErrorMessege] = useState(null)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = () => {
        const Messege = CheckValidation(
            email.current.value,
            password.current.value,
            name.current ? name.current.value : "",
            !signInForm
        )
        setErrorMessege(Messege)
        if (Messege) return
        if (!signInForm) {
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value,

            )

                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))

                        navigate("/home")
                    }).catch((error) => {
                        setErrorMessege(error)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessege(errorCode + "-" + errorMessage)
                })
        } else {
            signInWithEmailAndPassword(auth,
                email.current.value,
                password.current.value,
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/home")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessege(errorCode + "-" + errorMessage)
                })
        }
    }

    const toggleSignInForm = () => {
        setSignInForm(!signInForm)
    }


    return (
        <div className="relative h-screen w-full">
            <div className="absolute w-full h-full bg-black bg-opacity-50"> {/* Overlay */}
                <img src={NETFLIX_LOGO} alt="Header Logo" className="w-full h-full object-cover" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[650px] bg-black bg-opacity-80 p-16 rounded-md z-20">
                <h1 className="font-bold text-3xl py-3 text-white">{!signInForm ? "Sign Up" : "Sign In"}</h1>
                {!signInForm && (
                    <input
                        ref={name}
                        type="name"
                        placeholder="Name"
                        className="p-3 my-4 w-full rounded-md outline-none"
                    />
                )}
                <input
                    ref={email}
                    type="email"
                    placeholder="Email or phone number"
                    className="p-3 my-4 w-full rounded-md outline-none"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-3 my-4 w-full  rounded-md outline-none"
                />
                <p className="font-bold text-red-500">{errorMessege}</p>

                <button className="w-full py-2 mt-8 bg-red-700 text-white font-semibold rounded-md" onClick={handleButtonClick}>
                    {!signInForm ? "Sign Up" : "Sign In"}
                </button>


                <p className="py-4 text-white  cursor-pointer" onClick={toggleSignInForm}>
                    {!signInForm ? "Already Have an Account ? Sign In" : "New to Netflix?  Sign up now"}
                </p>


            </form>
        </div>
    );
};

export default Login;
