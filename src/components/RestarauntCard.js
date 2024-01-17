import { CDN_URL } from "../utils/constants";
const RestarauntCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resData?.info;//optional chaining
    return(
    <div className=" rounded-lg res-card m-4 p-4 w-[200px] bg-gray-200 hover:bg-gray-300 dark:bg-white" >
        <img  alt="res-logo" className="res-logo rounded-lg" src={CDN_URL+cloudinaryImageId}></img>
        <h3 className="font-bold py-4 text-lg truncate">{name}</h3>
        <h4 className=" truncate">{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>

    </div>
)}


//Higher order component 

export const withDeliveryLogo=(RestarauntCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white  text-sm p-2 m-2 rounded-lg ">Free Delivery</label>
                <RestarauntCard {...props}/>
            </div>
        )
    }
}
export default RestarauntCard; 