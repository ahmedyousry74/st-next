"use client"
import { RevealAnimation } from "@/components/shared"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from 'swiper/types';
import '@/assets/styles/swiper.css'
import { SliderContainer } from "@/libs/slider"
import { SCREEN_SIZES } from "@/services/theme"
import Image from "next/image"

import bgImg from '@/assets/images/landing/home-library-bg.png'
import search from '@/assets/images/search.png'
import text from '@/assets/images/text.png'
import ai from '@/assets/images/ai.png'
import mobile from '@/assets/images/phone.png'
import book from '@/assets/images/book.png'
import ux from '@/assets/images/ux.png'
import shape from '@/assets/images/hero_shape.png'
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { NextImage } from "@/components/shared";


const data = [
  {
    title: ' واجهة مستخدم سهلة الاستخدام ' , 
    desc: ' تصميم المكتبة يعتمد على واجهة بديهية تسهل على المستخدمين البحث عن الكتب، تصفحها، وتنزيلها أو قراءتها مباشرة عبر الإنترنت ' 
  },
  {
    title: ' التفاعل مع النصوص ',
    desc: ' يمكن للمستخدمين تظليل النصوص المهمة، إضافة ملاحظات، وعمل إشارات مرجعية للعودة إلى النقاط الهامة لاحقاً. بعض المكتبات التفاعلية تتيح أيضاً إمكانية المشاركة والتعليق على الكتب مع مستخدمين آخرين. '
  },
  {
    title: ' محركات بحث متقدم '  ,
    desc: ' توفر المكتبة أدوات بحث متقدمة تمكن المستخدمين من العثور على الكتب باستخدام كلمات مفتاحية، أسماء المؤلفين، أو الموضوعات '
  },
  {
    title: ' التوصيات المخصصة  ',
    desc: ' تعتمد المكتبة على تقنيات الذكاء الاصطناعي لتقديم توصيات مخصصة لكل مستخدم بناءً على اهتماماتهم وقراءاتهم السابقة '
  },
  {
    title: ' قراءة اجتماعية ' ,
    desc: ' يمكن للمستخدمين الانضمام إلى مجموعات قراءة، مناقشة الكتب مع الأعضاء الآخرين، والمشاركة في فعاليات وورش عمل ذات صلة. '
  },
  {
    title: ' توافق مع الأجهزة المختلفة ',
    desc: ' المكتبة التفاعلية عادةً ما تكون متاحة عبر مختلف الأجهزة مثل الحواسيب، الهواتف الذكية، والأجهزة اللوحية، مما يسمح للمستخدمين بالوصول إلى كتبهم في أي وقت وأي مكان. '
  },
]

