import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalSearch from './ModalSearch';
import axios from 'axios';
import LoardingAnimate from './LoardingAnimate';

const Navbar = () => {
    const [modal, setmodal] = useState(false);
    const [data, setdata] = useState([]);
    const query = useRef()
    const [isLoading, setIsLoading] = useState(false);


    const getdata = async ()=>{
        setIsLoading(true);
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${query.current.value}?fullText=true`)
            setdata(res.data[0])
            setmodal(true)
        } catch (error) {
            alert("Revoyez l'orthographe du pays car il n' a pas été trouvé")
        }
        setIsLoading(false);        
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        getdata()
    }
    return (
        <nav className=' w-[100vw] h-[70px] flex items-center justify-between px-[100px] fixed z-10 top-0 bg-[#f4faf3]'>
            <span className=' text-[30px] text-gray-800 font-semibold'>World.</span>
            <ul className=' w-[350px] flex items-center justify-between'>
                <Link to={'/'} className=' text-gray-900'>Home</Link>
                <Link to={'/countries'} className=' text-gray-900'>Counties</Link>
                <form action="" method="get" onSubmit={handlesubmit}>
                    <input type="text" name="q" id="" placeholder=' Rechecher un pays...' className=' border-2 border-[gray] rounded-[25px] px-6 text-black' ref={query}/>
                </form>
            </ul>

            { 
                isLoading ? <LoardingAnimate/> :  modal && <ModalSearch data={data} closeModal={()=>{setmodal(false)}}/>
            }
        </nav>
    );
};

export default Navbar;