import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { RiLinkedinFill } from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { RxDoubleArrowUp } from 'react-icons/rx'
import { Link } from "react-scroll";


function Footer() {
  return (
    <div className='flex flex-col bg-[#20262E]  gap-4 justify-center'>
    <div className='flex justify-center'>
    <Link to="component5">
    <RxDoubleArrowUp className='text-[#ffffff] w-[50px] h-[50px] bg-[#e31b6d] mt-[-25px] p-2'/>
    </Link>
    </div>
        <div className='bg-[#20262E] flex  gap-4 justify-center pt-[5rem]'>
        <a href="https://github.com/Gladys-Luke" target={'_blank'} rel={'noreferrer'}>
        <BsGithub className='p-4 w-[50px] h-[50px] bg-[#000000] text-[#ffffff] hover:bg-[#16A596]'/>  </a>
        <a href="https://www.linkedin.com/in/luke-gladys-13216717b/" target={'_blank'} rel={'noreferrer'}>
        <RiLinkedinFill className='p-4 w-[50px] h-[50px] bg-[#000000] text-[#ffffff] hover:bg-[#16A596]'/>  </a>
        <a href="https://twitter.com/lukegladys3" target={'_blank'} rel={'noreferrer'}>
        <FaTwitter className='p-4 w-[50px] h-[50px] bg-[#000000] text-[#ffffff] hover:bg-[#16A596]'/>  </a>
          
        <a href="https://www.instagram.com/my_name_is_yachat/" target={'_blank'} rel={'noreferrer'}>
        <ImInstagram className='p-4 w-[50px] h-[50px] bg-[#000000] text-[#ffffff] hover:bg-[#16A596]'/>  </a>
          
          
        </div>
        <div className='flex  gap-4 justify-center'>
            <h1>GLADYS LUKE <span className='text-[#16A596]'>©2023</span></h1>
        </div>
    </div>
  )
}

export default Footer