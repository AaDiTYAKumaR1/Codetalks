'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Define a type for the news articles
interface NewsArticle {
  urlToImage: string;
  title: string;
  description: string;
  url: string;
}

const NewsSection = () => {
  const Router = useRouter();
  const [newsData, setNewsData] = useState<NewsArticle[]>([]); // Set the state type as an array of NewsArticle
  
  useEffect(() => {
    const newsHandle = async () => {
      try {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5fe990ad262f4531bc59db8aa6cdc054');
        setNewsData(res.data.articles); // Ensure that the API response matches the type
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    newsHandle();
  }, []);

  return (
    <div className='bg-slate-300'>
      <div className='pt-4 md:pt-10 '>
        <div className="p-4">
          <div className="border-2 border-black p-2 flex items-center justify-around">
            <h1 className="text-4xl sm:text-6xl font-semibold mx-4 md:mx-10 inline-block group">
              <span className="relative">
                Latest News
                <span className="absolute left-0 bottom-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </h1>
            <h1 className="inline-block group text-2xl mb-2 cursor-pointer" onClick={() => Router.push('/news')}>
              <span className="relative">
                View All
                <span className="absolute left-0 bottom-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </h1>
          </div>
        </div>
        <div className='px-4 md:px-16 lg:px-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 px-5 md:px-10 lg:px-32'>
            {newsData.map((news, index) => (
              index < 8 && index > 0 && news.urlToImage && (
                <div key={index} className='bg-white rounded-xl p-5 shadow-2xl col-span-1 md:col-span-1 scale-95 hover:scale-100 ease-in duration-500'>
                  <img src={news.urlToImage} alt="News Image" />
                  <h2 className='text-2xl font-bold mt-5'>{news.title}</h2>
                  <p className='text-lg mt-5'>{news.description}</p>
                  <button
                    className='bg-black text-white rounded-lg p-3 mt-5 hover:text-black hover:bg-white hover:border-black hover:border-2'
                    onClick={() => window.open(news.url)}
                  >
                    Read More
                  </button>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
