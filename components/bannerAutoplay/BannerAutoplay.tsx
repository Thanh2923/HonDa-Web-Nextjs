"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BannerAutoplay: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/logo.jpg"
            alt="Description of image"
            className="w-full h-auto"
            width={1300}
            height={700}
            objectFit="cover"  // Đảm bảo ảnh phủ đầy không gian mà không bị kéo giãn
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo.jpg"
            alt="Description of image"
            className="w-full h-auto"
            width={1300}
            height={700}
            objectFit="cover"  // Đảm bảo ảnh phủ đầy không gian mà không bị kéo giãn
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerAutoplay;
