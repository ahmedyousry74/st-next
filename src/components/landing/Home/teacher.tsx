"use client"
import React from 'react'
import { SingleHero } from "../shared"

import teacherImg from '@/assets/images/teacher.svg'

import right from '@/assets/images/check2.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import list from '@/assets/images/list.svg'
import Link from "next/link"



const Hometeacher = () => {



 
  return (

    <section className="py-12 teacher__section relative">
        <div className="md:px-[40px] px-[25px]">
            <div className='flex justify-center items-center flex-row md:gap-[40px] gap-[25px] lg:flex-nowrap flex-wrap'>
                <div className="features__one flex justify-center items-center flex-col gap-4 px-4">
                    <h2 className='text-white font-semibold text-[20px] text-center' > منصة الفكر العلمي للحلول التعليمية أعضاء هيئة التدريس لوحة تحكم </h2>
                    <Link href={'/teacher'} className="my-5">
                        <button className="bg-[#FEA71D] font-medium text-[17px] !py-[10px] !px-[35px] text-[#fff] rounded-full cursor-pointer "> اقرأ المزيد </button>
                    </Link>
                </div>
                <div className="features__two flex justify-center items-center flex-col gap-4 px-4">
                    <h2 className='text-white font-semibold text-[20px] text-center' > تقدم المنصة محتوى تعليمي للطلاب شامل يناسب جميع المستويات </h2>
                    <Link href={'/students'} className="my-5">
                        <button className="bg-[#FEA71D] font-medium text-[17px] !py-[10px] !px-[35px] text-[#fff] rounded-full cursor-pointer "> اقرأ المزيد </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hometeacher