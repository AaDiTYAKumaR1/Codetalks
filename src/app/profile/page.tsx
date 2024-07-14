'use client'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Avatar} from '@mui/material';

export default function page  () {
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
        
        console.log(user)
    // },[])
    if(!user){
        return(
            <p>Loading...</p>
        )
    }
  return (
    <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:w-[2/3] ">
        {/* <img
          src={Avatar}
          alt="Profile picture"
          className="w-24 h-24 rounded-full mb-4"
        /> */}
        <Avatar sx={{ bgcolor: 'deepOrange[500]' }}>N</Avatar>
        <h1 className="text-2xl font-bold mb-2">{user.username}</h1>
        <p className="text-gray-600 mb-4">{user.email}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </div>
  </div>
  )
}

