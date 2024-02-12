import { Outlet } from "react-router-dom";
import Banner from "../Pages/Home/Banner";
import Footer from "../Pages/Home/Footer";
import Navbar from "../Pages/Home/Navbar";


const Main = () => {
    return (
        <div className="">
            <Navbar/>
            {/* <Banner/> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;