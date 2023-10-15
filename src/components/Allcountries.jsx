import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import CardDetail from './CardDetail';

const Allcountries = () => {
    const [data, setdata] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const recordPerPage = 9
    const lastindex = currentPage * recordPerPage
    const firsindex = lastindex - recordPerPage
   
    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get("https://restcountries.com/v3.1/all")
            setdata(response.data)
        }
        getData()
    },[])

    const records = data.slice(firsindex , lastindex)
    
    const npage = Math.ceil(data.length / recordPerPage)
    const numbres = [...Array(npage + 1).keys()].slice(1)

    const changePage = ({selected})=>{
        setcurrentPage(selected)
    }
    console.log(data);
    console.log(npage);
return (
        <section className=' w-[100vw] h-[110vh] flex items-center justify-center flex-col mt-[100px]'>
            <div className=' w-full h-auto flex items-center justify-center flex-wrap mb-28 mt-[100px]'>
                {
                    records.map((d,i)=>(
                        <CardDetail key={i} data={d}/>
                    ))
                }
            </div>
            <nav aria-label="Page navigation example" role='pagination' className=' mb-3'>
                <ReactPaginate
                    previousLabel = {" Previous "}
                    nextLabel={" Next "}
                    previousClassName={'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                    nextClassName={'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                    containerClassName={'inline-flex -space-x-px text-sm'}
                    pageLinkClassName={'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                    activeLinkClassName={'flex items-center justify-center px-4 h-10 text-blue-900 border border-gray-300 bg-blue-500 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-200 dark:text-white'}
                    pageCount={npage}
                    onPageChange={changePage}
                />
            </nav>
        </section>
    );
};

export default Allcountries;