import { useState } from "react";
import ItemList from "./ItemList";

const RestarauntCategory=({data,showItems,setShowIndex, setShowItems})=>{
    const{title,itemCards}=data;
    //const[showItems,setShowItems]=useState(false);

    const handleClick=()=>{
    //    setShowItems(!showItems);
    setShowIndex();
    setShowItems();
    }  
     return(
        <div>
           {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {/* {accordion body} */}
                {showItems && <ItemList items={itemCards}/>}
            </div>
            
            
        </div>
    )
};
export default RestarauntCategory;