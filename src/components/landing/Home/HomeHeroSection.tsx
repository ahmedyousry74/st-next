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
            <div className='slider__home' style={{
         backgroundImage: `url('../../../src/assets/images/university_1.jpg')`,
       }}>
              <h1 className='text-[48px] text-black'> Test </h1>
            </div>
            <div className='slider__home' style={{
         backgroundImage: `url('../../../src/assets/images/university_1.jpg')`,
       }}>
              <h1 className='text-[48px] text-black'> Test </h1>
            </div>
            <div className='slider__home' style={{
         backgroundImage: `url('../../../src/assets/images/university_1.jpg')`,
       }}>
              <h1 className='text-[48px] text-black'> Test </h1>
            </div>

          </SliderContainer>
    // </section>
  )
}

export default HomeHeroSection