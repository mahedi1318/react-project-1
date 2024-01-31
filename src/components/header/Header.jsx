import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[80px] leading-[80px] bg-[#191919]'>
      <div className="container">
        <div className="flex justify-between">
            <div className="logo">
                <h1 className='font-poppins text-[30px] font-semibold text-[#92b514]'>MAHEDI</h1>
            </div>
            <div className="flex">
                <ul className=''>
                    <li className='inline-block ml-12 font-poppins text-base hover:text-[#0b6dff] transition-all'><a href="#">Home</a></li>
                    <li className='inline-block ml-12 font-poppins text-base hover:text-[#0b6dff] transition-all'><a href="#">Features</a></li>
                    <li className='inline-block ml-12 font-poppins text-base hover:text-[#0b6dff] transition-all'><a href="#">About Us</a></li>
                    <li className='inline-block ml-12 font-poppins text-base hover:text-[#0b6dff] transition-all'><a href="#">User</a></li>
                    <li className='inline-block ml-12 font-poppins text-base hover:text-[#0b6dff] transition-all'><a href="#">Team</a></li>
                    <li className='inline-block ml-12 font-poppins text-base hover:text-[#0b6dff] transition-all'><a href="#">Testimonials</a></li>
                    <li className='inline-block ml-12 font-poppins text-base hover:text-[#0b6dff] transition-all'><a href="#">Blog</a></li>
                </ul>     
                <div className="team">
                    <ul>
                        <li className='inline-block ml-12 font-poppins text-base bg-[#1c2029] py-4 px-6 rounded-lg hover:bg-[#0b6dff] transition-all'><a href="#">Sign Up</a></li>
                        <li className='inline-block ml-3 font-poppins text-base bg-[#1c2029] py-4 px-6 rounded-lg hover:bg-[#0b6dff] transition-all'><a href="#">Login</a></li>
                    </ul>
                </div>           
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
