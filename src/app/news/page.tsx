'use client'
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
const NewsPage = () => {
    const [newsData, setnewsData] = useState([]);
    const [page, setPage] = useState(1);
    const [indexLoading, setIndexLoading] = useState(8);
    const [loading, setLoading] = useState(false);
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            setIndexLoading(indexLoading + 8);
        }
    }, [inView]);
    //   const fetchMoreNews = async () => {
    //     console.log("fetching more news");
    //     const response = await fetch(`/api/news?page=${page + 1}`);
    //     const newData = await response.json();
    //     setnewsData([...newsData, ...newData]);
    //     setPage(page + 1);
    //   };
    useEffect(() => {
        const newsHandle = async () => {
           try
           {
            setLoading(true);
            const res = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5fe990ad262f4531bc59db8aa6cdc054');
            console.log(res.data);
            setnewsData(res.data.articles);
           }
              catch(error)
              {
                console.log(error);
              }
              finally{
                setLoading(false);
              }
        }
        newsHandle();
    }, [])
    return (
        loading ? <>
        <div className=' flex items-center justify-center h-screen'>
        <CircularProgress disableShrink  />
        </div>
        </> :
        <>
            <div className='px-2'>
                <h1 className=' md:text-6xl text-4xl  text-center py-4 font-semibold '>News</h1>
                <div className=' w-full'>
                </div>
                <div className='px-4 md:px-16 lg:px-16 '>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-5 md:px-10 lg:px-32'>
                      {
                newsData.map((news,index)=>{
                    return(
                        index<8 && index>0 && news.urlToImage &&
                        <div key={index} className='bg-white rounded-xl p-5 shadow-2xl col-span-1 md:col-span-1 scale-95 hover:scale-100 ease-in duration-500'>
                            <img src={news.urlToImage} alt="" className='w-full  h-96  object-cover rounded-xl scale-95 hover:scale-100 ease-in duration-500' />
                            <h2 className='text-2xl font-bold mt-5'>{news.title}</h2>
                            <p className='text-lg mt-5'>{news.description}</p>
                            <button className='bg-black text-white rounded-lg p-3 mt-5 hover:text-black hover:bg-white hover:border-black hover:border-2' onClick={()=>window.open(news.url)} >Read More</button>
                        </div>
                    )
                })  
            }      { newsData &&  newsData.map((news, index) => {
                            return (
                                news &&
                                indexLoading > index &&
                                index > 0 &&
                                news.urlToImage && (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-5 shadow-2xl col-span-1 md:col-span-1 scale-95 hover:scale-100 ease-in duration-500"
                                    >
                                        <img
                                            src={news.urlToImage}
                                            alt=""
                                            className="w-full h-96 object-cover rounded-xl scale-95 hover:scale-100 ease-in duration-500"
                                        />
                                        <h2 className="text-2xl font-bold mt-5">{news.title}</h2>
                                        <p className="text-lg mt-5">{news.description}</p>
                                        <button
                                            className="bg-black text-white rounded-lg p-3 mt-5 hover:text-black hover:bg-white hover:border-black hover:border-2"
                                            onClick={() => window.open(news.url)}
                                        >
                                            Read More
                                        </button>
                                    </div>
                                )
                            );
                        })} 
                         <div></div>
                    </div>
                    <div ref={ref} className="h-1" />
                </div>

            </div>
           {
             indexLoading < newsData.length &&
             <div className='bg-black h-20'>
                 
                     
                     <h1 className='text-white text-center'>Loading...</h1>
                 
             </div>
           }

        </>
        
    )
}

export default NewsPage