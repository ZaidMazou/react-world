import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Card from './Card';

function Countries() {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>setdata(res.data))
    },[])
    return (
        <div className='countries-container'>
            <h1>Countries</h1>
            <ul>
                {
                    data.map((country,index)=> 
                    <Card key={index} country={country}/>
                    )
                }
            </ul>
        </div>
    );
}

export default Countries;

