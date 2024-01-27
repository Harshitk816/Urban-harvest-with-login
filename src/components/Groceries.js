import coming_soon from "../images/coming_soon.jpg"
const Groceries=()=>{
    return(
        <div className="body border rounded-2xl w-[97%] m-auto bg-cover" style={{"background-image":`url(${coming_soon})`}} >
            <div className="w-auto m-40 p-20 bg-white h-100vh bg-opacity-80 xl:p-20 lg:p-7 lg:max-2xl:m-40 md:p-5 md:m-30 sm:p-4 sm:m-20 xs:p-3 xs:m-10 2xs:p-3 2xs:m-10 ">
                <h1 className="font-extrabold text-[100px] text-[#4E7E6E] text-center underline underline-offset-8 drop-shadow-2xl xl:text-[100px] lg:text-[70px] md:text-[50px] sm:text-[35px] xs:text-[25px] 2xs:text-[25px] ">Coming soon!</h1>
                <h3 className="font-bold text-center drop-shadow-2xl text-gray-800 text-[40px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[20px] xs:text-[15px] 2xs:text-[15px]  ">I am Currently working on this feature. It will be available to you soon!</h3>
            </div>
        </div>
    )
}
export default Groceries