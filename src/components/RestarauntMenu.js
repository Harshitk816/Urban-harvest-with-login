import { useState,useEffect } from "react";
import Shimmer from "../shimmer-components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaruntMenu from "../utils/useRestarauntMenu";
import RestarauntCategory from "./RestarauntCategory";
import { CDN_URL } from "../utils/constants";
import ResMenuShimmer from "../shimmer-components/ResMenuShimmer";

const RestarauntMenu = () => {

    const {resId}=useParams();
    const resInfo=useRestaruntMenu(resId);
    const [showItems,setShowItems]=useState(false);
    const [showIndex,setShowIndex]=useState(null);
    if(resInfo===null) return<ResMenuShimmer/>;

    const {name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category=>category.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className="border rounded-2xl w-[97%] m-auto bg-[#eaf5ef]">
      <div className="flex w-6/12 mx-auto my-4 bg-gray-50 rounded-2xl shadow-lg p-4 xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-9/12 xs:w-10/12 2xs:w-11/12  ">
        <div className="w-8/12 ">
          <h1 className="font-bold  text-2xl py-3 2xs:max-sm:text-sm">{name}</h1>
          <p className=" font-normal text-lg 2xs:max-sm:text-xs">
          {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        </div>
        <div className="w-4/12 relative">
          <label className="absolute pe-2 rounded-2xl left-3 top-2 text-sm bg-white">⭐{avgRating}</label>
          <img className=" w-41  p-1 rounded-2xl" src={CDN_URL+cloudinaryImageId}></img>
        </div>
        
      </div>
        
        {categories.map((category,index)=>
        <RestarauntCategory 
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={(index==showIndex && showItems)? true:false}
          setShowItems={()=>setShowItems(!showItems)}
          setShowIndex={()=>setShowIndex(index)}
         />)}
        
        
    </div>
  )
}

export default RestarauntMenu;