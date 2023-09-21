import {Navbar} from "./Navbar";
import {Wrapper} from "./Wrapper";
import {Footer} from "./Footer";
import {Outlet} from "react-router-dom";

export const BaseLayout = () => {

    return(
        <>
            <Navbar/>

            <Outlet/>

            <Footer/>
        </>
    );
}

