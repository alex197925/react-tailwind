import React from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaFacebook, FaYoutube, FaPinterest, FaInstagram, FaTwitter} from 'react-icons/fa';


const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-20 px-2">
            <div><h1>BEACHES.</h1></div>
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
                <BiSearch size={20}/>
                <BsPerson size={20}/>
            </div>

            {/*Hamburger*/}
            <div className="md:hidden">
                <AiOutlineMenu size={20}/>
            </div>

            {/*Mobile menu dropdown*/}
            <div className="absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col">
                <ul>
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