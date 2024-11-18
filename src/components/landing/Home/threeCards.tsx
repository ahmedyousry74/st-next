"use client"
import React from 'react'
import { SingleHero } from "../shared"

import right from '@/assets/images/check2.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
import image1 from '@/assets/images/icons8-ai-50.png'
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import list from '@/assets/images/list.svg'
import Link from "next/link"



const Homecards = () => {



 
  return (

    <section className="py-12 cards__section relative bg-primary-color-dark">
        <div className="container">
            <div className='flex justify-between items-center flex-row md:gap-[40px] gap-[25px] lg:flex-nowrap flex-wrap'>
                <RevealAnimation>
                    <div className='bg-white card_shape relative border border-solid border-[#333] rounded-[8px] flex justify-start items-start flex-col gap-2 py-[16px] px-[28px]'>
                        <span className="shape_2 absolute top-0 right-0 sm:top-0 z-0 h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-third-color-dark transition-all duration-1000 opacity-0"></span>
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4V21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4V21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h4 className='text-primary-color-dark text-[19px] font-semibold'> المكتبة الرقمية  </h4>
                        <h6 className='text-second-color-dark text-[13px] font-medium'> المكتبة التفاعلية هي مساحة رقمية حديثة تجمع بين التكنولوجيا والقراءة التقليدية </h6>
                        <hr />
                        <Link href="" title="" className='bg-primary-color-dark text-white text-[14px] font-medium !py-[8px] !px-[25px] flex justify-start items-start rounded-full' > استكشف المزيد </Link>
                    </div>
                </RevealAnimation>
                <RevealAnimation>
                    <div className='bg-white card_shape relative border border-solid border-[#333] rounded-[8px] flex justify-start items-start flex-col gap-2 py-[16px] px-[28px]'>
                        <span className="shape_2 absolute top-0 right-0 sm:top-0 z-0 h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-third-color-dark transition-all duration-1000 opacity-0"></span>
                        <Image src={image1} alt='iamge' />
                        <h4 className='text-primary-color-dark text-[19px] font-semibold'> القارئ الذكي </h4>
                        <h6 className='text-second-color-dark text-[13px] font-medium'>             لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة                     </h6>
                        <hr />
                        <Link href="" title="" className='bg-primary-color-dark text-white text-[14px] font-medium !py-[8px] !px-[25px] flex justify-start items-start rounded-full' > استكشف المزيد </Link>
                    </div>
                </RevealAnimation>
                <RevealAnimation>
                    <div className='bg-white card_shape relative border border-solid border-[#333] rounded-[8px] flex justify-start items-start flex-col gap-2 py-[16px] px-[28px]'>
                        <span className="shape_2 absolute top-0 right-0 sm:top-0 z-0 h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-third-color-dark transition-all duration-1000 opacity-0"></span>
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 3.29077C16.9659 3.88416 18 5.32132 18 7.00001M11.9999 21.5L14.025 21.095C14.2015 21.0597 14.2898 21.042 14.3721 21.0098C14.4452 20.9811 14.5147 20.9439 14.579 20.899C14.6516 20.8484 14.7152 20.7848 14.8426 20.6575L21.5 14.0001C22.0524 13.4478 22.0524 12.5523 21.5 12C20.9477 11.4477 20.0523 11.4477 19.5 12L12.8425 18.6575C12.7152 18.7848 12.6516 18.8485 12.601 18.921C12.5561 18.9854 12.5189 19.0548 12.4903 19.1279C12.458 19.2102 12.4403 19.2984 12.405 19.475L11.9999 21.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h4 className='text-primary-color-dark text-[19px] font-semibold'> الناشر </h4>
                        <h6 className='text-second-color-dark text-[13px] font-medium'> توفر منصة الفكر العالمي للحلول التعليمية للناشرين والمؤلفين الأدوات اللازمة </h6>
                        <hr />
                        <Link href="" title="" className='bg-primary-color-dark text-white text-[14px] font-medium !py-[8px] !px-[25px] flex justify-start items-start rounded-full' > استكشف المزيد </Link>
                    </div>
                </RevealAnimation>
            </div>
        </div>
    </section>
  )
}

export default Homecards