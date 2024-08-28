'use client'
import React, { useEffect, useRef ,useState } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link';
import axios from 'axios';


const Navbar = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const getUser = async () => {
            try {
                console.log('fetching user')
                const res = await axios.get('http://localhost:3000/api/users/me');
                console.log(res.data.data)
                setUser(res.data.data)
            } catch (error) {
                console.log(error)
            }
            if(!user)
            getUser();
            // return () =>{
            //     setUser(null)
            // }
        }
        
    },[])

    const navRef = useRef(null)
    const btnRef = useRef(null)
    return (
        <nav ref={navRef} className='nav bg-yellow-500  '>
            <div className='main-container max-w-7xl px-5 mx-auto flex items-center justify-between h-full w-full gap-x-6'>

                <div>
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/profile-img.png"
                            alt="medium"
                            width={96}
                            height={48}
                            className="cursor-pointer rounded-lg border-2 border-black p-1 "
                        />
                        <h2 className="text-2xl md:text-4xl font-bold">CodeTalks</h2>
                    </Link>
                </div>


                <div>
                    <ul className='flex items-center gap-x-5'>
                        <li>
                            <Link href='/' className='hidden md:list-item text-xl hover:bg-black hover:text-white p-4 '>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/blogs' className='hidden md:list-item text-xl hover:bg-black hover:text-white p-4 '>
                                blog
                            </Link>
                        </li>
                        <li>
                            <Link href='/news' className='hidden sm:list-item text-xl hover:bg-black hover:text-white p-4 m'>
                                News
                            </Link>
                        </li>
                        <li>
                            <Link href='/newBlog' className='hidden md:list-item text-xl hover:bg-black hover:text-white p-4 '>
                                Write
                            </Link>
                        </li>
                       
                        <li>
                            <Link href='/profile'>
                                <button ref={btnRef} className='btn-rounded-sm text-xl hover:bg-black hover:text-white p-4  '>
                                    Profile
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar