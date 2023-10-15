import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Benin = () => {
    const [state, setstate] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            const res = await axios.get('https://restcountries.com/v3.1/name/Benin')
            setstate(res.data[0])
        }
        getData()
    },[])
    return (
        <section className=' w-[100vw] h-[90vh] mt-[100px] flex flex-row mb-[100px]'>
            <div className=' w-1/2 h-full'>
                {
                    state.flags ? <img src={state.flags.png} alt="" className=' w-full h-full object-cover'/>: <span></span>
                }
            </div>
            <div className=' w-1/2 h-full flex items-center justify-center flex-col px-[80px] bg-white'>
                <h2 className=' text-gray-600 text-[32px]'>Bénin</h2>
                <div className=' w-[50px] h-[2px] bg-slate-400 mb-10'></div>
                <p className=' text-start p-5 text-gray-400'>
                Le Bénin, un pays d'Afrique de l'Ouest bordé par le Nigeria à l'est, le Niger au nord, le Burkina Faso au nord-ouest, le Togo à l'ouest et l'océan Atlantique au sud, est riche d'une histoire complexe et d'une culture diversifiée. Autrefois connu sous le nom de Dahomey, le Bénin abrite le royaume historique de ce nom, réputé pour ses femmes guerrières, les Amazones du Dahomey. Aujourd'hui, le Bénin est loué pour sa démocratie stable et son patrimoine culturel, notamment la ville d'Abomey, les parcs nationaux et Ouidah, un point central de la Route des esclaves. Sa capitale, Porto-Novo, et sa plus grande ville, Cotonou, sont des centres d'activité animés reflétant le dynamisme et l'hospitalité du peuple béninois.
                </p>
            </div>
        </section>
    );
};

export default Benin;