import 'animate.css';

const MySkills = () => {
    return (
        <div className="w-3/4 mx-auto mt-5 md:mt-10 ">
            <h1 className="font-bold text-3xl lg:text-5xl text-center dark:text-white">Technology that I know</h1>
            <div className="mx-auto grid grid-cols-2 md:grid-cols-4 mt-5 md:mt-10 p-5 lg:p-10 gap-5">
                {/* 1st */}
                <div data-aos="fade-up" className="animate__bounceIn">
                    <img className="rounded-full w-32  mx-auto border-2 border-green-400 dark:border-purple-400 " src="https://i.ibb.co/3MX4PT2/HTML5.gif" alt=""  />
                    <h1 className="text-center text-lg font-semibold mt-2 dark:text-white">HTML5</h1>
                </div>
                {/* 2nd */}
                <div data-aos="fade-up" className="animate__bounceIn">
                    <img className="rounded-full w-32   mx-auto border-2 border-green-400 dark:border-purple-400" src="https://i.ibb.co/PzRz8zj/CSS3.gif" alt="CSS3"  />
                    <h1 className="text-center text-lg font-semibold mt-2 dark:text-white">CSS3</h1>
                </div>
                {/* 3 */}
                <div data-aos="fade-up" className="animate__bounceIn">
                    <img className="rounded-full w-32   mx-auto border-2 border-green-400 dark:border-purple-400" src="https://i.ibb.co/t4yGbdS/Nodejs.gif" alt="Node.js"  />
                    <h1 className="text-center text-lg font-semibold mt-2 dark:text-white">Node.js</h1>
                </div>
                {/* 4 */}
                <div data-aos="fade-up" className="animate__bounceIn">
                    <img className="rounded-full w-32  mx-auto border-2 border-green-400 dark:border-purple-400" src="https://i.ibb.co/j8wKDXL/React.gif" alt="React"  />
                    <h1 className="text-center text-lg font-semibold mt-2 dark:text-white">React</h1>
                </div>
                {/* 5 */}
                <div data-aos="fade-up" className="animate__bounceIn">
                    <img className="rounded-full w-32  mx-auto border-2 border-green-400 dark:border-purple-400" src="https://i.ibb.co/z4mJXdH/mongodb.gif" alt="MongoDB"  />
                    <h1 className="text-center text-lg font-semibold mt-2 dark:text-white">MongoDB</h1>
                </div>
                {/* 6 */}
                <div data-aos="fade-up" className="animate__bounceIn">
                    <img className="rounded-full w-32  mx-auto border-2 border-green-400 dark:border-purple-400" src="https://i.ibb.co/KLdCGKY/Firebase.gif" alt="Firebase"  />
                    <h1 className="text-center text-lg font-semibold mt-2 dark:text-white">Firebase</h1>
                </div>
                {/* 7 */}
                <div data-aos="fade-up" className="animate__bounceIn">
                    <img className="rounded-full w-32   mx-auto border-2 border-green-400 dark:border-purple-400" src="https://i.ibb.co/2qzg5ML/expressjs.gif" alt="Express Js"  />
                    <h1 className="text-center text-lg font-semibold mt-2 dark:text-white">Express Js</h1>
                </div>
            </div>
        </div>
    );
}

export default MySkills;