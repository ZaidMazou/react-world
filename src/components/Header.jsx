import React from 'react';
import { Carousel } from 'flowbite-react';

const Header = () => {
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
            <Carousel className=' w-full h-full'>
                <img src="world/1.png" alt="..." />
                <img src="world/1.png" alt="..." />
                <img src="world/1.png" alt="..." />
                <img src="world/1.png" alt="..." />
                <img src="world/1.png" alt="..." />
            </Carousel>
        </div>
    );
};

export default Header;