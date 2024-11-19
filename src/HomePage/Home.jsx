import { LuArrowDownToLine } from "react-icons/lu";
import MySkills from "../Components/MySkills";
import Experience from "../Components/Experience";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import MyRecentTask from "../Components/MyRecentTask";
import MyEducation from "../Components/MyEducation";
import ContactForm from "../Components/ContactForm";
import BottomToTop from "../Components/BottomToTop";
import Typewriter from 'react-ts-typewriter';
import 'animate.css';




const Home = () => {

    const handleDownloadCv = () => {
        window.location.href = 'https://drive.usercontent.google.com/download?id=1irEHV4sb8zpuNDAYyeYLQ0x1NxzlJYtK&export=download&authuser=2&confirm=t&uuid=d8d7d7dd-1e1f-4330-b0af-7a8f08dff556&at=AN_67v2_uTmg2cZURFlULxeGnh5H:1729516170188'
    }

    return (
        <div>
            {/* Banner */}
            <div className="">
                <div className="hero ">
                    <div className="hero-content justify-between flex-col lg:flex-row-reverse">
                        <img 
                            src="https://i.ibb.co/NNf3GvN/346064333-949333756309325-621565237007494427-n-1-removebg-preview.png"
                            className="w-60 md:w-96 rounded-full shadow-2xl border-4 dark:border-purple-800 animate__animated animate__fadeInRight" />
                        <div className="bg-gray-800 dark:bg-base-300 rounded-3xl bg-opacity-70 p-5 lg:w-1/2 animate__animated animate__fadeInLeft">
                            <h1 className="text-3xl text-white dark:text-gray-800  md:text-5xl font-bold ">Hi !<br></br> 
                            <Typewriter 
                            cursor={false} 
                            text='Myself Shafiul Islam' />
                            </h1>
                            <p className="py-6 text-white dark:text-gray-800 ">
                                
                                I am MERN Stack Developer with extensive experience in developing full-stack web applications. Proficient in MongoDB, Express.js, React, and Node.js.
                            </p>
                            <button onClick={handleDownloadCv} className="btn border-none bg-[#667EEA] text-white">Download CV<LuArrowDownToLine></LuArrowDownToLine></button>
                            <div className="flex items-center mt-5">
                                <h1 className="text-3xl text-white dark:text-gray-800  ">Find me : </h1>
                                <div className="flex justify-evenly gap-5 items-center ml-5">
                                    <button className="text-3xl text-white dark:text-gray-800" ><Link to='https://www.facebook.com/shafiulislamshatak.sk/'><FaFacebook></FaFacebook></Link></button>
                                    <button className="text-3xl text-white dark:text-gray-800" ><Link to='https://www.instagram.com/skshatak/'><FaInstagram></FaInstagram></Link></button>
                                    <button className="text-3xl text-white dark:text-gray-800" ><Link to='https://github.com/Shafiul-Islam-Shatak'><FaGithub></FaGithub></Link></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* My skills */}
            <div className=" dark:bg-gray-800">
                <MySkills></MySkills>
            </div>
            {/* My experience */}
            <div id="experience" className=" dark:bg-gray-800">
                <Experience></Experience>
            </div>
            {/* My projects */}
            <div id="projects" className=" dark:bg-gray-800">
                <MyRecentTask></MyRecentTask>
            </div>
            {/* My Education */}
            <div id="education" className=" dark:bg-gray-800">
                <MyEducation></MyEducation>
            </div>
            {/* Contact */}
            <div id="contact" className=" dark:bg-gray-800">
                <ContactForm></ContactForm>
            </div>
            {/* top button */}
            <BottomToTop></BottomToTop>
        </div>
    );
};

export default Home;