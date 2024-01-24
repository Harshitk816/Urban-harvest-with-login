import { CDN_URL } from "../utils/constants";
const RestarauntCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resData?.info;//optional chaining
    return(
    <div data-testid="resCard" className="relative rounded-lg res-card m-4 p-2 w-[200px] bg-white hover:bg-gray-50 dark:bg-white" >
        <div className="relative">
            <img alt="res-logo" className="res-logo rounded-lg" src={CDN_URL+cloudinaryImageId}></img>
            <label className=" absolute bottom-2 left-2 text-xs bg-white pe-2 py-1 rounded-2xl">⭐{avgRating}</label>
        </div>
        <div className="p-3">
            <h3 className="font-bold py-2 text-lg truncate">{name}</h3>
            <h4 className=" text-sm py-1 truncate">{cuisines.join(", ")}</h4>
            <h4 className="text-sm py-1">{sla.deliveryTime} minutes</h4>
        </div>
    </div>
)}


//Higher order component 

export const withDeliveryLogo=(RestarauntCard)=>{
    return (props)=>{
        return (
            <div className="">
                <label className="absolute z-10 bg-black text-white  text-sm p-2 m-2 rounded-lg ">Free Delivery</label>
                <RestarauntCard {...props}/>
            </div>
        )
    }
}
export default RestarauntCard; 