import { useDispatch } from "react-redux";
import { addItem } from "../reduxUtils/cartSlice";

const ItemList=({items})=>{
    
    const CDN_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item));
        
    }
    
    return(
    <div>
        {items.map((item)=>
        <div key={item.card.info.id} className="p-2 m-2 border-b border-gray-200 text-left flex justify-between hover:bg-gray-100 ">
            
            <div className=" w-9/12">
                <div className="py-2 w-full">
                    <span>{item.card.info.name}</span><br></br>
                    <span> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                </div>
                <div>
                    <p  className="relative text-xs w-full  h-16 text-pretty text">{item.card.info.description}</p>
                </div>
            </div>
            <div className="w-3/12">
                <img className=" w-41  p-1 rounded-lg" src={CDN_URL+item.card.info.imageId}></img>
                <button onClick={()=>handleAddItem(item)} className=" md:border border-gray-300 px-2 rounded-md relative mx-[35%] bottom-2 bg-white " >ADD</button>
            </div>
            
        </div>)}
    </div>

)};
export default ItemList;