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
            navigationOptions={{
              navTypes: ['dots']
            }}
          >
            <div className='slider__home bg1'>
              <div className='flex justify-center items-center flex-col gap-[15px] md:max-w-[650px] w-full'>
                <h1 className='text-white text-[45px] font-semibold text-center' > منصة <span> الفكر العلمي  </span> </h1>
                <p  className='text-white text-[32px] font-medium text-center' > هي منصة تعليمية متطورة تهدف إلى تحسين وتطوير عملية التعليم </p>
                <Link href="" title="" className='bg-third-color-dark !text-white !py-[10px] !px-[45px] text-medium rounded-full'> المزيد </Link>
              </div>
            </div>
            <div className='slider__home bg2'>
              <div className='flex justify-center items-center flex-col gap-[15px] md:max-w-[650px] w-full'>
                <h1 className='text-white text-[45px] font-semibold text-center' > منصة <span> الفكر العلمي  </span> </h1>
                <p  className='text-white text-[32px] font-medium text-center' > هي منصة تعليمية متطورة تهدف إلى تحسين وتطوير عملية التعليم </p>
                <Link href="" title="" className='bg-third-color-dark !text-white !py-[10px] !px-[45px] text-medium rounded-full'> المزيد </Link>
              </div>
            </div>
            <div className='slider__home bg3'>
              <div className='flex justify-center items-center flex-col gap-[15px] md:max-w-[650px] w-full'>
                <h1 className='text-white text-[45px] font-semibold text-center' > منصة <span> الفكر العلمي  </span> </h1>
                <p  className='text-white text-[32px] font-medium text-center' > هي منصة تعليمية متطورة تهدف إلى تحسين وتطوير عملية التعليم </p>
                <Link href="" title="" className='bg-third-color-dark !text-white !py-[10px] !px-[45px] text-medium rounded-full'> المزيد </Link>
              </div>
            </div>

          </SliderContainer>
    // </section>
  )
}

export default HomeHeroSection