import { Link } from "react-router-dom"

const Footer=()=>{
    return (
        <div className="body grid drop-shadow-md grid-cols-4 2xs:max-md:grid-cols-2 2xs:max-md:text-center border rounded-2xl w-[97%] m-auto bg-gray-200 mt-4 break-words">
            <div className=" p-10 min-w-56">
                <box-icon className="inline" type='solid' name='magnet'></box-icon><h1 className="text-lg inline font-extrabold relative bottom-1">Urban Harvest</h1>
                <p className="text-sm text-balance mb-6 mt-2 leading-6 text-gray-500">A platform that connects customers with rich delicacies of India.</p>
                <a className="p-1" target="blank" href="https://www.facebook.com/harshit.kaushal.77/"><box-icon name='facebook-circle' type='logo' ></box-icon></a>
                <a className="p-1" target="blank" href="https://github.com/Harshitk816"><box-icon name='github' type='logo' ></box-icon></a>
                <a className="p-1" target="blank" href="www.linkedin.com/in/hharshitsharmaa"><box-icon name='linkedin-square' type='logo' ></box-icon></a>
                <a className="p-1" target="blank" href="https://hharsitsharmaa.netlify.app/"><box-icon name='product-hunt' type='logo' ></box-icon></a>
            </div>
            
                <div className=" p-10 2xs:max-lg:px-5 drop-shadow-md ">
                    <h1 className="font-bold">Our Menu</h1>
                    <ul className="pt-4  text-gray-500">
                        <Link to="/"><li className="text-sm py-2 hover:text-black">Special</li></Link>
                        <Link to="/"><li className="text-sm py-2 hover:text-black">Popular</li></Link>
                        <Link to="/"><li className="text-sm py-2 hover:text-black">Categories</li></Link>
                    </ul>
                </div>
                
                <div className=" p-10 2xs:max-lg:px-5 drop-shadow-md">
                    <h1 className="font-bold">Useful Links</h1>
                    <ul className="pt-4  text-gray-500 ">
                        <Link to="/"><li className="text-sm py-2 hover:text-black">Home</li></Link>
                        <Link to="/about"><li className="text-sm py-2 hover:text-black">About us</li></Link>
                        <Link to="/contact"><li className="text-sm py-2 hover:text-black">Contact us</li></Link>
                    </ul>
                </div>
                <div className=" p-10 2xs:max-lg:px-5 drop-shadow-md">
                    <h1 className="font-bold">Get in Touch</h1>
                    <ul className="pt-4 text-gray-500">
                        <a href="mailto:harshitkaushal816@gmail.com"><li className="text-sm py-2 hover:text-black">harshitkaushal816@gmail.com</li></a>
                        <li className="text-sm py-2 hover:text-black">linkedin.com/in/hharshitsharmaa</li>
                    </ul>
                </div>         
            
            
        </div>
    )
}

export default Footer