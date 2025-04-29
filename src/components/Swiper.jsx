import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CARD_DATA } from '../utils/helper';

const Card_Swiper = () => {
    return (
        <>
            <div className='max-lg:pb-[44px] pb-[30px]'>
                <div className="2xl:container">
                    <h2 className='text-[#00171F] font-normal text-5xl max-md:text-3xl leading-[52.8px] pb-4 text-center'>
                        Simple Steps to <span className='font-bold'>Switch</span>
                    </h2>
                    <p className='font-normal text-base text-[#4B4B4B] max-w-[610px] leading-[25.6px] mx-auto text-center pb-[58px] max-md:pb-10 max-md:mx-auto max-md:px-3'>
                        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
                    </p>
                    <div className="flex justify-center items-center py-10">
                        <div className="w-full max-w-[1440px]">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={4}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                    },
                                }}>
                                {CARD_DATA.map((item, index) => (
                                    <SwiperSlide>
                                        <div key={index} className="max-w-[360px] w-full mx-auto relative group transition-all duration-200 ease-linear overflow-hidden">
                                            <div className="flex gap-2 rotate-[270.5deg] absolute left-1/2 -translate-x-1/2 z-1 bottom-[250px] xl:bottom-[300px] group-hover:translate-y-[-900px] transition-all duration-200 ease-linear">
                                                <p className='font-family-primary whitespace-nowrap text-[#00171F] text-2xl xl:text-[32px] font-normal leading-[110%]'>{item.number}</p>
                                                <p className='font-family-primary whitespace-nowrap text-[#00171F] text-2xl xl:text-[32px] font-normal leading-[110%]'>{item.text}</p>
                                            </div>
                                            <img className='w-full ' src={item.img} alt={item.text} />
                                            <div className="absolute inset-0 translate-y-[0px] group-hover:translate-y-[-100%] opacity-94 bg-[#E8F6FD] transition-all duration-200 ease-linear"></div>
                                            <div className="bg-[#003459] p-4 sm:p-8 min-h-[217px] absolute bottom-0 group-hover:translate-y-0 transition-all duration-200 ease-linear translate-y-[105%] ">
                                                <div className="flex gap-2 mb-3.5">
                                                    <h2 className='font-family-primary font-normal text-[24px] md:text-[30px] leading-[110%] capitalize text-white'>{item.number}</h2>
                                                    <h3 className='font-family-primary font-normal text-[24px] md:text-[30px] leading-[110%] capitalize text-white'>{item.text}</h3>
                                                </div>
                                                <p className='font-family-primary text-base leading-[160%] text-white'>{item.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card_Swiper
