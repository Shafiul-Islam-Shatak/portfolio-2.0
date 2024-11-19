import { Link } from "react-router-dom";

const MyRecentTask = () => {
    return (
        <div className="w-3/4 mx-auto mt-5 md:mt-10 ">
            <div >
                <h1 className="font-bold text-3xl lg:text-5xl text-center dark:text-white">My Recent Projects</h1>
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-3">
                {/* project 1 */}
                <div data-aos="fade-left" className="mt-5 md:mt-10 mx-auto border-2 border-gray-300 dark:border-purple-300 rounded-2xl ">
                    <Link to='https://associate-pulse.web.app'>
                        <div className="card w-72 md:w-96 dark:bg-gray-600">
                            <figure>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/shafiul-islam-shatak.appspot.com/o/associate-pulse.gif?alt=media&token=81f7434d-867c-471d-b01f-10a33f686a4e"
                                    alt="associate pulse" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="font-bold dark:text-white">Associate Pulse</h2>
                                <p className="dark:text-white">Associate pulse is a employee management system. There are three different role and access panel. Employee, HR and Admin.</p>
                                <h1 className="font-bold dark:text-white">Features :</h1>
                                <div className="ml-10">
                                    <ol className="list-decimal dark:text-white">
                                        <li>3 Different Dashboard</li>
                                        <li>Employees Tasks Tracking</li>
                                        <li>Pay Employee Salary in One Click</li>
                                    </ol>
                                </div>
                                <h1 className="font-bold dark:text-white">Used Technology :</h1>
                                <div className="ml-10">
                                    <ol className="list-decimal dark:text-white">
                                        <li>React</li>
                                        <li>MongoDB</li>
                                        <li>Express.js</li>
                                        <li>JWT</li>
                                        <li>TailwindCSS</li>
                                    </ol>
                                </div>

                                <div className="card-actions justify-end">
                                    <Link to='https://github.com/Shafiul-Islam-Shatak/Associate-Pulse'> <button className="btn btn-ghost dark:text-white border-2 border-gray-300 dark:border-purple-300">Client Repository</button></Link>
                                    <Link to='https://github.com/Shafiul-Islam-Shatak/Associate-pulse-server'><button className="btn btn-ghost dark:text-white border-2 border-gray-300 dark:border-purple-300">Server Repository</button></Link>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
                {/* project 2 */}
                <div className="mt-5 md:mt-10 mx-auto border-2 border-gray-300 dark:border-purple-300 rounded-2xl ">
                    <Link to='https://masala-manager.web.app'>
                        <div className="card w-72 md:w-96 dark:bg-gray-600">
                            <figure>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/shafiul-islam-shatak.appspot.com/o/masala.gif?alt=media&token=83fa5f90-8249-4317-a2cb-6a38b0ceeac1"
                                    alt="Masala Manager" />
                            </figure>
                            <div className="card-body">
                                <h2 className="font-bold dark:text-white">Masala Manager</h2>
                                <p className="dark:text-white">Masala Manager is a online food store. Where you can sale your own food and also can purchase from others.</p>
                                <h1 className="font-bold dark:text-white">Features :</h1>
                                <div className="ml-10">
                                    <ol className="list-decimal dark:text-white">
                                        <li>Add Your Food/Recipe</li>
                                        <li>Order/Purchase Food online</li>
                                        <li>Top selling</li>
                                    </ol>
                                </div>
                                <h1 className="font-bold dark:text-white">Used Technology :</h1>
                                <div className="ml-10">
                                    <ol className="list-decimal dark:text-white">
                                        <li>React</li>
                                        <li>MongoDB</li>
                                        <li>Express.js</li>
                                        <li>JWT</li>
                                        <li>TailwindCSS</li>
                                    </ol>
                                </div>

                                <div className="card-actions justify-end">
                                    <Link to='https://github.com/Shafiul-Islam-Shatak/Masala-Manager'> <button className="btn btn-ghost dark:text-white border-2 border-gray-300 dark:border-purple-300">Client Repository</button></Link>
                                    <Link to='https://github.com/Shafiul-Islam-Shatak/Masala-Manager-server'><button className="btn btn-ghost dark:text-white border-2 border-gray-300 dark:border-purple-300">Server Repository</button></Link>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
                {/* project 3 */}
                <div data-aos="fade-right" className="mt-5 md:mt-10 mx-auto border-2 border-gray-300 dark:border-purple-300 rounded-2xl ">
                    <Link to='https://craft-verse.web.app'>
                        <div className="card w-72 md:w-96 dark:bg-gray-600">
                            <figure>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/shafiul-islam-shatak.appspot.com/o/craft-verse.gif?alt=media&token=273d5585-58cb-4535-9eb3-6bdd93fba730"
                                    alt="Craft verse" />
                            </figure>
                            <div className="card-body">
                                <h2 className="font-bold dark:text-white">Craft verse</h2>
                                <p className="dark:text-white">Craft verse is a online Art & Craft store where you can upload your arts for sale, And you can also purchase others arts and crafts. User can also update his arts.</p>
                                <h1 className="font-bold dark:text-white">Features :</h1>
                                <div className="ml-10">
                                    <ol className="list-decimal dark:text-white">
                                        <li>Find by Category</li>
                                        <li>Dark & Light mode</li>
                                        <li>Customer Review System</li>
                                    </ol>
                                </div>
                                <h1 className="font-bold dark:text-white">Used Technology :</h1>
                                <div className="ml-10">
                                    <ol className="list-decimal dark:text-white">
                                        <li>React</li>
                                        <li>MongoDB</li>
                                        <li>Express.js</li>
                                        <li>TailwindCSS</li>
                                    </ol>
                                </div>

                                <div className="card-actions justify-end">
                                    <Link to='https://github.com/Shafiul-Islam-Shatak/Craft-verse'> <button className="btn btn-ghost dark:text-white border-2 border-gray-300 dark:border-purple-300">Client Repository</button></Link>
                                    <Link to='https://github.com/Shafiul-Islam-Shatak/Craft-verse-server'><button className="btn btn-ghost dark:text-white border-2 border-gray-300 dark:border-purple-300">Server Repository</button></Link>
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
 
            </div>
        </div>
    );
};

export default MyRecentTask;