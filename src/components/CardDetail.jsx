import React from 'react';

const CardDetail = ({data}) => {
    return (
        <div className=' w-[30%] h-[200px] m-4'>
            {
                data.flags ? <img src={data.flags.png} alt="" />: <span></span>
            }
        </div>
    );
};

export default CardDetail;