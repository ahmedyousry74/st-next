"use client"
import React, { useMemo, useRef } from 'react'

import ani1 from '@/assets/images/ani1.png'
import ani2 from '@/assets/images/ani2.png'
import ani3 from '@/assets/images/ani3.png'
import ani4 from '@/assets/images/global.svg'
import digital from '@/assets/images/digital.jpg'

import Image from "next/image"
import { Button, Input, message } from "antd"
import { RevealAnimation } from "@/components/shared"
import { useTranslations } from "next-intl";
import * as Yup from 'yup';
import { ERRORS_STR } from "@/services/constants"
import { useFormik } from "formik"
import { subscribeToNewsletter } from "@/services/api"
const NewsLetter = () => {
  const t = useTranslations();


  return (
    <section className="digital_number flex justify-center items-center flex-col bg gap-6 w-full dark relative py-8 lg:py-10">
      <h2 className='text-[30px] text-white font-bold' > التحول الرقمي </h2>
      <ul className='flex justify-center items-center flex-col gap-5 lg:w-[650px] w-auto'>
        <li className='text-white font-medium text-[20px] text-center'> استخدام التكنولوجيا الرقمية لتحسين وتطوير العمليات والخدمات في جميع جوانب الحياة، سواء في المؤسسات الحكومية، الشركات، أو في الحياة اليومية للأفراد </li>
      </ul>
      <a href="" target="_blank" className="bg-[#FEA71D] font-medium text-[17px] py-[8px] px-[35px] text-[#fff] rounded-full"> ملف الأعمال </a>
    </section>
  )
}

export default NewsLetter