import {BiSolidUserCircle} from 'react-icons/bi'
export default function Navbar() {
  return (
<header className="text-gray-600 body-font text-center mt-7">
    <div className="flex justify-center text-center title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <BiSolidUserCircle className=' text-center text-5xl text-blue-700'/>
      <span className="ml-3 font-bold text-blue-700 cursor-pointer text-3xl ">UserData</span>
    </div>
     <div>
    </div>
</header>
  )
}
