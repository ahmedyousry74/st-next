"use client"
import React from 'react'
import Link from "next/link"
import bg1 from '@/assets/images/landing/shape1.png'
import bg2 from '@/assets/images/landing/shape2.png'
import bg3 from '@/assets/images/landing/shape3.png'
import educate from '@/assets/images/educate.webp'
import icon1 from '@/assets/images/icon1.webp'
import icon2 from '@/assets/images/icon2.webp'
import icon3 from '@/assets/images/icon3.webp'
import icon4 from '@/assets/images/icon4.webp'
import icon5 from '@/assets/images/icon5.webp'
import icon6 from '@/assets/images/icon6.webp'
import { SingleHero } from "../shared"
import studentImg from '@/assets/images/students.svg'
import right from '@/assets/images/check2.png'
import list from '@/assets/images/list.svg'
import imgBg from '@/assets/images/landing/about_8.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"




const mainStudents = () => {


  return (
    <section>
    <section className="py-12 student__section relative">
        <div className="container">
            <div className='flex justify-center items-center flex-row w-full bg_bg'>
                <span className="      ">
                    الطلاب
                </span>
            </div>
            <div className='grid grid-cols-12 gap-4 mt-[50px]'>
            <div className="col-span-12 md:col-span-7 gap-4">
                    <h1 className="text-primary text-[25px] font-semibold mb-4"> 
                    تقدم المنصة محتوى تعليمي شامل يناسب جميع المستويات، مع أدوات تفاعلية لتعزيز الفهم وإمكانية الوصول في أي وقت
                     </h1>
                    <span className="text-[#000] font-medium text-[20px] mb-4"> تدعم الطلاب بموارد للتحضير والاختبارات، وتعزز مهارات التفكير النقدي والشخصي والاجتماعي. توفر بيئة محفزة وتتابع تقدم الطلاب لمساعدتهم على تحسين أدائهم. </span>
                    <ul className='flex justify-start items-start flex-col gap-5 mt-4'>
                        <li className="flex justify-start items-start flex-row gap-3 "> 
                        <Image alt="check" src={list}   />
                            <span>
                            محتوى تعليمي شامل ومتنوع: يشمل دروسا وشروحات في مختلف المواد مصممة لتناسب جميع المستويات الدراسية.                  </span>
                        </li>
                        <li className="flex justify-start items-start flex-row gap-3 "> 
                        <Image alt="check" src={list}   />
                            <span className="text-[#666] font-normal text-[15px] ">
                            أدوات تعلم تفاعلية توفر المنصة أدوات تفاعلية مثل الفيديوهات التعليمية والاختبارات القصيرة التي تساعد على تعزيز الفهم وترسيخ المعلومات بطريقة ممتعة وفعالة.                          </span>
                            </li>
                        <li className="flex justify-start items-start flex-row gap-3 "> 
                        <Image alt="check" src={list}   />
                            <span className="text-[#666] font-normal text-[15px] ">
                            إمكانية الوصول إلى المواد التعليمية في أي وقت توفر المنصة مواد تعليمية يمكن الوصول إليها في أي وقت مما يتيح للطلاب التعلم بالوتيرة التي تناسبهم وبناء جداولهم الدراسية الخاصة.                            </span>
                            </li>
                        <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                        <Image alt="check" src={list}   />
                            <span className="text-[#666] font-normal text-[15px] ">
                            دعم التحصيل الدراسي: تقدم المنصة موارد المساعدة الطلاب على التحضير للاختبارات والامتحانات بما في ذلك ملخصات وأسئلة تدريبية وحلول نموذجية.                           </span>
                            </li>
                        <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                        <Image alt="check" src={list}   />
                            <span className="text-[#666] font-normal text-[15px] ">
                            تعزيز مهارات التفكير النقدي والإبداعي: من خلال محتوى يدفع الطلاب إلى التفكير بشكل نقدي وتحليلي وتعزيز مهاراتهم في حل المشكلات.                          </span>
                            </li>
                        <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                        <Image alt="check" src={list}   />
                            <span className="text-[#666] font-normal text-[15px] ">
                            تطوير المهارات الشخصية والاجتماعية تشمل الموارد المقدمة برامج لتنمية المهارات الشخصية مثل إدارة الوقت والتواصل الفعال والقدرة على العمل ضمن فريق.                        </span>
                            </li>
                        <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                        <Image alt="check" src={list}   />
                            <span className="text-[#666] font-normal text-[15px] ">
                            بيئة تعليمية مشجعة ومحفزة توفر المنصة بيئة تعليمية داعمة تشجع الطلاب على الاستفسار والتعلم بشكل نشط ومستمر مما يعزز من دافعيتهم وتحفيزهم.                      </span>
                            </li>
                        <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                        <Image alt="check" src={list}   />
                            <span className="text-[#666] font-normal text-[15px] ">
                            متابعة وتقييم التقدم : تقدم أدوات لقياس وتقييم تقدم الطلاب مما يساعدهم في تتبع الأداء وتحديد نقاط القوة والضعف للعمل على تحسينها.
                     </span>
                            </li>
                    </ul>
                </div>
                <div className="col-span-12 md:col-span-5 ">
                    <Image src={studentImg} alt="student" className='object-contain' />
                </div>


            </div>
        </div>
    </section>
    </section>
  )
}

export default mainStudents