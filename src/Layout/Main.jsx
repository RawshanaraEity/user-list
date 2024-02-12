import { Outlet } from "react-router-dom";
import Banner from "../Pages/Home/Banner";
import Footer from "../Pages/Home/Footer";


const Main = () => {
    return (
        <div className="">
            <Banner/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;