"use client"
import React, { useEffect, useState } from 'react'
import MainLogo from "../shared/MainLogo"
import NavMenu from "./NavMenu"
import HeaderActions from "./HeaderActions"
import { useParams, usePathname } from "next/navigation"
import { Button, Drawer } from "@/components/ui"
import { FiMenu, FiX } from "react-icons/fi"
import MenuLg from "./MenuLg"
import HeaderSearch from "./HeaderSearch"





const MainHeader = () => {

  const pathname = usePathname()
  const params = useParams();
  const [scrollY, setScrollY] = useState(0)
  const [showMenuDrawer, setShowMenuDrawer] = useState(false)


  useEffect(() => {
    if (typeof window === 'undefined') return
    setScrollY(window.scrollY)
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCloseSideDrawer = () => {
    setShowMenuDrawer(false)
  }

  useEffect(() => {
    if (showMenuDrawer) {
      handleCloseSideDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, params]);

  const isScrolled = scrollY > 140

  return (
    <header className='absolute top-0 right-0 z-9 w-full h-full'>
      <div className='!bg-second-color-dark py-3 px-6 lg:!flex hidden justify-start items-center flex-row relative z-10'>
        <MenuLg />
      </div>
      <div className={`navbar bg-transparent relative z-50 top-0 w-screen transition-all duration-300 border-b border-primary-10 border-solid  `}>
        <div
          className={`${isScrolled ? 'py-2    ' : 'py-3 '}`}
        >
          <div className="container-fluid px-4 md:px-5 lg:px-6 ">
            <div className="flex items-center gap-4 justify-between">

              <div className="flex items-center gap-4">
                <Button
                  className="flex items-center justify-center px-0 h-auto lg:!hidden"
                  type="text"
                  onClick={() => setShowMenuDrawer(true)} >
                  <FiMenu size={26} />
                </Button>

                <div className="sm:hidden">
                  <MainLogo size={30} />
                </div>
                <div className=" hidden sm:block">
                  <MainLogo />
                </div>
              </div>
              <div className='search__input relative lg:block hidden'>
                <div className='absolute top-[10px] left-[25px]'>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15.0001 15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <input type="text" placeholder='بحث' className='' />
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <HeaderActions />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Drawer
        open={showMenuDrawer}
        placement={params?.locale === 'ar' ? "right" : 'left'}
        closable={false}
        width={'90vw'}
        styles={{
          body: { padding: 0 },
          wrapper: { maxWidth: '350px' }
        }}

        onClose={handleCloseSideDrawer}
        className="lg:hidden"
      >
        <div className="bg-bg flex flex-col gap-3">
          <div className="flex items-center justify-between p-4 border-b border-primary-30 mb-3">
            <MainLogo />
            <Button size="small" onClick={handleCloseSideDrawer}  >
              <FiX size={24} />
            </Button>
          </div>
          <div className=" flex-1 overflow-y-auto "
            
          >
            <MenuLg isDrawer />
          </div>
          <div className='search__input relative lg:block hidden'>
            <div className='absolute top-[10px] left-[25px]'>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15.0001 15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <input type="text" placeholder='بحث' className='' />
          </div>
          <div className="p-3  ">
            <HeaderActions isDrawer />
          </div>
        </div>
      </Drawer>
    </header>
  )
}

export default MainHeader