import ResCardShimmer from "./ResCardShimmer"
const HomeShimmer=()=>{
    return (<div className="animate-pulse body border rounded-2xl w-[97%] m-auto bg-gray-200">
    <div className=" relative filter flex bg-[100px] bg-white rounded-xl m-3">
        <div className="search my-4 ms-6 p-4 2xs:max-xs:p-2"> 
            <div className="   p-[2px] border rounded-3xl bg-white flex flex-row items-center 2xs:max-sm:flex-col 2xs:max-xs:w-[90%] 2xs:max-md:p-[4px]">
                <input data-testid="searchInput" type="text" className=" focus:outline-none px-4 text-sm py-1 rounded-2xl 2xs:max-xs:w-[100%] 2xs:max-md:px-2" 
                    placeholder=""
                ></input>
                <button className=" px-4 text-gray-200 py-1 bg-gray-200 rounded-2xl 2xs:max-md:w-full " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </button>
            </div>
    </div>
    <div className="search my-4 mx-1 p-4 flex items-center me-6 2xs:max-xs:p-2">
    <button className="px-4 py-2 bg-gray-200 text-gray-200 text-sm rounded-3xl" >Top Rated Restaraunts</button>
    </div>
    <div className="search m-4 p-4 items-center hidden ">
    <label>Name : </label>
    <input className="border border-solid border-black p-2 m-2 "/>
    </div>
        
    </div>
    <div className="res-container grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 sm:gap-2 xs:grid-cols-2 " >
        <ResCardShimmer></ResCardShimmer>
        <ResCardShimmer></ResCardShimmer>  
        <ResCardShimmer></ResCardShimmer>     
        <ResCardShimmer></ResCardShimmer>  
        <ResCardShimmer></ResCardShimmer>  
        <ResCardShimmer></ResCardShimmer>  
        <ResCardShimmer></ResCardShimmer>  
        <ResCardShimmer></ResCardShimmer>  
        <ResCardShimmer></ResCardShimmer>  
        <ResCardShimmer></ResCardShimmer>  
        <ResCardShimmer></ResCardShimmer>
        <ResCardShimmer></ResCardShimmer>   
        <ResCardShimmer></ResCardShimmer> 
        <ResCardShimmer></ResCardShimmer> 
        <ResCardShimmer></ResCardShimmer> 
    </div>
</div>
)
}
export default HomeShimmer