'use client'
import React, { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import Navbar from './(components)/Navbar';

export default function Home() {
  const [data, setData] = useState([]); 
  const [userName, setUserName] = useState('');

    
  const handleChange =  (e) => {
    setUserName(e.target.value);
  };
  const handleGet = async  () => {
        try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        alert('User not found'); 
        setUserName('')
        return
      }
      setUserName('')
      const userData = await response.json();
      setData([...data, userData]);
      setUserName('')
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = (username) =>{
    let userInfo = data.filter((item)=>{
      if(item.login !== username){
        return item
      }
    })
    setData(userInfo)
       
  }


  return (
    <>
      <Navbar />
        <div className='text-center mt-10'>
        <label>Write GitHub Username and get Data 🌎</label>
        <br />
        <br />
        <input
          onChange={handleChange}
          placeholder='Username'
          name='username'
          type="text"
          value={userName}
          className='lg:w-[50vh] md:w-[50vh] w-2/3 py-3 px-3 rounded-md focus:outline-blue-200'
        />
        <br />
        <button onClick={handleGet} className='w-[30vh] py-2 px-3 text-white font-bold bg-blue-700 rounded-md m-5'>Get Data</button>
      </div>

      <div className="flex flex-col m-10">
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
                      <th scope="col" className="px-6 py-4">Github</th>
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
                       <td>
                            <a href={userData.html_url} target='blank' className="whitespace-nowrap px-6 py-4">{userData.html_url}</a>
                        </td> 
                        <td className="whitespace-nowrap px-6 py-4">
                          <AiTwotoneDelete onClick={()=>{handleDelete(userData.login)}} className='text-3xl cursor-pointer text-red-600'/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
