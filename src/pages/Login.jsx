import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addUser, removeUser } from "../redux/pazarSlice";



export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const userInfo = useSelector((state)=> state.pazar.userInfo)
    function handleGoogleLogin(e) {
e.preventDefault()
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    dispatch(addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL
    }));
    toast.success("Logged in successfully. You will be redirected to cart page in seconds.")
    setTimeout(()=> {
        navigate("/cart")
    }, 2000)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }

    function handleSignOut() {
        signOut(auth)
        .then(()=> {
            toast.success("Logout is successful.")
            dispatch(removeUser())
            setTimeout(()=>{navigate("/")},1500)
            
        })
        .catch(error => console.error(error))
    }


  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        {userInfo ? `Your are logged in as ${userInfo.name}` : <div onClick={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center 
        justify-center gap-4 hover:border-blue-600 cursor-pointer duration-300">
          <img className="w-8" src="/assets/google.png" alt="google logo" />
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>}
        {userInfo && <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>} 
       
      </div>
      {/* <div  className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center 
        justify-center gap-4 hover:border-blue-600 cursor-pointer duration-300">
          <img className="w-8" src="/assets/github.png" alt="github logo" />
          <span className="text-sm text-gray-900">Sign in with Github</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>
       
      </div> */}
      <ToastContainer
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  );
}
