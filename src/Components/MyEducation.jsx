
const MyEducation = () => {
    return (
        <div className="mt-5 md:mt-10">
            <div >
                <h1 className="font-bold text-3xl lg:text-5xl text-center dark:text-white">My Educational Background</h1>
            </div>

            <div className="w-3/4 mx-auto mt-5 md:mt-10 ">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div data-aos="flip-left" className="timeline-start mb-10 md:text-start dark:text-purple-400">
                            <time className="font-mono italic ">2024, June</time>
                            <div className="text-lg font-black">Web Development Course with Jhankar Mahbub<br></br>(MERN Stack)</div>
                            <ol className="list-disc mt-3 ml-5 md:ml-0">
                                <li>Average assignment mark 52 out of 60</li>
                                <li>Average quiz mark 8 out of 10</li>
                                <li>Now on Going Program SCIC </li>
                            </ol>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div data-aos="flip-right" className="timeline-end mb-10 dark:text-purple-400">
                            <time className="font-mono italic">2023 , Dec</time>
                            <div className="text-lg font-black">B.Sc in Computer Science Engineering.</div>
                            <h1 className="underline italic">University of Scholars</h1>
                            <p className="mt-3">CGPA 3.56</p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div data-aos="flip-left" className="timeline-start mb-10 md:text-start dark:text-purple-400">
                            <time className="font-mono italic">2018</time>
                            <div className="text-lg font-black"> Higher Secondary School Certificate</div>
                            <h1 className="underline italic">Kurmitola High School & College</h1>
                            <p className="mt-3">Group Science</p>
                            <p >GPA 4.33</p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div  data-aos="flip-right" className="timeline-end mb-10 dark:text-purple-400">
                            <time className="font-mono italic">2016</time>
                            <div className="text-lg font-black">Secondary School Certificate</div>
                            <h1 className="underline italic">Adarsha School Narayangoinj</h1>
                            <p className="mt-3">Group Science</p>
                            <p >GPA 4.83</p>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default MyEducation;