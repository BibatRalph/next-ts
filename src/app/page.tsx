import React from 'react';
import Link from 'next/link';
import LikeButton from './components/like-button/page';


async function getData() {
  const res = await fetch('https://catfact.ninja/fact') 

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {

  // Get all as JSON

  // const data = await getData(); 
 
  // return <main>{JSON.stringify(data)}</main>; 

  // Using Destructure to get only specific field

  const { fact } = await getData(); 
 
  return (
    <>
      {/* <h1>Home Page</h1> 
      <Link href="/profile">Go Profile</Link>
      <br/>
      {fact} 
      <LikeButton /> */}
        <div className="h-full overflow-y-auto bg-gray-100 flex justify-center items-center">
        <div className="max-w-lg w-full">
          {/* Content for the right side */}
          {/* Center-aligned content */}
        </div>
      </div>
    </>
  )
}