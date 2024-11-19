// import { Link } from "react-router-dom";
import ProjectCards from "./ProjectCards";

const MyRecentTask = () => {
    const associateFetures = ['3 Different Dashboard','Employees Tasks Tracking', 'Pay Employee Salary in One Click' ]

    const masalaFetures = ['Login and Registration','Food Purchase and sales', 'Post on gallary or review' , 'Top sales' , 'Sorting' ]

    const needscartFetures = ['Multipule Filtering' , 'Search', 'Price range' , 'Sorting' ]

    const craftFetures = ['Login and registration' , 'Dark Mode light mode', 'Add products' , 'CRUD Oparation' , 'Add review']

    const associateTech = ['React', 'MongoDB', 'Expressjs', 'JWT' , 'TailwindCSS']

    const bestDealsFetures = ['Percentage-based discount system, helping shoppers access the best deals','Intuitive buyer, seller, and admin dashboards for easy navigation and management', 'Real-time chat support, making vendor-buyer communication a breeze' , 'Vendor analytics for performance insights and product comparisons for buyers', 'Top Sales and Featured Section' ]


    return (
        <div className="w-3/4 mx-auto mt-5 md:mt-10 ">
            <div >
                <h1 className="font-bold text-3xl lg:text-5xl text-center dark:text-white">My Recent Projects</h1>
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-3">

                {/* project 1 */}
                {/* best deals */}
                <div data-aos="fade-left" className="mt-5 md:mt-10 mx-auto  ">
                    <ProjectCards
                    image ='https://firebasestorage.googleapis.com/v0/b/shafiul-islam-shatak.appspot.com/o/best%20deal.gif?alt=media&token=6a5badf3-bb2a-428e-9c80-4552f6b6ff64' 
                    projectName='Best Deals' 
                    description='Best Deals is a  multi-vendor eCommerce platform aimed at enhancing online shopping and vendor management. It was a team project with my 5 teammates'
                    features={bestDealsFetures}
                    technology={associateTech}
                    liveLink = 'https://best-deal-909.web.app/'
                    frontEndLink = 'https://github.com/Tofazzal26/Best-Deals/tree/development/client'
                    backEndLink  = 'https://github.com/Tofazzal26/Best-Deals/tree/development/server'
                    />   
                </div>
                {/* project 2 */}
                {/* masala manager */}
                <div data-aos="fade-left" className="mt-5 md:mt-10 mx-auto  ">
                    <ProjectCards
                    image ='https://firebasestorage.googleapis.com/v0/b/shafiul-islam-shatak.appspot.com/o/masala.gif?alt=media&token=83fa5f90-8249-4317-a2cb-6a38b0ceeac1' 
                    projectName='Masala Manager' 
                    description='Masala Manager is a Restaurant Management system. User can upload their recipe/food. User also can buy a food from this site.User can see his order food list.Delete and also update the cart.'
                    features={masalaFetures}
                    technology={associateTech}
                    liveLink = 'https://masala-manager.web.app/'
                    frontEndLink = 'https://github.com/Shafiul-Islam-Shatak/Masala-Manager'
                    backEndLink  = 'https://github.com/Shafiul-Islam-Shatak/Masala-Manager-server'
                    />   
                </div>
                {/* project 3 */}
                {/* associate pulse */}
                <div data-aos="fade-left" className="mt-5 md:mt-10 mx-auto  ">
                    <ProjectCards
                    image ='https://firebasestorage.googleapis.com/v0/b/shafiul-islam-shatak.appspot.com/o/associate-pulse.gif?alt=media&token=81f7434d-867c-471d-b01f-10a33f686a4e' 
                    projectName='Associate Pulse' 
                    description='Associate pulse is a employee management system. There are three different role and access panel. Employee, HR and Admin.'
                    features={associateFetures}
                    technology={associateTech}
                    liveLink = 'https://associate-pulse.web.app'
                    frontEndLink = 'https://github.com/Shafiul-Islam-Shatak/Associate-Pulse'
                    backEndLink  = 'https://github.com/Shafiul-Islam-Shatak/Associate-pulse-server'
                    />   
                </div>
                {/* project 4 */}
                {/* needs cart */}
                <div data-aos="fade-left" className="mt-5 md:mt-10 mx-auto  ">
                    <ProjectCards
                    image ='https://firebasestorage.googleapis.com/v0/b/shafiul-islam-shatak.appspot.com/o/needscart.gif?alt=media&token=83412bbe-c8d7-4093-84c2-a550f15e85f0' 
                    projectName='Needs Cart' 
                    description='This single page projcet is set up with MERN (MongoDB , Express.js , React.js , Node.js). As this is a single page web-application. But also used react router so in future we can make this project in larger application'
                    features={needscartFetures}
                    technology={associateTech}
                    liveLink = 'https://needscart-30b9c.web.app/'
                    frontEndLink ='https://github.com/Shafiul-Islam-Shatak/NeedsCart'
                    backEndLink  = 'https://github.com/Shafiul-Islam-Shatak/NeedsCart-server'
                    />   
                </div>
                {/* project 5 */}
                {/* craft verse */}
                <div data-aos="fade-left" className="mt-5 md:mt-10 mx-auto  ">
                    <ProjectCards
                    image ='https://firebasestorage.googleapis.com/v0/b/shafiul-islam-shatak.appspot.com/o/craft-verse.gif?alt=media&token=273d5585-58cb-4535-9eb3-6bdd93fba730' 
                    projectName='Craft Verse' 
                    description='This project is a art and craft store. You can buy and sale your arts and crafts here. You can buy a arts or crafts from others. And also can sale your arts and craft here after login. You can post, delete and update your crafts.'
                    features={craftFetures}
                    technology={associateTech}
                    liveLink = 'https://craft-verse.web.app/'
                    frontEndLink ='https://github.com/Shafiul-Islam-Shatak/Craft-verse'
                    backEndLink  = 'https://github.com/Shafiul-Islam-Shatak/Craft-verse-server'
                    />   
                </div>
                
            </div>
        </div>
    );
};

export default MyRecentTask;