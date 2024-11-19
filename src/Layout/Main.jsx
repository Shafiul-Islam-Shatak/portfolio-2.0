import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {

    useEffect(() => {
        AOS.init({
          duration : 500
        });
      }, []);
    return (
        <div className="dark:bg-gray-800">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;