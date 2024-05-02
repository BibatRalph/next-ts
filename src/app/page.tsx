import React from 'react';
import Link from 'next/link';

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
      <h1>Profile Page</h1>
      <Link href="/profile">Profile</Link>
      <br/>
      {fact}
    </>
  )
}