'use client'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Avatar} from '@mui/material';
import {CircularProgress} from '@mui/material';
import {useRouter} from 'next/navigation';
export default function page  () {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
        useEffect(() => {
            const getUser = async () => {
              try {
                setLoading(true);
                console.log('fetching user');
                const res = await axios.post('http://localhost:3000/api/users/me');
                console.log(res.data.data);
                setUser(res.data.data);
              } catch (error) {
                console.log(error);
              }
                setLoading(false);
            };
            getUser();  // Call the function only once
          }, []);  // Empty dependency array ensures this runs once after the initial render
        
        const handleLogout = async (e) => {
            try {
              e.preventDefault();
              await axios.post('http://localhost:3000/api/users/logout');
              setUser(null);
              router.push('/login');

            } catch (error) {
              console.log(error);
            }
          }
    // },[])
  

    return (
      loading ? <>
      <div className=' flex items-center justify-center h-screen'>
      <CircularProgress disableShrink  />
      </div>
      </> :
    <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100 ">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:w-[2/3] ">
        <Avatar sx={{ bgcolor: 'deepOrange[500]' }}>N</Avatar>
        <h1 className="text-2xl font-bold mb-2">{user?.username}</h1>
        <p className="text-gray-600 mb-4">{user?.email}</p>
        <button
          className="px-4 mb-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          onClick={handleLogout}
          >Log out</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </div>
  </div>
  )
}

