import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-gray-50 to-red-50 ... py-5 border-b">
            <div className="flex items-center justify-center  container mx-auto">
           <Link to={'/'}>
           <img src="/logo/logoipsum-289.svg" alt="" />
           </Link>
        </div>
        </div>
    );
};

export default Navbar;