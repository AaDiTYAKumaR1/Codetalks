'use client'
import React from 'react';
import { Button } from '@mui/material';
import { Data } from '@/utils/blogData/Data';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const HomeCoverSection = () => {
  const router = useRouter();
  // console.log(Data)
  // const handleClick = (e:any) => {
  //   router.push(`/blogs/${e.target.index}`);
  // };
  return (
    <>
      <div className=' inline-block w-full'>
        <article className='flex  justify-start items-end mb-5 mx-5 relative h-[60vh] sm:h-[85vh] sm:mx-10'>
          <div className='z-10  w-full '  >

            <div className=' flex flex-col w-1/2 gap-2 lg:gap-10 ml-10 mb-10'>
              <div>
              <Link href='/blogs'>
                <Button variant='contained' className='bg-blue-500'>Start Reading</Button>
              </Link>
              </div>
              <h1 className='text-4xl sm:text-6xl font-bold text-white'>The Best Stories For You</h1>
              <p className='text-white text-lg sm:text-2xl'>Read and share ideas from independent voices, world-class publications, and experts from around the globe. Everyone's welcome.</p>
            </div>
          </div>
          <div className=' absolute top-2 bottom-0 left-0 right-0 w-full h-full   '>
            <img
              src="https://create-blog-with-nextjs.vercel.app/_next/image?url=%2Fblogs%2Fcharlesdeluvio-cZr2sgaxy3Q-unsplash.jpg&w=2048&q=75"
              alt=""
              className='absolute h-[100%] w-[100%] rounded-2xl'
            />
          </div>
        </article>
        <section className='w-full mt-16 sm:mt-24 md:mt-32 px-5 md:px-10 slx:px-32 h-[50vh]'>
          <h1 className='text-4xl sm:text-6xl font-bold   '>Latest Blogs</h1>
          <div className='mt-10 grid grid-cols-2 grid-rows-2 gap-6 px-5 md:px-10'>
           
            {Data.map((blog, index) => {
              return (
                <div key={index} className='bg-white rounded-xl p-5 shadow-2xl col-span-2 lg:col-span-1 scale-95 hover:scale-100 ease-in duration-500'>
                  <img src={blog.image} alt="" className='w-full  h-96  object-cover rounded-xl scale-95 hover:scale-100 ease-in duration-500' />
                  <h2 className='text-2xl font-bold mt-5'>{blog.title}</h2>
                  <p className='text-lg mt-5'>{blog.description}</p>
                  <Button variant='contained' className='mt-5' onClick={()=>router.push(`blogs/${blog.id}`)} >Read More</Button>
                </div>
              )
            })}
          </div>
           <h1>.</h1>
        </section>
      </div>

    </>
  )
}

export default HomeCoverSection