"use client"
import { ButtonGhost } from "@/components/ui"
import { Profile, ShoppingCart } from "iconsax-react"
import React from 'react'
import DarkModeChange from "../shared/DarkModeChange"
import ProfileDropdown from "./ProfileDropdown"
import { ClientLink } from "@/components/shared"
import { LanguageToggler } from "../shared"
import HeaderCart from "./HeaderCart"

const HeaderActions = ({ isDrawer = false, isScrolled }: { isDrawer?: boolean, isScrolled?: boolean }) => {
  return (
    <div className={`navbar_btns flex items-center justify-center  ${isDrawer ? 'flex-col items-stretch ' : ''}`}>
      <ProfileDropdown isScrolled={isScrolled} block={isDrawer} />
      <HeaderCart isDrawer={isDrawer} isScrolled={isScrolled} />
      <LanguageToggler showFlags />

    </div>
  )
}

export default HeaderActions