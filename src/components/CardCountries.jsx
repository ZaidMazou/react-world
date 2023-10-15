import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const CardCountries = () => {
    const [Benin, setbenin] = useState([]);
    const [Togo, settogo] = useState([]);
    const [Nigeria, setnigeria] = useState([]);
    useEffect(() => {
        const getBeninData = async () => {
            const response = await axios.get('https://restcountries.com/v3.1/name/Benin');
            setbenin(response.data[0]);
        }

        const getTogoData = async () => {
            const response = await axios.get('https://restcountries.com/v3.1/name/Togo');
            settogo(response.data[0]);
        }

        const getNigeriaData = async () => {
            const response = await axios.get('https://restcountries.com/v3.1/name/Nigeria');
            setnigeria(response.data[0]);
        }

        getBeninData();
        getTogoData();
        getNigeriaData();
    }, []);
    return (
        <section className=' w-[100vw] h-[70vh] mt-[70px] p-[10px] flex flex-col items-center justify-center mb-[250px]'>
            <div className=' p-[30px] '>
                <h2 className=' text-[30px]'>MON BEAU PAYS</h2>
                <span className=' w-20 h-[1px] bg-black'></span>
            </div>
            <div className=' w-full h-[500px] flex items-center justify-center'>
                <Card data = {Benin}/>
                <Card data = {Togo}/>
                <Card data = {Nigeria}/>
            </div>
        </section>
    );
};

export default CardCountries;