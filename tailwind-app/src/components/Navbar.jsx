import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import {FaFacebook, FaYoutube, FaPinterest, FaInstagram, FaTwitter} from 'react-icons/fa';


const Navbar = () => {
    // Use State for Hamburger Menu
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }
    return (
        <div className="flex w-full justify-between items-center h-20 px-4 z-10 absolute text-white">
            <div>
                <h1  onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
            </div>
            <div>
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>
            </div>
            <div className="hidden md:flex">
                <BiSearch className="mr-2" size={20}/>
                <BsPerson size={20}/>
            </div>

            {/*Hamburger*/}
            <div onClick={handleNav} className="md:hidden z-10">
                {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20} />}
            </div>

            {/*Mobile menu dropdown*/}
            {/*If nav it's true, default value it's false. Display style */}
            <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul className="text-black">
                    <h1>BEACHES.</h1>
                    <li className="border-b">Home</li>
                    <li className="border-b">Destinations</li>
                    <li className="border-b">Travel</li>
                    <li className="border-b">View</li>
                    <li className="border-b">Book</li>
                    <div>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="flex justify-around py-4 px-4">
                        <FaFacebook className="icon"/>
                        <FaTwitter className="icon"/>
                        <FaInstagram className="icon"/>
                        <FaPinterest className="icon"/>
                        <FaYoutube className="icon"/>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;