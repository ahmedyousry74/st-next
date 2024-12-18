import { ClientLink } from "@/components/shared"
import { ButtonGhost } from "@/components/ui"
import { useGetCartItemsQuery } from "@/services/api"
import { errorMessageLog } from "@/utils"
import { Badge, Skeleton } from "antd"
import { ShoppingCart } from "iconsax-react"
import React, { useEffect } from 'react'


const CartBtn = ({ isDrawer = false, isScrolled = false }) => {




  return (
    <ClientLink href="/cart" className={`  ${isDrawer ? 'w-full' : ''}`} >
      <button className="!px-2 bg-transparent">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="1">
<path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 22C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20C16.4477 20 16 20.4477 16 21C16 21.5523 16.4477 22 17 22Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M2 2H3.30616C3.55218 2 3.67519 2 3.77418 2.04524C3.86142 2.08511 3.93535 2.14922 3.98715 2.22995C4.04593 2.32154 4.06333 2.44332 4.09812 2.68686L4.57143 6M4.57143 6L5.62332 13.7314C5.75681 14.7125 5.82355 15.2031 6.0581 15.5723C6.26478 15.8977 6.56108 16.1564 6.91135 16.3174C7.30886 16.5 7.80394 16.5 8.79411 16.5H17.352C18.2945 16.5 18.7658 16.5 19.151 16.3304C19.4905 16.1809 19.7818 15.9398 19.9923 15.6342C20.2309 15.2876 20.3191 14.8247 20.4955 13.8988L21.8191 6.94969C21.8812 6.62381 21.9122 6.46087 21.8672 6.3335C21.8278 6.22177 21.7499 6.12768 21.6475 6.06802C21.5308 6 21.365 6 21.0332 6H4.57143Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
    </ClientLink>
  )
}
const HeaderCart = ({ isDrawer = false, isScrolled = false }) => {



  const { data, isLoading, error, refetch } = useGetCartItemsQuery({})


  useEffect(() => {
    if (error) {
      errorMessageLog(error)
    }
  }, [error])



  if (isLoading) return <Skeleton.Button active shape="square" size="small"
  />


  return (
    <Badge count={data?.data?.items?.length || 0} showZero={false}
      styles={{
        indicator: {
          insetInlineEnd: 'unset',
        }
      }}
      
    >
      <CartBtn isDrawer={isDrawer} isScrolled={isScrolled} />
    </Badge>
  )
}

export default HeaderCart