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
            <div className="md:hidden">
                <AiOutlineMenu size={20}/>
            </div>
            <div>
                <ul>
                    <h1>BEACHES.</h1>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                    <div>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div>
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