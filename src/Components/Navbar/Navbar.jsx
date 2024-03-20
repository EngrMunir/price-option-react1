import { useState } from "react";
import  Link  from "../../Components/Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Navbar = () => {
    const [open, setOpen] =useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
      ];
      
    return (
        <nav>
            <div className="md:hidden" onClick={() =>setOpen(!open)}>
            {
                open === true ?  <IoIosCloseCircleOutline className="text-2xl" /> :  <RiMenu2Fill className="text-2xl " />
            }
               
            </div>
            <ul className="md: flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;