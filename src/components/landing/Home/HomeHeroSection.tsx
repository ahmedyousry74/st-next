"use client"

import React from 'react'
import asmImg from '@/assets/images/landing/slider_top_2.webp'
import { ButtonGhost, ButtonGradient } from "@/components/ui"
import Link from "next/link"
import { SingleHero } from "../shared"
import { RevealAnimation } from "@/components/shared"
import { HomeSingleDetail } from "@/services/types"
import { SliderContainer } from "@/libs/slider"
import { useLanguage } from "@/services/hooks"
import { useTranslations } from "next-intl";


const HomeHeroSection = ({ data }: { data: HomeSingleDetail[] }) => {
  const imagePath = '/assets/images/university_1.jpg';
  const imagePath2 = '/assets/images/university_2.jpg';
  const imagePath3 = '/assets/images/university_3.jpg';
  const { t } = useLanguage()

  return (
    // <section className="py-12 bg-[#fff]-50 bg-cover bg-center bg-no-repeat relative header__hero"

    //   style={{
    //     backgroundImage: `url(${data[0]?.image})`,
    //   }}
    // >

          <SliderContainer
            sliderOptions={{
              slidesPerView: 1,
              spaceBetween: 40,
              // centeredSlides: true,
              // centerInsufficientSlides: true,
              loop: true,
              autoplay: {
                delay: 3500,
                disableOnInteraction: false,
              },
            }}
          >
            
            <div className='slider__home bg1'>
                <RevealAnimation className='flex justify-start items-start md:px-[80px] px-[30px]'> 
              <div className='flex justify-start items-start flex-col gap-[15px] md:max-w-[650px] w-full'>
                <h1 className='text-white md:text-[45px] text-[32px] font-semibold' > منصة <span> الفكر العلمي  </span> </h1>
                <p  className='text-white md:text-[32px] text-[20px] font-medium' > هي منصة تعليمية متطورة تهدف إلى تحسين وتطوير عملية التعليم </p>
                <Link href="" title="" className='bg-third-color-dark !text-white !py-[10px] !px-[45px] text-medium rounded-full'> المزيد </Link>
              </div>
            </RevealAnimation>
            </div>
            <div className='slider__home bg2'>
              <RevealAnimation  className='flex justify-start items-start md:px-[80px] px-[30px]'>
              <div className='flex justify-start items-start flex-col gap-[15px] md:max-w-[650px] w-full'>
            
                <h1 className='text-white md:text-[45px] text-[32px] font-semibold' > منصة <span> الفكر العلمي  </span> </h1>
                <p  className='text-white md:text-[32px] text-[20px] font-medium' > هي منصة تعليمية متطورة تهدف إلى تحسين وتطوير عملية التعليم </p>
                <Link href="" title="" className='bg-third-color-dark !text-white !py-[10px] !px-[45px] text-medium rounded-full'> المزيد </Link>
              </div>
              </RevealAnimation>
            </div>
            <div className='slider__home bg3'>
              <RevealAnimation className='flex justify-start items-start md:px-[80px] px-[30px]'>
              <div className='flex justify-start items-start flex-col gap-[15px] md:max-w-[650px] w-full'>
              
                <h1 className='text-white md:text-[45px] text-[32px] font-semibold' > منصة <span> الفكر العلمي  </span> </h1>
                <p  className='text-white md:text-[32px] text-[20px] font-medium' > هي منصة تعليمية متطورة تهدف إلى تحسين وتطوير عملية التعليم </p>
                <Link href="" title="" className='bg-third-color-dark !text-white !py-[10px] !px-[45px] text-medium rounded-full'> المزيد </Link>
              </div>
              </RevealAnimation>
            </div>

          </SliderContainer>
    // </section>
  )
}

export default HomeHeroSection