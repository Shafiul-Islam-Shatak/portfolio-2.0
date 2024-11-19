import { useState } from "react";

// icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectCards = ({ image, projectName, description, features, technology, backEndLink, frontEndLink, liveLink }) => {
    // action constrols
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-96 shadow-lg bg-[#fff] rounded">
            <div className="flex w-full justify-between items-center p-4">
                <div className="flex items-center gap-4">
                    <div className="">
                        <h2 className="font-[500] text-[1.2rem]">{projectName}</h2>
                        <p className="text-[#424242] text-[0.9rem]"></p>
                    </div>
                </div>
                <BsThreeDotsVertical className="text-text rounded-full
        text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
            </div>

            <img
                src={image}
                alt={projectName}
                className="w-full h-[250px] object-cover"
            />

            <p className="text-[#424242] p-4">
                {description.slice(0,120)+'....'}
            </p>
            <div className=" px-5">
                <Link to={liveLink}><button className="px-3 w-full py-2 border border-[#3B9DF8] hover:bg-[#3B9DF8] text-[#3B9DF8] 
hover:text-[#ffffff]  transition duration-300 rounded "> Live site
                </button></Link>
            </div>

            <div className="flex items-center justify-between w-full p-4 ">

                {isOpen ? (
                    <IoIosArrowUp
                        className="text-[#424242] text-[1.4rem] cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    />
                ) : (
                    <IoIosArrowDown
                        className="text-[#424242] text-[1.4rem] cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    />
                )}
            </div>

            {isOpen && (
                <div className={`p-4 text-[0.9rem] `}>
                    <b>Features:</b>
                    <ul className="mt-3 list-disc ml-5">
                        {features.map((feature, index) => (
                            <li key={index} className="mb-2">
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <b>Technologies:</b>
                    <ul className="mt-3 list-disc ml-5">
                        {technology.map((tech, index) => (
                            <li key={index} className="mb-2">
                                {tech}
                            </li>
                        ))}
                    </ul>


                    <Link to={frontEndLink}><button className="px-6 py-2 mr-2 border border-[#3B9DF8] hover:bg-[#3B9DF8] text-[#3B9DF8] 
hover:text-[#ffffff]  transition duration-300 rounded "> FrontEnd Code
                </button></Link>
                <Link to={backEndLink}><button className="px-6 py-2 border border-[#3B9DF8] hover:bg-[#3B9DF8] text-[#3B9DF8] 
hover:text-[#ffffff]  transition duration-300 rounded "> Backend Code
                </button></Link>
            
                </div>
                
            )}
        </div>
    );
};

export default ProjectCards;
