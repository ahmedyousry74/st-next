"use client"
import React from 'react'
import { SingleHero } from "../shared"

import right from '@/assets/images/check2.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
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
                <div className='bg-white card_shape relative border border-solid border-[#333] rounded-[8px] flex justify-start items-start flex-col gap-2 py-[16px] px-[28px]'>
                    <span className="shape_2 absolute top-0 right-0 sm:top-0 z-0 h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-third-color-dark transition-all duration-1000 opacity-0"></span>
                    <h5 className='text-second-color-dark text-[13px] font-normal'> UNIVERSITY & COLLEGE EDUCATORS </h5>
                    <h4 className='text-primary-color-dark text-[19px] font-semibold'> Empower your students’ success </h4>
                    <h6 className='text-second-color-dark text-[13px] font-medium'> We offer course materials, learning platforms, and resources catered to your subject area. </h6>
                    <hr />
                    <Link href="" title="" className='bg-primary-color-dark text-white text-[14px] font-medium !py-[8px] !px-[25px] flex justify-start items-start rounded-full' > استكشف المزيد </Link>
                </div>
                <div className='bg-white card_shape relative border border-solid border-[#333] rounded-[8px] flex justify-start items-start flex-col gap-2 py-[16px] px-[28px]'>
                    <span className="shape_2 absolute top-0 right-0 sm:top-0 z-0 h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-third-color-dark transition-all duration-1000 opacity-0"></span>
                    <h5 className='text-second-color-dark text-[13px] font-normal'> UNIVERSITY & COLLEGE EDUCATORS </h5>
                    <h4 className='text-primary-color-dark text-[19px] font-semibold'> Empower your students’ success </h4>
                    <h6 className='text-second-color-dark text-[13px] font-medium'> We offer course materials, learning platforms, and resources catered to your subject area. </h6>
                    <hr />
                    <Link href="" title="" className='bg-primary-color-dark text-white text-[14px] font-medium !py-[8px] !px-[25px] flex justify-start items-start rounded-full' > استكشف المزيد </Link>
                </div>
                <div className='bg-white card_shape relative border border-solid border-[#333] rounded-[8px] flex justify-start items-start flex-col gap-2 py-[16px] px-[28px]'>
                    <span className="shape_2 absolute top-0 right-0 sm:top-0 z-0 h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-third-color-dark transition-all duration-1000 opacity-0"></span>
                    <h5 className='text-second-color-dark text-[13px] font-normal'> UNIVERSITY & COLLEGE EDUCATORS </h5>
                    <h4 className='text-primary-color-dark text-[19px] font-semibold'> Empower your students’ success </h4>
                    <h6 className='text-second-color-dark text-[13px] font-medium'> We offer course materials, learning platforms, and resources catered to your subject area. </h6>
                    <hr />
                    <Link href="" title="" className='bg-primary-color-dark text-white text-[14px] font-medium !py-[8px] !px-[25px] flex justify-start items-start rounded-full' > استكشف المزيد </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homecards