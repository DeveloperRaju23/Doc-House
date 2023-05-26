import React from 'react';
import logo from "../../../public/logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='primary_color'>
            <div className='container'>
                <div className='flex z-20 relative text-white py-4 justify-between items-center'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex gap-6 text-xl'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Appointment</Link>
                    <Link>Login</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;