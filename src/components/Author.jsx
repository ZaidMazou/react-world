import React from 'react';

const Author = () => {
    return (
        <section className=' w-[100vw] h-[300px] flex items-center justify-center flex-col mb-[100px]'>
            <div className=' w-full h-auto pl-10'>
                <h3 className=' text-start text-[25px] text-gray-600'>À propos de moi</h3>
            </div>
            <div className=' w-[350px] h-[210px] bg-[#fff] rounded px-[20px] flex flex-col items-center justify-center pt-5'>
                <p className=' text-center text-[15px] text-gray-600 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repudiandae.</p>
                <div className=' w-full h-auto flex flex-row'>
                    <div className=' w-[60px] h-[60px] m-5'>
                        <img src="world/monde2.png" alt="" className=' w-full h-full object-cover rounded-[50%]'/>
                    </div>
                    <div className=' w-1/2 h-auto m-5'>
                        <h4 className=' text-[15px] font-bold'>MAZOU Zaid</h4>
                        <p className=' text-[11px]'>Dev web</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Author;