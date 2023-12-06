import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom'; // useLoaderData is a hook that returns the data returned by the loader function
export default function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/hacker123shiva')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="flex flex-col items-center text-center m-4 bg-gray-600 text-3xl p-4">
      <h1 className="h-10"> Github followers:{data.followers}</h1>
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hacker123shiva');
  return response.json();
};
