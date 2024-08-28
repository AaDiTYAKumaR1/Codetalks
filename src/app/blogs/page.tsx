'use client'
import React,{useState} from 'react'
import { Data } from '@/utils/blogData/Data';
import { category } from '@/utils/blogData/CategoryData';
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter();
  const [title, setTitle] = useState(category[0]);
  const handleCategory =(e:any)=>{
    setTitle(e.target.innerText);
  }
  return (
   <>
   <div className='mb-4 md:mb-12'>
    <div className='px-5 md:px-10 lg:px-32'>
    <h1 className='text-2xl lg:text-6xl font-semibold mt-6 md:text-4xl'>Blog Categories</h1>
    <p>Discover more category and expand knowledge</p>
    </div>
    <div className='px-0 md:px-10 mx-2 md:mx-10 py-4 md:py-8 border-b-2 border-t-2 border-black mt-4 md:mt-10'>
     {
      category.map((item, index)=>{
        return (
          <button className={`text-2xl px-4 md:px-6 md:py-4 py-2
          rounded-2xl mx-2 mt-2 md:mx-8 
           text-black  border-4 
          ${title === item ? 'bg-black text-white' : 'bg-white'}
          border-black`}
          onClick={handleCategory} key={index}
          >{item}</button>
        )
        })
     }
    </div>
    <h1 className='mx-4 md:ml-36 mt-8 md:mt-12  text-4xl  lg:text-6xl font-semibold md:font-bold'>{title}</h1>
   </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-5 md:px-10 lg:px-32'>
      {
        Data.map((blog, index)=>{
          if(title=='#all' || blog.category === title)
          return (
            <div key={index} className='bg-white rounded-xl p-5 shadow-2xl col-span-1 md:col-span-1 scale-95 hover:scale-100 ease-in duration-500'>
              <img src={blog.image} alt="" className='w-full  h-96  object-cover rounded-xl scale-95 hover:scale-100 ease-in duration-500' />
              <h2 className='text-2xl font-bold mt-5'>{blog.title}</h2>
              <p className='text-lg mt-5'>{blog.description}</p>
              <button className='bg-black text-white rounded-lg p-3 mt-5 hover:text-black hover:bg-white hover:border-black hover:border-2  ' onClick={()=>router.push(`blogs/${blog.id}`)} >Read More</button>
            </div>
          )
        })
      }
    </div>
   </>
   
  )
}

export default Page