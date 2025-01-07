import Image from 'next/image';
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt, FaPhone,FaFacebookF,FaTwitter ,FaInstagram,FaYoutube} from "react-icons/fa";

import Menu from '../menu/Menu';
const Header: React.FC = () => {
  return (
    <header className='relative w-full h-auto' >
     <div className='w-full h-auto flex justify-center items-center'>
      <div className='w-full bg-gray-900 lg:bg-transparent lg:absolute top-0 left-3'>
      <div className='grid justify-center  grid-cols-1 w-[90%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
         <div className='flex  animotion-left-to-right   flex-col lg:flex-row-reverse  justify-center gap-2 text-[14px] text-white py-3 items-center'>
<div className='flex gap-2 items-center'>
<CgMail />
<h3> contact@demo.com </h3>
</div>
          <div className='flex gap-2 items-center'>
          <FaMapMarkerAlt/>
          <h3>Số 123 Đường Phan Chu Trinh, Quận 10, TP.HCM</h3>
          </div>
         </div>
         <div className='flex lg:justify-end justify-center gap-2 text-[14px] text-white py-3 items-center'>
          < FaPhone />
          <h3> 0931247957 </h3>
         <FaFacebookF/>
         <FaTwitter/>
         <FaInstagram/>
         <FaYoutube/>
         </div>
      </div>
       <hr />
       <Menu/>
      </div>
    
     
     </div>
    
      
      <Image
        src="/images/logo.jpg" 
        alt="Description of image"    
        className='w-full h-auto'
        width={1300}                    // Đảm bảo kích thước gốc phù hợp
        height={700}                   // Giữ tỷ lệ đúng với kích thước gốc
        layout="intrinsic"              // Duy trì tỷ lệ của ảnh gốc
        objectFit="contain"            // Đảm bảo ảnh không bị kéo giãn
      />
    </header>


  )
}

export default Header;
