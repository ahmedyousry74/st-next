"use client"
import React from 'react'
import { SingleHero } from "../shared"
import img from '@/assets/images/landing/about_1.png'
import hero from '@/assets/images/hero-img.webp'
import list from '@/assets/images/list.svg'
import book from '@/assets/images/book.svg'
import global from '@/assets/images/global.svg'
import idea from '@/assets/images/idea.svg'
import shape from '@/assets/images/shape-2.svg'
import pdf from '@/assets/images/catalog.pdf'
import right from '@/assets/images/check2.png'
import video from '@/assets/test.mp4'
import Image from "next/image"
import imgBg from '@/assets/images/landing/about_8.png'
import { TickCircle } from "iconsax-react"
import { RevealAnimation } from "@/components/shared"
import { HomeAboutUsIN } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { useTranslations } from "next-intl";
import Link from "next/link"

const HomeAboutUs = ({ data }: { data: HomeAboutUsIN }) => {

  const t = useTranslations();

  return (
    <section className="bg-[#fff] py-12 about_us_section relative">
      <RevealAnimation >




        <div className="container">
        <div className='flex justify-center items-center flex-row bg_bg'>
            <span className="  " > {t('about_us')} </span>
        </div>
          <div className='text-center قثمشفهرث md:text-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 w-full items-center  '>
            <div className='lg:col-span-7 relative z-10 header__hero__desc flex justify-start items-start flex-col gap-4'>
              <h1 className=''>منصة الفكر العلمي</h1>
              <h2>هي منصة <span>تعليمية</span> متطورة تهدف إلى تحسين وتطوير عملية التعليم</h2>
              <p> من خلال تقديم حلول مبتكرة تجمع بين التكنولوجيا والمحتوى الأكاديمي تسعى المنصة إلى تلبية احتياجات الطلاب وأعضاء هيئة التدريس على حدٍ سواء من خلال تقديم خدمات متكاملة تسهم في تعزيز جودة التعليم وتحقيق أقصى استفادة من الموارد التعليمية من خلال تحويل المقررات الدراسية التقليدية إلى كتب إلكترونية تفاعلية وتوفير نظام إدارة تعلم  LMSمتكامل للمؤسسات التعليمية تسعى المنصة إلى تعزيز التجربة التعليمية للطلاب وأعضاء هيئة التدريس على حد سواء عبر استخدام تقنيات حديثة تُمكّنهم من الوصول إلى محتوى تعليمي ثري ومتاح في أي وقت ومن أي مكان. </p>
              <ul className='flex justify-start itesm-start flex-col gap-3 mt-5'>
                <li className='flex justify-start itesm-start flex-row gap-2'>  
                  <Image src={list} alt="list" />
                  <span> المكتبة الأساسية للفكر العلمي ومكتبات الجامعات مثل جامعة الملك عبد العزيز </span>
                </li>
                <li className='flex justify-start itesm-start flex-row gap-2'>  
                  <Image src={list} alt="list" />
                  <span> تركز المنصة على توفير قارئ ذكي بخصائص متقدمة </span>
                </li>
                <li className='flex justify-start itesm-start flex-row gap-2'>  
                  <Image src={list} alt="list" />
                  <span> المكتبة الأساسية للفكر العلمي ومكتبات الجامعات مثل جامعة الملك عبد العزيز </span>
                </li>
              </ul>
              <Link href={pdf} className="my-5">
                  <button className="bg-primary font-medium text-[17px] !py-[12px] !px-[35px] text-[#fff] rounded-full cursor-pointer "> اقرأ المزيد </button>
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className='hero__img relative'>
                {/* <Image src={hero} alt='hero img' className='object-contain z-9 relative' /> */}
                <video width="" height="" controls className='z-10 relative w-full md:h-[550px] h-[300px] rounded-[12px]'>
                  <source src={video} type="video/mp4"/>
                </video>
              </div>
            </div>
            <div className="book bounce">
              <Image alt="book" src={book} />
            </div>
            <div className="global rotate">
              <Image alt="global" src={global} />
            </div>
            <div className="shape moveHorizontal">
              <Image alt="shape" src={shape} />
            </div>
            <div className="idea">
              <Image alt="idea" src={idea} />
            </div>
          </div>
        </div>

      </RevealAnimation>
    </section>
  )
}

export default HomeAboutUs