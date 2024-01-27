const ResCardShimmer=()=>{
    return (
        <div className=" m-auto min-w-[210px] ">
        <div data-testid="resCard" className=" rounded-lg res-card mx-auto my-5 p-2 w-[200px] 2xs:max-xs:w-[260px] sm:w-[190px] bg-white hover:bg-gray-50 dark:bg-white
           transition-transform duration-300 transform hover:scale-105 " >
            <div className="relative"> 
                <div className="res-logo rounded-lg bg-gray-200 w-full h-[109px] text-gray-200" >h</div>
                <label className=" absolute bottom-2 left-2 text-xs text-white bg-white pe-2 py-1 rounded-2xl">he</label>
            </div>
            <div className="p-3">
                <h3 className="font-boldtext-sm text-gray-200 bg-gray-200 rounded-md my-2 text-lg truncate">name</h3>
                <h4 className=" text-sm text-gray-200 bg-gray-200 rounded-md py-1 truncate">CHINESE</h4>
                <h4 className="text-sm text-gray-200 bg-gray-200 rounded-md my-1 flex">
                    <span className="relative top-[1.5px] right-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </span>  minutes</h4>
                    <button className="border border-solid border-gray-200 bg-gray-200 font-bold text-gray-200 px-2 mt-2 rounded-3xl">View</button>
            </div>
        </div>
        </div>
    )
}
export default ResCardShimmer;