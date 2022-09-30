import React from 'react';
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import KeyWest from '../assets/keywest.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import SelectsCard from "./SelectsCard";


const Selects = () => {
    return (
        <div className="'max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectsCard bg={BoraBora} text='BoraBora'/>
            <SelectsCard bg={BoraBora2} text='Maldives'/>
            <SelectsCard bg={KeyWest} text='Key West'/>
            <SelectsCard bg={Maldives} text='Thailand'/>
            <SelectsCard bg={Maldives2} text='Malaysia'/>
            <SelectsCard bg={BoraBora2} text='Maldives'/>
        </div>
    );
};

export default Selects;