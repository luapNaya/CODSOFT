// import React from 'react'
// import app from '../Firebase/firebase.config';
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAuth } from "firebase/auth";

// const Login = () => {

//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();
//     const handleLogin = () => {
//         signInWithPopup(auth, googleProvider).then((result) => {

//             const user = result.user;
//             console.log(user)
//         }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.customData.email;
//             const credential = GoogleAuthProvider.credentialFromError(error);
//         });
//     }

//     return (
//         <div className=' h-screen w-full flex items-center justify-center'>
//             <button className='bg-secondary px-8 py-2 text-white' onClick={handleLogin}>login</button>
//         </div>

//     )
// }

// export default Login