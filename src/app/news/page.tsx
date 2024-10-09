'use client';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// Define the structure of a news article
interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const NewsPage = () => {
  const [newsData, setnewsData] = useState<NewsArticle[]>([]);
  const [page, setPage] = useState(1);
  const [indexLoading, setIndexLoading] = useState(8);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIndexLoading((prev) => prev + 8);
    }
  }, [inView]);

  useEffect(() => {
    const newsHandle = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5fe990ad262f4531bc59db8aa6cdc054'
        );
        setnewsData(res.data.articles);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    newsHandle();
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress disableShrink />
    </div>
  ) : (
    <>
      <div className="px-2">
        <h1 className="md:text-6xl text-4xl text-center py-4 font-semibold">
          News
        </h1>
        <div className="px-4 md:px-16 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-5 md:px-10 lg:px-32">
            {newsData.slice(0, 8).map((news, index) => (
              news?.urlToImage && (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-2xl col-span-1 md:col-span-1 scale-95 hover:scale-100 ease-in duration-500"
                >
                  <img
                    src={news?.urlToImage}
                    alt=""
                    className="w-full h-96 object-cover rounded-xl scale-95 hover:scale-100 ease-in duration-500"
                  />
                  <h2 className="text-2xl font-bold mt-5">{news?.title}</h2>
                  <p className="text-lg mt-5">{news?.description}</p>
                  <button
                    className="bg-black text-white rounded-lg p-3 mt-5 hover:text-black hover:bg-white hover:border-black hover:border-2"
                    onClick={() => window.open(news?.url)}
                  >
                    Read More
                  </button>
                </div>
              )
            ))}
            {newsData.map((news, index) => (
              indexLoading > index &&
              index > 0 &&
              news?.urlToImage && (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-2xl col-span-1 md:col-span-1 scale-95 hover:scale-100 ease-in duration-500"
                >
                  <img
                    src={news?.urlToImage}
                    alt=""
                    className="w-full h-96 object-cover rounded-xl scale-95 hover:scale-100 ease-in duration-500"
                  />
                  <h2 className="text-2xl font-bold mt-5">{news?.title}</h2>
                  <p className="text-lg mt-5">{news?.description}</p>
                  <button
                    className="bg-black text-white rounded-lg p-3 mt-5 hover:text-black hover:bg-white hover:border-black hover:border-2"
                    onClick={() => window.open(news?.url)}
                  >
                    Read More
                  </button>
                </div>
              )
            ))}
          </div>
          <div ref={ref} className="h-1" />
        </div>
      </div>
      {indexLoading < newsData.length && (
        <div className="bg-black h-20">
          <h1 className="text-white text-center">Loading...</h1>
        </div>
      )}
    </>
  );
};

export default NewsPage;
