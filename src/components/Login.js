import React, { Component, useState, useRef} from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import background from '../images/leaves.jpg'
import food from "../images/coming_soon.jpg";
import {useDispatch} from 'react-redux';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { USER_AVATAR } from "../utils/constants";
import { addUser } from "../reduxUtils/userSlice";
import FOOD1 from "../images/food1.jpg"
import FOOD2 from "../images/food2.jpg"

export default function Login() {
  

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
    
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log(email, password);
//     fetch("http://localhost:5000/login-user", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userRegister");
//         if (data.status == "ok") {
//           alert("login successful");
//           window.localStorage.setItem("token", data.data);
//           window.localStorage.setItem("loggedIn", true);

//           window.location.href = "./userDetails";
//         }
//       });
//   }

  return (
    <div>
    
    
  <div style={{overflow:'hidden',backgroundImage:`url(${background})`}} className="bg-mantrasmoke overflow-hidden">
    
    
    <div className="p-10 mt-3 mb-2">

<div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-midnight lg:max-w-4xl">
<div className="hidden bg-cover lg:block lg:w-1/2" style={{"background-image":`url(${ isSignInForm?FOOD1:FOOD2})`}}></div>

<div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
<h2 className="text-2xl drop-shadow-lg shadow-black font-semibold text-center text-midnight "> Urban Harvest</h2>

<p className="text-xl drop-shadow-lg shadow-black text-center text-midnight ">{isSignInForm ? "Welcome back!" : "Welcome!"}</p>



<div className="flex items-center justify-between mt-4">
    <span className="w-1/5 border-b dark:border-mantrablue lg:w-1/4"></span>

    < span  className="text-xs drop-shadow-lg shadow-black text-center text-mantrablue uppercase  hover:underline">{isSignInForm ? "Login with Email" : "Signup with Email"}</span>

    <span className="w-1/5 border-b dark:border-mantrablue lg:w-1/4"></span>
</div>

<form  onSubmit={(e) => e.preventDefault()}>
{!isSignInForm && (<div className="mt-4">
    
    <div className="mb-3 block mb-2 text-sm font-medium text-mantrablue ">
            <label className="drop-shadow-lg shadow-black">Full Name</label>
            <input
            ref={name}
            className=" form-control block w-full px-4 py-2 text-midnight bg-white border border-mantragray rounded-md  dark:text-mantragray dark:border-mantragray focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              placeholder="Full Name"
              
            />
          </div>
</div>)}

<div className="mt-4">
    
    <div className="mb-3 block mb-2 text-sm font-medium text-mantrablue ">
            <label className="drop-shadow-lg shadow-black">Email address</label>
            <input
            ref={email}
            className=" form-control block w-full px-4 py-2 text-midnight bg-white border border-mantragray rounded-md  dark:text-mantragray dark:border-mantragray focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              placeholder="Enter email"
              
            />
          </div>
</div>

<div className="mt-4">
            <label 
            className="block mb-2 text-sm drop-shadow-lg shadow-black font-medium text-mantrablue "
            >Password</label>
            <input
              ref={password}
              type="password"
              className="form-control block w-full px-4 py-2 text-midnight bg-white border border-mantragray rounded-md  dark:text-mantragray dark:border-mantragray focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter password"
              
            />
          </div>


          <div className="mt-3 mb-2">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input mx-2 mb-1"
                id="customCheck1"
              />
              <label className="drop-shadow-lg shadow-black custom-control-label" htmlFor="customCheck1">
                 Remember me
              </label>
            </div>
          </div>


<div className="d-grid mt-8">
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button onClick={handleButtonClick}
            className=" w-full px-4 py-2 tracking-wide text-white bg-[#4e7e6e] transition-colors duration-200 transform bg-midnight rounded hover:bg-[#4e7e6e] focus:outline-none focus:bg-[#4e7e6e]" 
              >
              {isSignInForm?"Login":"Signup"}
            </button>
          </div>

<div className="flex items-center justify-between mt-4">
    <span class="w-1/5 border-b dark:border-mantrablue md:w-1/4"></span>

    <p onClick={toggleSignInForm} class="no-underline text-xs drop-shadow-lg shadow-black text-mantrablue uppercase  hover:no-underline">{isSignInForm ? "or Sign Up" : "or Login"}</p>
    
    <span class="w-1/5 border-b dark:border-mantrablue md:w-1/4"></span>
</div>
</form>
</div>
</div>

</div>
</div>
    </div>
  );
}
