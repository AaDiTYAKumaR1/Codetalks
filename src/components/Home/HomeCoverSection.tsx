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
    <div className=' bg-slate-300'>
      <div className=' inline-block w-full'>
        <article className='flex  justify-start items-end mb-5 mx-5 relative h-[60vh] sm:h-[85vh] sm:mx-10'>
          <div className='z-10  w-full '  >

            <div className=' flex flex-col w-1/2 gap-2 lg:gap-10 ml-10 mb-10'>
              <div>
              <Link href='/blogs'>
              <button className='bg-black text-white rounded-lg px-12 md:px-24 border-2 border-black py-4 text-2xl rounded-3xl   mt-5 hover:text-black hover:bg-white hover:border-black hover:border-2'>Read More</button>
                {/* <Button variant='contained' className='bg-blue-500'>Start Reading</Button> */}
              </Link>
              </div>
              <h1 className='text-4xl sm:text-6xl font-bold text-white'>The Best Stories For You</h1>
              <p className='text-white text-lg sm:text-2xl'>Read and share ideas from independent voices, world-class publications, and experts from around the globe. Everyone welcome.</p>
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
        <div className=" p-4">
      {/* <div className="border-2 border-gray-300 p-2 flex items-center justify-around ">
        <h1 className="text-4xl sm:text-6xl font-semibold mx-4 md:mx-10 inline-block">News Section</h1>
        <h1 className="inline-block underline underline-offset-2 text-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" onClick={()=>Router.push('/news')} >View All</h1>
      </div> */}
        <div className="border-2 border-black p-2 flex items-center justify-around">
        <h1 className="text-4xl sm:text-6xl font-semibold mx-4 md:mx-10 inline-block group">
          <span className="relative">
            Latest Blogs
            <span className="absolute left-0 bottom-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </span>
        </h1>
        <h1 className="inline-block group text-2xl mb-2 cursor-pointer" onClick={()=>router.push('/blogs')} >
          <span className="relative">
            View All
            <span className="absolute left-0 bottom-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </span>
        </h1>
      </div>
    </div>
          <div className='mt-10 grid grid-cols-2 grid-rows-2 gap-6 px-5 md:px-10 '>
           
            {Data.map((blog, index) => {
              return (
                <div key={index} className='bg-white rounded-xl p-5 shadow-2xl col-span-2 lg:col-span-1 scale-95 hover:scale-100 ease-in duration-500'>
                  <img src={blog.image} alt="" className='w-full  h-96  object-cover rounded-xl scale-95 hover:scale-100 ease-in duration-500' />
                  <h2 className='text-2xl font-bold mt-5'>{blog.title}</h2>
                  <p className='text-lg mt-5'>{blog.description}</p>
                  {/* <Button variant='contained' className='mt-5' >Read More</Button> */}
                  <button className='bg-black text-white rounded-lg p-3 mt-5 hover:text-black hover:bg-white hover:border-black hover:border-2'  onClick={()=>router.push(`blogs/${blog.id}`)}>Read More</button>
                </div>
              )
            })}
          </div>
           <h1>.</h1>
        </section>
      </div>

    </div>
  )
}

export default HomeCoverSection