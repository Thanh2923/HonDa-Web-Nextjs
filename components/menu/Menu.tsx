"use client"
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from "react-icons/ai"
import { useEffect, useState } from 'react';
const Menu: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isShowForm,setIsShowForm] = useState<boolean>(false)
    const handleShowForm = ()=>{
        setIsShowForm(true)
        if(isShowForm ===true){
            setIsShowForm(false)
        }
    }
    

    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
        };
    
        // Sử dụng passive listener để tối ưu hóa hiệu suất cuộn
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      console.log(scrollPosition)
  return (
    <div className={` ${scrollPosition > 50 ? "fixed top-0 left-0 bg-black w-full" : "w-[90%]"}  lg:py-5  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2`}>
          <div className='logo lg:justify-center motion-preset-oscillate motion-duration-2000 justify-between items-center py-2 lg:py-0 flex'>
            <Image
            src="/images/DV13.png" 
            alt="Description of image"    
            width={230}                    // Đảm bảo kích thước gốc phù hợp
            height={60}                   // Giữ tỷ lệ đúng với kích thước gốc
            layout="intrinsic"              // Duy trì tỷ lệ của ảnh gốc
            objectFit="contain"            // Đảm bảo ảnh không bị kéo giãn
          />
            <AiOutlineMenu onClick={handleShowForm} className='text-white  cursor-pointer font-bold text-3xl lg:hidden' />
         
            </div>
          {isShowForm && <>
            <div className='menu motion-preset-slide-right   lg:hidden w-full  bg-white   '>
                <ul className=' text-white items-center w-[80%] px-5 py-3 uppercase font-bold  '>
                  <li className='py-2 relative '><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-black  before:transition-all before:duration-300 text-black ' href="/home">Trang Chủ</Link></li>
                  <li className='py-2 relative '><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-black  before:transition-all before:duration-300 text-black ' href="/dashboard">Giới thiệu</Link></li>
                  <li className='py-2 relative  '><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-black  before:transition-all before:duration-300 text-black ' href="/dashboard">Sản phẩm</Link></li>
                  <li className='py-2 relative  '><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-black  before:transition-all before:duration-300 text-black ' href="/dashboard">Tin tức </Link></li>
                  <li className='py-2 relative  '><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-black  before:transition-all before:duration-300 text-black ' href="/dashboard">Liên hệ</Link></li>
                </ul>
            </div>
          </>}
          
            <div className='menu hidden lg:block w-full flex justify-center  '>
                <ul className='flex text-white items-center w-[80%] uppercase font-bold justify-between '>
                  <li className='py-2 relative'><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 ' href="/home">Trang Chủ</Link></li>
                  <li className='py-2 relative'><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 ' href="/dashboard">Giới thiệu</Link></li>
                  <li className='py-2 relative '><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 ' href="/dashboard">Sản phẩm</Link></li>
                  <li className='py-2 relative '><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 ' href="/dashboard">Tin tức </Link></li>
                  <li className='py-2 relative '><Link className='text-[14px] hover:before:w-full before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 ' href="/dashboard">Liên hệ</Link></li>
                </ul>
            </div>
          </div>
  )
}

export default Menu
