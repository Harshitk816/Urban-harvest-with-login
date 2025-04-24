import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const User=(props)=>{
    const [userInfo, setUserInfo]=useState({
        name:"Dummy name",
        location:"Dummy location",
        avatar_url:"https://www.dummy-image.com",
    })

    

    useEffect( ()=>{fetchData()},[]);

    const fetchData=async()=>{
        const data = await fetch("https://api.github.com/users/HarshitK816");
        const json1 = await data.json();
        setUserInfo(json1);
    }  
    const {name,location,avatar_url}=userInfo;
    return(
         <div className="user-card flex w-9/12 mx-auto my-4 bg-gray-50 rounded-2xl shadow-lg p-4 2xs:max-xs:items-center 2xs:max-xs:flex-col xl:w-9/12 lg:w-8/12 md:w-7/12 sm:w-9/12 xs:w-10/12 2xs:w-11/12  ">
            <div className="w-8/12 drop-shadow-md 2xs:max-xs:w-full 2xs:max-xs:text-center  ">
          <h1 className="font-bold  text-3xl py-3 2xs:max-sm:text-sm">Personal Project</h1>
          <h2 className="text-xl py-3 2xs:max-sm:text-sm">Frontend Development</h2>
          <p className=" font-normal text-sm 2xs:max-sm:text-xs text-balance me-4 leading-6">
            This website is created by <b>Abhishek Murthy</b>. I have used various tech features to create this website. I will leave the links below.
          </p>
        </div>
        <div className="w-4/12 2xs:max-xs:w-6/12 2xs:max-xs:pt-6 relative">

      {/*    <img className=" w-full rounded-2xl" src="https://static.mediawire.in/pr/metadata/41480357/temp/logo.png?id=17166?id=17166"></img>*/}
        </div>
            {/* <img width="100px" src={avatar_url}></img>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @Harshitk816</h4> */}
        </div>
    )
}
export default User;