import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const SellwithUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };
    const { t, i18n } = useTranslation(); 

  return (
    <>
      {/* Main Section */}
      <div className='flex w-full'>
        {/* Left Section */}
        <div className='w-1/2 bg-gray-200 py-4 space-y-8 text-center pt-40 p-2'>
          <h1 className='text-8xl p-2 text-[#3087d1]'>{t("Sell With Slasa")}</h1>
          <p className='text-2xl'>{t("Grow Your business with the region's largest online retailer Slasa")}</p>
          <button className='!bg-[#3087d1] text-white px-6 py-3 rounded-lg'>{t("Contact Us")}</button>
        </div>
        {/* Right Section */}
        <div className='w-1/2'>
          <img src="Images/Slasa.gif" alt="Bedroom" className='object-cover w-full h-full' />
        </div>
      </div>

      {/* Full-Width Banner */}
      <div className='w-full py-10 text-center'>
        <img src="/Images/Sell.jpeg" alt="" className='w-full mt-[-10]' />
      </div>
      <div className='mt-5 px-40 text-center'>
        <p className='text-3xl'>{t("For over 25 years, Slasa has offered innovative and inspiring home products of high quality. Our online channels continue to provide an unmatched mix of styles to elevate all homes in the region.")}</p>
      </div>

      {/* Sell With Us Section */}
      <div className='mt-10 bg-gray-100 py-6 text-center'>
        <h2 className='text-4xl font-bold text-[#3087d1]'>{t("Sell with us:")}</h2>
        <p className='text-xl'>{t("250+ home categories")}</p>
        <div className="mt-6 px-10">
          <Slider {...settings}>
            <div className='text-center'><img src="Images/Exclusive.jpeg" alt="Storage" className='w-60 mx-auto rounded-lg' /><p className='mt-2'>{t("Storage")}</p></div>
            <div className='text-center'><img src="Images/Exclusive22.jpeg" alt="Dining Sets" className='w-60 mx-auto rounded-lg' /><p className='mt-2'>{t("Dining sets")}</p></div>
            <div className='text-center'><img src="Images/Exclusive28.jpeg" alt="Dinnerware" className='w-60 mx-auto rounded-lg' /><p className='mt-2'>{t("Dinnerware")}</p></div>
            <div className='text-center'><img src="Images/Exclusive5.jpeg" alt="Decor" className='w-60 mx-auto rounded-lg' /><p className='mt-2'>{t("Decor")}</p></div>
          </Slider>
        </div>
          {/* Additional Description */}
    
      </div>

      {/* Steps to Start Selling */}
      <div className='mt-10 text-center flex px-20 py-5'>
        <img src="Images/Market1.jpeg" alt="" />
      
           
      </div>
      <Footer/>

    
    </>
  );
};

export default SellwithUs;
