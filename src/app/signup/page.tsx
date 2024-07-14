'use client'
import React, { useEffect } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = React.useState(false);
    const [diablesignup, setdisablesignup] = React.useState(true)
    const onSignup = async (e: any) => {
        e.preventDefault();
        console.log(user);
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:3000/api/users/signup', user)
            console.log('Signup Successfully',response.data);
            toast.success(response.data.message);
            router.push('/login');
        } catch (error:any) {
             console.log('Signup Failed',error.response.data.error);
            toast.error(error.response.data.error);
        }
       finally{
              setLoading(false);
       }

    }
    useEffect(() => {
        if (user.username && user.email && user.password) {
            setdisablesignup(false)
            // console.log('Signup Enabled');
        } else {
            setdisablesignup(true);
            // console.log('Signup Disabled');
        }
    }, [user.username, user.email, user.password])
    return (
        <div className=' flex min-h-screen items-center justify-center bg-gray-200'>
            <form onSubmit={onSignup} className=' bg-white p-10 rounded-xl shadow-2xl  w-96'>
                <h1 className=' font-bold text-2xl text-center mb-8'>
                 Signup
                </h1>
                <div className='mb-4'>
                    <label htmlFor='username' className='block text-sm font-medium text-gray-700'>Username</label>
                    <input type='text' id='username' name='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className='mt-1 p-2 w-full border border-gray-300 rounded-lg' />
                </div>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type='email' id='email' name='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className='mt-1 p-2 w-full border border-gray-300 rounded-lg' />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                    <input type='password' id='password' name='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className='mt-1 p-2 w-full border border-gray-300 rounded-lg' />
                </div>
                <button type='submit' disabled={diablesignup} className='bg-blue-500 text-white p-2 rounded-lg w-full'>
                   {loading ? 'Loading...' : 'Signup'}
                </button>
                <p className='mt-2 text-center'>
                    Already have an account? <Link href='/login'><span className='text-blue-500'>Login</span></Link>
                </p>
            </form>
        </div>
    )
}

