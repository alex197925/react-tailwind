import React from 'react';
import Island from '../assets/island.jpg';
import Island2 from '../assets/island2.jpg';
import Island3 from '../assets/island3.jpg';
import Island4 from '../assets/island4.jpg';
import Island5 from '../assets/island5.jpg';
import Island6 from '../assets/island6.jpg';


const Selects = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative">
                <img src={Island} alt=""/>
                <img src={Island2} alt=""/>
                <img src={Island3} alt=""/>
                <img src={Island4} alt=""/>
                <img src={Island5} alt=""/>
                <img src={Island6} alt=""/>
            </div>
        </div>
    );
};

export default Selects;