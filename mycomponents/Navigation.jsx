"use client";

import { useState, useEffect } from 'react'
export const Navigation = () => {
 
    
    return (
    <>
    <header>
      <nav >   
    
         <ul className="inline-block">
            <li className="inline-block p-4">
               <a href="/">Home</a>
            </li>
            <li className="inline-block p-4">
               <a href="/about">About</a>
            </li>
            <li className="inline-block p-4">
               <a href="/services">Services</a>
            </li>
            <li className="inline-block p-4">
               <a href="/contact">Contact</a>
            </li>
            </ul>
      </nav>
    </header>
    </>
    )
  }