const HomeLibraryNum = ({ data }: { data: HomeSingleDetailsSection }) => {


  return (
    // <section className="dark hidden">
    //   <RevealAnimation>
    //     <div className="relative" >
    //       <div className="  h-[100%] w-full absolute -z-10">

    //         <div className="bg-cover h-full w-full " style={{
    //           backgroundImage: `url(${bgImg.src})`,
    //         }}>
    //           <div className="w-full h-full !bg-[#393939bf]">
    //           </div>
    //         </div>
    //       </div>
    //       <div className=" py-12   ">
    //         <div className="container dark ">
    //           <div className="text-center">
    //             <div className="text-lg ">
    //               <span className="  py-3 px-10 bg-white text-[30px] text-primary rounded-full font-bold inline-block  ">
    //                 {data?.main_section?.title}
    //               </span>
    //             </div>

    //             <div className="text-white mt-6 font-medium"

    //               dangerouslySetInnerHTML={{ __html: data?.main_section?.details || '' }}
    //             />


    //           </div>

    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6  mt-8 lg:mt-10">

    //             {data?.items?.data.map((item, index) => (
    //               <div key={index} className="bg-[#553ddd82] p-4 lg:py-6 text-center text-white rounded-md shadow-md">
    //                 <h4 className="text-lg font-bold mb-2 text-white">
    //                   {item?.title}
    //                 </h4>
    //                 <p className="opacity-90 text-white" >{item.details}
    //                   {item?.details}
    //                 </p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </RevealAnimation>
    // </section>
    <section className="library__num sm:py-[80px] py-[50px] lg:!px-[130px] px-[25px] bg-primary-color-dark relative">
      <div className="flex justify-start items-start flex-col gap-1 pb-5 border-b !border-[#f4f4f44f] md:max-w-[650px]">
        <h1 className="text-white font-bold text-[36px]"> المكتبة الرقمية </h1>
        <p className="text-white text-[16px] font-normal leading-[1.9]"> {data?.main_section?.details} </p>
      </div>
      <div className="mt-16 grid grid-cols-12 pb-16 border-b !border-[#f4f4f44f] ">
        <div className="col-span-12 md:col-span-4">
          <div className="library__item flex justify-start items-start flex-col gap-3">
            <Image src={ux} alt="search" className="w-[50px] h-[50px]" />
            <h4 className="text-white font-semibold text-[22px]"> واجهة مستخدم سهلة الاستخدام  </h4>
            <span className="text-white font-normal text-[15px]"> تصميم المكتبة يعتمد على واجهة بديهية تسهل على المستخدمين البحث عن الكتب، تصفحها، وتنزيلها أو قراءتها مباشرة عبر الإنترنت  </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="library__item flex justify-start items-start flex-col gap-3">
            <Image src={text} alt="search" className="w-[50px] h-[50px]" />
            <h4 className="text-white font-semibold text-[22px]"> التفاعل مع النصوص  </h4>
            <span className="text-white font-normal text-[15px]">  يمكن للمستخدمين تظليل النصوص المهمة، إضافة ملاحظات، وعمل إشارات مرجعية للعودة إلى النقاط الهامة لاحقاً. بعض المكتبات التفاعلية تتيح أيضاً إمكانية المشاركة والتعليق على الكتب مع مستخدمين آخرين. </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="library__item flex justify-start items-start flex-col gap-3">
            <Image src={search} alt="search" className="w-[50px] h-[50px]" />
            <h4 className="text-white font-semibold text-[22px]"> محركات بحث متقدم  </h4>
            <span className="text-white font-normal text-[15px]">  توفر المكتبة أدوات بحث متقدمة تمكن المستخدمين من العثور على الكتب باستخدام كلمات مفتاحية، أسماء المؤلفين، أو الموضوعات  </span>
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-12 pb-5">
        <div className="col-span-12 md:col-span-4">
          <div className="library__item flex justify-start items-start flex-col gap-3">
            <Image src={ai} alt="search" className="w-[50px] h-[50px]" />
            <h4 className="text-white font-semibold text-[22px]"> التوصيات المخصصة  </h4>
            <span className="text-white font-normal text-[15px]"> تعتمد المكتبة على تقنيات الذكاء الاصطناعي لتقديم توصيات مخصصة لكل مستخدم بناءً على اهتماماتهم وقراءاتهم السابقة  </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="library__item flex justify-start items-start flex-col gap-3">
            <Image src={book} alt="search" className="w-[50px] h-[50px]" />
            <h4 className="text-white font-semibold text-[22px]"> قراءة اجتماعية  </h4>
            <span className="text-white font-normal text-[15px]"> يمكن للمستخدمين الانضمام إلى مجموعات قراءة، مناقشة الكتب مع الأعضاء الآخرين، والمشاركة في فعاليات وورش عمل ذات صلة. </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="library__item flex justify-start items-start flex-col gap-3">
            <Image src={ux} alt="search" className="w-[50px] h-[50px]" />
            <h4 className="text-white font-semibold text-[22px]"> توافق مع الأجهزة المختلفة  </h4>
            <span className="text-white font-normal text-[15px]"> المكتبة التفاعلية عادةً ما تكون متاحة عبر مختلف الأجهزة مثل الحواسيب، الهواتف الذكية، والأجهزة اللوحية، مما يسمح للمستخدمين بالوصول إلى كتبهم في أي وقت وأي مكان.  </span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src={shape} alt="shape" />
      </div>
    </section>
  )
}

export default HomeLibraryNum