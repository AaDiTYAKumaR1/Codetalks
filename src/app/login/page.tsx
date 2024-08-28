'use client'
import React,{useState} from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Page = () => {
    const router =useRouter();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [diablesignup, setdisablesignup] = useState(true)
    const onSignin = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response= await axios.post('http://localhost:3000/api/users/login',user);
            // console.log('Login Successfully',response.data);
            toast.success(response.data.message);
            router.push('/');
        } catch (error:any) {
            console.log('Login Failed',error.response.data.error);
            toast.error(error.response.data.error);
        }
    }
  return (
         <div className=' flex min-h-screen items-center  justify-center bg-gray-200'>
            <form onSubmit={onSignin} className=' bg-white p-10 rounded-xl shadow-2xl w-96  '>
                <h1 className=' font-bold text-2xl text-center mb-8'>
                    {loading ? 'Loading...' : 'Login'}
                </h1>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type='email' id='email' name='email' value={user.email} required onChange={(e) => setUser({ ...user, email: e.target.value })} className='mt-1 p-2 w-full border border-gray-300 rounded-lg' />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                    <input type='password' id='password' name='password' value={user.password} required onChange={(e) => setUser({ ...user, password: e.target.value })} className='mt-1 p-2 w-full border border-gray-300 rounded-lg' />
                </div>
                <div className='mb-4'>
                    <button type='submit' className='bg-blue-500 text-white p-2 w-full rounded-lg mb-4' >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                    <p>
                        Dont have an account? <Link href='/signup'><span className='text-blue-500'>Signup</span></Link>
                    </p>
                </div>
            </form>

         </div>
  )
}

export default Page