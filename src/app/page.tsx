"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LikeButton from './components/like-button/page';


// async function getData() {
//   const res = await fetch('https://catfact.ninja/fact') 

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }
 
export default function Page() {

  // Get all as JSON

  // const data = await getData(); 
 
  // return <main>{JSON.stringify(data)}</main>; 

  // Using Destructure to get only specific field

  // const { fact } = await getData(); 
 
  const [text, setText] = useState('Section 1'); // Initial text state

  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById('section2');
      if (section2 && window.scrollY >= section2.offsetTop) {
        setText('Section 2');
      } else {
        setText('Section 1');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run only once on component mount

  return (
    <>
      {/* <div className="flex flex-col h-screen">
      <div className="flex-1 flex">
        <div className="w-1/2 bg-blue-100 p-4 rounded-l-lg relative">
          <p className="absolute bottom-4 text-xl text-black-800">Large Text</p>
          <p className="absolute bottom-10 text-xl text-black-800">Large Text</p>
        </div>
        <div className="w-1/2 bg-green-100 rounded-r-lg relative">
          <div className="w-full absolute bg-red-100 p-6 flex justify-center">
          </div>
        </div>
      </div>
      <div className="h-1/2 bg-red-100 p-4 flex justify-center">
        <p className="bottom-4 text-sm text-black-800">small text</p>
      </div>
    </div> */}
 <div className="App">
      <div id="section1" className="section">
        <h1>{text}</h1>
        {/* Content for section 1 */}
      </div>
      <div id="section2" className="section">
        {/* Content for section 2 */}
      </div>
    </div>

    </>                                                                                                             
  )
}