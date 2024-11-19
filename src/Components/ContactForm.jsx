import 'animate.css';

const ContactForm = () => {
    return (
        <div  className="mt-10 animate__zoomIn">
            <div >
                <h1 className="font-bold text-3xl lg:text-5xl text-center ">Contact With Me</h1>
            </div>
            <div>
                <div data-aos="zoom-in-up" className=" bg-base-200  lg:w-3/4 mx-auto mt-5 md:mt-10 rounded-3xl py-5">
                    <div className="flex justify-between lg:justify-evenly items-center flex-col lg:flex-row-reverse md:py-10">
                        <div className="text-center lg:text-left">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold dark:text-white mb-5 lg:mb-0">Don't Forget to <br /> Knock Me !!</h1>
                        </div>
                        <div className="card lg:w-1/2 w-3/4 p-5 lg:p-10 bg-base-100 shadow-2xl">
                            <form className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>                                  
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;