import { useContext, useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useNavigate}   from 'react-router-dom';
import {useSelector} from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../reduxUtils/userSlice";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch } from "react-redux";
import LOGOUT from '../images/logout.png'

import { auth } from "../utils/firebase";
const Header2=()=>{

    const Navigate = useNavigate();
    const user = useSelector(store=>store.user);
    let [btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store)=>store.cart.items);
    const {loggedInUser}=useContext(UserContext);
    const dispatch=useDispatch();

    const navLinks=document.querySelector(".nav-links");
    const [isActive,setIsActive]=useState(false);
    const option = isActive?'top-[100px]':'top-[-100vh]';

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {//if the user signed in then add user and navigate to browse(callback function)
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName ,photoURL} = user;
            dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}));
            Navigate('/browse')
            
          } else { 
            // User is signed out then remove user and log out
            dispatch(removeUser());
            Navigate("/login")
            // ...
          }
    
          return ()=> unsubscribe(); //when component unmounts, we will also unsubscibe  the listener onAuthStateChange
    
        });
      },[]);
      
      const handleSignOut=()=>{
        signOut(auth).then(() => {
          
        } ).catch((error) => {
          Navigate("/error");
        });
      }

    return(
    
    <header className="sticky top-0 w-full z-20 py-5 bg-white " >     
        
            <nav className=" flex justify-between items-center w-[92%] ms-[3vw]">
                <div>
                    <Link to="/login"><img className=" drop-shadow-md w-52 2xs:max-sm:hidden xl:w-60  " src= {LOGO_URL}></img></Link>
                    <Link to="/login"><img className="drop-shadow-md sm:max-2xl:hidden 2xl:hidden xs:block w-20 " src= "https://pbs.twimg.com/media/GEl5tuGaMAAR71l?format=png&name=240x240"></img></Link>
                </div>
            
                <div  className={"   nav-links absolute 2xs:max-lg:bg-white min-h-[55vh] drop-shadow-md w-full lg:static lg:min-h-fit left-0 lg:w-auto  "+option}>
                    <ul className="z-10 flex  relative md:flex-col items-center 2xs:max-lg:pt-5 2xs:max-lg:gap-[8vh] right-0 lg:right-14 lg:flex-row flex-col gap-[3vw] font-medium text-sm  xl:text-base ">

                        {user && (<li className=" hover:border-b-2  hover:border-[#4e7e6e] transition duration-500"><Link to="/browse">Home</Link></li>)}
                        {user && (<li className=" hover:border-b-2  hover:border-[#4e7e6e] transition duration-500"><Link to="/groceries">Groceries</Link></li>)}
                        <li className=" hover:border-b-2  hover:border-[#4e7e6e] transition duration-500"><Link to="/contact">Contact Us</Link></li>
                        <li className=" hover:border-b-2  hover:border-[#4e7e6e] transition duration-500"><Link to="/about">About Us</Link></li>
                        <li>{onlineStatus?"Online":"Offline"}  {onlineStatus?"🟢":"🔴"}</li>
                    </ul>
                </div>
            
                

                <div className="relative flex items-center gap-[1vw]">
                    
                {user && ( <button className="absolute shadow-md right-20 bg-[#4e7e6e] text-white px-5 py-2 rounded-full hover:bg-[#4e7e6e] 2xs:max-xs:right-28 xs:right-32 sm:right-32 md:right-24 lg:right-28" >{user?.displayName?.split(' ')[0]}
                    </button>)}
                    {user && (<button  onClick={handleSignOut} className='absolute bg-[#4e7e6e] shadow-md right-10 text-white px-3 py-2 rounded-full hover:bg-red-600 2xs:max-xs:right-12 xs:right-16 sm:right-16 md:right-16 lg:right-20"'> <i className='bx bx-power-off'></i></button>)}

                    {user && (<Link to="/cart"><span className="relative shadow-md bg-[#4e7e6e] flex text-white px-4 py-2 rounded-full hover:bg-[#4e7e6e] 2xs:max-xs:left-2"> 
                        <svg color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span className=" text-xs absolute left-9 bottom-5">{cartItems.length}</span> 
                    </span>
                    </Link>)}
                    <span className="relative drop-shadow-md md:relative px-3 lg:hidden " onClick={()=>{
                        setIsActive(!isActive);
                        
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ">
                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg> 

                    </span>
                </div>
            </nav>     
    </header>
    )
}
export default Header2;