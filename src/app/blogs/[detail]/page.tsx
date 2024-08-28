'use client'
import React,{useState} from 'react'
import { usePathname } from 'next/navigation';
import { Data } from '@/utils/blogData/Data';
import { Parser } from 'html-to-react'

const Page = () => {
    const pathname = usePathname();
    const detail = pathname.split('/')[2];
    const index = Number(detail) - 1;
    if(index < 0 || index >= Data.length)
     return <div className=' flex h-[50vh] justify-center items-center'>
        <h1 className='text-4xl font-bold '>Blog Not Found</h1>
    </div>
    const blogDetail= Data[index];
    const htmlContent= blogDetail.content;

  return (
    <>
    <div className='w-full h-full flex justify-center items-center'>
      <div className='md:w-3/4 w-full  h-3/4 bg-white p-5 rounded-xl shadow-2xl'>
        <img src={blogDetail.image} alt="" className='w-full h-full max-h-[70vh] object-cover rounded-xl' />
        <h1 className='text-4xl font-bold mt-5'>{blogDetail.title}</h1>
        <hr />
        <p className='text-lg mt-5'>{blogDetail.description}</p>
        <div className='' >
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='mt-5'></div>
            {/* {Parser().parse(htmlContent)} */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Page