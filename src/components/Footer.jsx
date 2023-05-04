import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import { IoMdSchool } from "react-icons/io"
function Footer() {
    return (
        <div className='px-20 py-10 flex flex-col space-y-10 sm:space-y-0 sm:flex-row justify-between bg-[#100d25] mt-40 rounded-t-3xl'>
            <div className='flex space-x-10'>
                <img className='h-36 w-36 rounded-full p-2 border-[3px] border-[#915eff]' src="./aayush.jpg" alt="pp" />
                <div className='flex flex-col justify-center space-y-2'>
                    <h1 className='text-xl sm:text-4xl font-extrabold text-[#915eff]'>Aayush Yadav</h1>
                    <p className='text-xs sm:text-base font-light text-[#aaa6c3]'>Jaipur, Rajasthan</p>
                </div>

            </div>
            <div className='flex flex-col space-y-5 justify-center items-center'>
                <div className='text-white/50 flex justify-center items-center space-x-10 text-3xl'>
                    <a href='https://github.com/AayushDev-02'><AiFillGithub className='hover:text-white cursor-pointer' /></a>
                    <a href='https://www.linkedin.com/in/aayush-yadav-50ab55239/'><AiFillLinkedin className='hover:text-blue-600 cursor-pointer' /></a>
                    <a href='mailto:yadavaayush0202@gmail.com'><AiFillMail className='hover:text-red-600 cursor-pointer' /></a>
                    <a href='https://drive.google.com/file/d/1Dk9OMbP3ZMLF_ex6QtErBGd6eItz5V7e/view?usp=sharing'><IoMdSchool className='hover:text-green-500 cursor-pointer' /></a>
                </div>
                <div className='p-[0.5px] w-full rounded-full bg-[#915eff]'></div>
            </div>
        </div>
    )
}

export default Footer
