import React from 'react';

const Card = ({data}) => {
    return (
        <div className=' w-[350px] h-[450px] card flex flex-col m-4'>
            <div className=' w-full h-1/2'>
                {
                    data.flags ? <img src={data.flags.png} alt="" className=' w-full h-full object-cover'/> : <span></span>
                }
            </div>
            <div className=' w-full h-1/2 flex items-center justify-center bg-white'>
                {
                    data.name ?
                        <h3 className=' text-blue-500'>{data.name.official}</h3>
                    :
                        <span></span>
                }
            </div>
        </div>
    );
};

export default Card;