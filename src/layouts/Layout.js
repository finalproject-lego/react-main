import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Main from "../pages/Main.module.css";

function Layout() {

    return (
        <>
            <Header />
            <div className={Main.container}>
                <div className={Main.Position}>
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;