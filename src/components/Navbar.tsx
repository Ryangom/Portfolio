import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { navData } from '../constrants/data';
import logo from '../assets/brand.png';
export default function Navbar() {
  const [isActive, setisActive] = useState(true);



  // 
  return (

    <nav className=" top-0 sticky bg-slate-800 text-white z-[1] ">
      <div className="container flex items-center justify-between py-2 px-4 sm:px-0 ">


        <div className=" w-[20%] sm:w-[12%] md:w-[5%]">
          <Link to="/" className="">
            <img src={logo} alt="" className='w-100%' />
          </Link>
        </div>

        <div>
          <ul className={`bg-gray-500 absolute left-0 top-24 flex flex-col items-center gap-3 p-4 w-full sm:flex-row sm:static sm:bg-transparent sm:flex ${isActive ? 'hidden' : 'block'}`}>
            {/* `text-whit p-2 hover:text-gray-400 font-medium tracking-wide` */}
            {
              navData.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  <NavLink to={item.path} className="text-whit p-2 hover:text-gray-400 font-medium tracking-wide">{item.name}</ NavLink>

                </li>
              ))
            }
          </ul>
        </div>

        <div className="sm:hidden">
          <div className=' text-3xl' onClick={() => setisActive(!isActive)}>
            {
              isActive ? <CiMenuFries className='text-3xl' /> : <IoMdClose className='text-3xl' />
            }
          </div>

        </div>
      </div>
    </nav >

  )
}


// <div className="glitch-wrapper">
//    <div className="glitch" data-text="Glitch Text">Glitch Text</div>
// </div>