import React from 'react';

const ModalSearch = ({data , closeModal}) => {
    console.log(data);
    const handleclick = () =>{
        closeModal()
    }
    return (
        <div className=' w-[100vw] h-[100vh] bg-[#0b0b0b3a] fixed inset-0 flex items-center justify-center'>
            <div className=' w-[90%] h-[90%] bg-white rounded-[15px] flex items-center justify-between'>
                <div className=' w-1/2 h-full px-[50px]'>
                    {
                        data.flags ? <img src={data.flags.png} alt="" className=' w-full h-full object-contain'/> : <span></span>
                    }
                </div>
                <div className=' w-1/2 h-full flex items-center justify-center flex-col px-[80px] bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg absolute right-28 top-16" viewBox="0 0 16 16" onClick={handleclick}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    <h2 className=' text-gray-600 text-[32px]'>{ data.name ? data.name.common : 'Pays'}</h2>
                    <div className=' w-[50px] h-[2px] bg-slate-400 mb-10'></div>
                    <p className=' text-start p-5 text-gray-400'>Surface: <span className=' text-red-500'>{data.area} km2</span></p>
                    <p className=' text-start p-5 text-gray-400'>Total Population: <span className=' text-red-500'> {data.population} de {data.demonyms.fra.m}</span></p>
                    <p className=' text-start p-5 text-gray-400'>Langue Officielle: <span className=' text-red-500'> {data.languages.fra} </span></p>
                    <p className=' text-start p-5 text-gray-400'>Capitale: <span className=' text-red-500'> {data.capital[0]} </span></p>
                    <p className=' text-start p-5 text-gray-400'>Continent: <span className=' text-red-500'> {data.continents} </span></p>
                </div>
            </div>
        </div>
    );
};

export default ModalSearch;