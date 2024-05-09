import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../reduxUtils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () =>{
    const [totalSum, setTotalSum]=useState(0);
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleEmptyCart=()=>{
        dispatch(clearCart());
    }

    useEffect(()=>{
        const Sum = cartItems.reduce(function (total, item){
            total=total+(item.card.info.price/100);
            setTotalSum(total)
        },0);
    }, [totalSum])
    
    
    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 mx-auto my-4 bg-[#eaf5ef] rounded-2xl shadow-lg p-4 xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-9/12 xs:w-10/12 2xs:w-11/12  ">
                {cartItems.length===0 && (
                    <h1>Your cart seems Empty! Add items to the Cart. 🛒</h1>
                )}
                <ItemList items={cartItems}/>  
            </div>
            
            <span><button
                 className="border px-3 py-2 my-2 bg-red-500 text-white rounded-3xl"
                 onClick={handleEmptyCart}
                >Empty Cart </button></span>
           
        </div>
    )
}
export default Cart;