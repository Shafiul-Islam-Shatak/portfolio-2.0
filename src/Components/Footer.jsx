
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-300 dark:bg-purple-800 text-base-content p-4 mt-20">
                <aside>
                    <p className="dark:text-white">Copyright © ${new Date().getFullYear()} - All right reserved by Shafiul Islam Shatak</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;