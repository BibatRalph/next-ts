import React from 'react';

async function fetchData() {
  try {

    const res = await fetch('https://www.boredapi.com/api/activity');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return JSON.stringify(data);
  } catch (error) {
    console.error('Error fetching data:');
    throw error; 
  }
};

const FetchComponent = () => {

  var test = fetchData();

  return <>{test}</> ;

};

export default FetchComponent;