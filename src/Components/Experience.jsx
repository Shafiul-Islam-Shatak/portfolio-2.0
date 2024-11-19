
const Experience = () => {
    return (
        <div className="mt-5 md:mt-10">
            <div>
                <h1 className="font-bold text-3xl lg:text-5xl text-center dark:text-white">My Previous Work Experience</h1>
            </div>
            {/* According */}
            <div className="lg:w-3/4 mx-auto mt-5 md:mt-10">
                {/* 1st */}
                <div data-aos="fade-up" className="collapse collapse-arrow bg-base-200 mt-5 dark:bg-gray-400">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-base-300 dark:bg-gray-300">
                        <h1 className="text-3xl  font-bold">1. Admin & Junior IT</h1>
                        <p className="pt-2">July 2022- July 2023</p>
                    </div>
                    <div className="collapse-content">
                        <div className="py-6">
                            <h1 className="text-lg lg:text-3xl underline mb-3">Access Asia Limited</h1>
                            <p>Access Asia Limited is a tendering company based in Dhanmondi, Dhaka. It specializes in managing and facilitating the procurement processes for various projects, ensuring compliance with regulatory requirements and efficient handling of bids. The company is dedicated to providing high-quality tendering services to clients across different industries.</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl">Responsibilities:</h1>
                            <ol className="list-disc pl-10 pt-5">
                                <li>Provided administrative support to ensure efficient office operations, including scheduling meetings, managing files, and handling correspondence.</li>
                                <li>Assisted in the maintenance and management of IT infrastructure, including hardware, software, and network systems.</li>
                                <li>Monitored and managed IT support requests, ensuring timely resolution of technical issues.</li>
                                <li>Coordinated with external vendors for IT-related purchases, repairs, and services.</li>
                                <li>Managed office supplies inventory and placed orders as needed to ensure continuous availability.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div data-aos="fade-up" className="collapse mt-5 collapse-arrow bg-base-200 dark:bg-gray-400">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium bg-base-300 dark:bg-gray-300">
                        <h1 className="text-3xl  font-bold">2. Dispatch Executive</h1>
                        <p className="pt-2">Nov 2021- June 2022</p>
                    </div>
                    <div className="collapse-content">
                        <div className="py-6">
                            <h1 className="text-lg lg:text-3xl underline mb-3">Shajao.com</h1>
                            <p>Shajao.com is an e-commerce company based in Banasree, Dhaka, specializing in selling canvas, art, and image frames. They offer a wide range of high-quality home decor products designed to enhance any living space with style and creativity.</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl">Responsibilities:</h1>
                            <ol className="list-disc pl-10 pt-5">
                                <li>Coordinated the dispatch of goods to customers, ensuring timely and accurate deliveries.</li>
                                <li>Communicated with couriers to provide instructions, information, and address any issues.</li>
                                <li>Managed and updated dispatch records, including delivery logs, and driver schedules.</li>
                                <li>Ensured compliance with safety regulations and company policies during dispatch operations.</li>
                                <li>Responded to customer queries regarding delivery status.</li>
                                <li>Communicated any delivery issues or delays to relevant departments</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div data-aos="fade-up" className="collapse mt-5 collapse-arrow bg-base-200 dark:bg-gray-400">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium bg-base-300 dark:bg-gray-300">
                        <h1 className="text-3xl  font-bold">3. Junior Sales Executive</h1>
                        <p className="pt-2">May 2021- Oct 2021</p>
                    </div>
                    <div className="collapse-content">
                        <div className="py-6">
                            <h1 className="text-lg lg:text-3xl underline mb-3">Shajao.com</h1>
                            <p>Shajao.com is an e-commerce company based in Banasree, Dhaka, specializing in selling canvas, art, and image frames. They offer a wide range of high-quality home decor products designed to enhance any living space with style and creativity.</p>
                        </div>
                        <div>
                                <h1 className="font-bold text-2xl">Responsibilities:</h1>
                                <ol className="list-disc pl-10 pt-5">
                                    <li>Engaged with customers to understand their needs and provide tailored product recommendations.</li>
                                    <li>Managed customer relationships, ensuring high levels of satisfaction and retention.</li>
                                    <li>Collaborated with the marketing team to create promotional materials and campaigns.</li>
                                    <li>Participated in sales meetings and provided input on sales strategies and targets.</li>
                                    <li>Assisted in resolving customer complaints and issues promptly and effectively.</li>
                                    <li>Maintained up-to-date knowledge of product features, benefits, and pricing.</li>
                                </ol>
                            </div>
                    </div>
                </div>
            </div>
            {/* According end */}
        </div>
    );
};

export default Experience;