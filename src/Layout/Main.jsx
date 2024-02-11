import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <Outlet/>
        </div>
    );
};

export default Main;