// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  // const [theme, setTheme] = useState(() => {
  //   return localStorage.getItem('theme') || 'light';
  // });

  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [theme]);

  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  // };

  const navLinks = (
    <>
      <li className="dark:text-white"><ScrollLink to="experience" smooth={true} duration={500}>My Experience</ScrollLink></li>
      <li className="dark:text-white"><ScrollLink to="projects" smooth={true} duration={500}>My Projects</ScrollLink></li>
      <li className="dark:text-white"><ScrollLink to="education" smooth={true} duration={500}>My Education</ScrollLink></li>
      <li className="dark:text-white"><ScrollLink to="contact" smooth={true} duration={500}>Contact Me</ScrollLink></li>
      <li className="dark:text-white"><Link to='https://github.com/Shafiul-Islam-Shatak'>My GitHub</Link></li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100 dark:bg-gray-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenuUnfold2Fill className="dark:text-white" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"></a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
