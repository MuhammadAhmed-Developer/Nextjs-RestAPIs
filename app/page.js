'use client'
import React, { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import Navbar from './(components)/Navbar';

export default function Home() {
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [userName, setUserName] = useState('');
  const [userName1, setUserName1] = useState([]);

  // var userName1=[]

  
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleGet =   () => {
    // console.log(userName);
     setUserName1( [...userName1,userName])
     

  // console.log(userName1);
    // try {
    //   const response = await fetch(`https://api.github.com/users/${userName}`);
    //   if (!response.ok) {
    //     alert('User not found'); 
    //     return// Handle error if user not found
    //   }
    //   const userData = await response.json();
    //   setData([userData]); // Convert the user data into an array and update data
    // } catch (error) {
    //   console.error(error.message);
    // }
  };


  return (
    <>
      <Navbar />
         {userName1.map((item,i)=>{
          return <div key={i} className='text-center'>{item}</div>
         })}
      <div className='text-center mt-10'>
        <label>Write GitHub Username and get Data 🌎</label>
        <br />
        <br />
        <input
          onChange={handleChange}
          placeholder='Username'
          name='username'
          type="text"
          className='w-1/4 py-3 px-3 rounded-md focus:outline-blue-200'
        />
        <br />
        <button onClick={handleGet} className='py-2 px-3 text-white font-bold bg-blue-700 rounded-md m-5'>Get Data</button>
      </div>

      {/* <div className="flex flex-col m-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">#</th>
                      <th scope="col" className="px-6 py-4">Name</th>
                      <th scope="col" className="px-6 py-4">Followers</th>
                      <th scope="col" className="px-6 py-4">Following</th>
                      <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((userData, i) => (
                      <tr key={i} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{i + 1}</td>
                        <td className="whitespace-nowrap px-6 py-4">{userData.login}</td>
                        <td className="whitespace-nowrap px-6 py-4">{userData.followers}</td>
                        <td className="whitespace-nowrap px-6 py-4">{userData.following}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <AiTwotoneDelete className='text-3xl cursor-pointer text-red-600'/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
