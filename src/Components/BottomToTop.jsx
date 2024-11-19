import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";


const BottomToTop = () => {

    const [isVisible, setIsVisible] = useState(false);


    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="text-white dark:text-purple-800 text-5xl bg-gray-600 dark:bg-purple-300 rounded-full  hover:bg-purple-500"
                >
                    <FaCircleArrowUp ></FaCircleArrowUp>
                </button>
            )}
        </div>
    );
};

export default BottomToTop;