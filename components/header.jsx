import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LogoIcon from '@/public/headerimg/logo.svg'
import LogoTitle from '@/public/headerimg/logo_title.svg'
import IconPhone from '@/public/headerimg/u_phone-alt.svg'
import IconEmail from '@/public/headerimg/fi_mail.svg'
import path from 'path'



const Index = () => {
  const links =[
    {path: "/products", title: "Продукты"},
    {path: "/contacts", title: "Контакты"},
    {path: "/payment", title: "Оплата и Доставка"},
    {path: "/news", title: "Новости"},
    {path: "/aboutus", title: "О Нас"},

  ]
    
  
  return (
    <>
    <div className='justify-start flex gap-4 pt-3 pb-3  bg-[#1F1D14] text-[#FFF]'>
    <div  className='justify-start flex w-full items-center container mx-auto px-10 max-w-1240'>
    <Link href='/' className='flex gap-2 justify-start hover:opacity-80 w-32'>
              <Image src={LogoIcon} alt='logo'/>
              <Image src={LogoTitle} alt='logo_title'/>
            </Link>
            <div className='w-full flex gap-10 ml-24 justify-start opacity-90 items-center'>
    
    {
              links.map((item, index)=>{
                return <Link href={item.path} key={index} className='text-[16px] font-normal hover:text-[#FBD029] transition-all size[16px] '>
                {item.title}
                </Link>
              })
            }
            
              <div className='justify-end flex gap-8 ml-[278px]'>
              <div className='flex gap-2 items-center font-normal hover:text-[#FBD029]'>
              <Image src={IconPhone} alt='iconPhone' className='w-5'/>
              <p className='text-[16px] font-normal font-sans items-center'>
                <span className='text-[13px] mr-2 items-center opacity-95'>+998 (90)</span>
                565-85-85
              </p>
            </div>
            <div className='flex gap-2 items-center font-normal hover:text-[#FBD029]'>
              <Image src={IconEmail} alt='iconPhone' className='w-5'/>
              <p className='text-[16px] font-normal font-sans'>
                info@gmail.com
              </p>
            </div>
              </div>
            
    </div>
    </div>
    
        </div>
    </>
  )
}

export default Index