import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer";
import Navbar from "../Pages/Home/Navbar";


const Main = () => {
    return (
        <div className="">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;