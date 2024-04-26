import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaXmark } from "react-icons/fa6";

import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { path: "/", title: "Start a Search" },
        { path: "/my-jobs", title: "My Jobs" },
        { path: "/salary", title: "Salaray Estimate" },
        { path: "/post-job", title: "Post a Job" },
    ]

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider).then((result) => {

            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    return (
        <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <nav className='flex justify-between items-center py-6'>
                <a href="/" className='flex items-center gap-2 text-2xl text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox='0 0 29 30' fill="none">
                        <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4" />
                        <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
                    </svg>
                    <span>Job Board</span>
                </a>

                {/* nav items for large screen */}
                <ul className='hidden md:flex gap-12'>
                    {navItems.map(({ path, title }) => (
                        <li key={path} className='text-base text-primary'>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))
                    }
                </ul>

                {/* signup and login button */}
                <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                    {/* <Link to="/login" className='py-2 px-5 border rounded' onClick={handleLogin}>Log In</Link> */}
                    <Link to="#" className='py-2 px-5 border rounded' onClick={handleLogin}>Log In</Link>
                    {/* <Link to="/sin-up" className='py-2 px-5 border rounded bg-secondary text-white' onClick={handleLogin}>Sign Up</Link> */}
                    <Link to="#" className='py-2 px-5 border rounded bg-secondary text-white' onClick={handleLogin}>Sign Up</Link>
                </div>

                {/* mobile screen */}
                <div className='md:hidden block'>
                    <button onClick={handleMenuToggler}> {
                        isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBars className='w-5 h-5 text-primary' />
                    }
                    </button>
                </div>
            </nav>

            {/* navitems for mobile */}
            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul>
                {navItems.map(({ path, title }) => (
                    <li key={path} className='text-base text-white first:text-white py-1'>
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            {title}
                        </NavLink>
                    </li>
                ))
                }

                <li className='mt-2 text-white py-1'><Link to="/login" className='py-2 px-4 rounded bg-secondary'>Log In</Link></li>
                </ul>
            </div>
        </header >
    )
}

export default Navbar