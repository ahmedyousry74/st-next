import { ClientLink } from "@/components/shared"
import { ButtonGhost } from "@/components/ui"
import { useGetProfileQuery } from "@/services/api"
import { useClientPathname, useLanguage } from "@/services/hooks"
import { Dropdown, MenuProps, Skeleton } from "antd"
import { Book, Logout, Profile, UserSquare } from "iconsax-react"
import React, { useMemo } from 'react'

const ProfileDropdown = ({ isScrolled, block }: { isScrolled?: boolean, block?: boolean }) => {

  const { pathname } = useClientPathname()
  const { t } = useLanguage()


  const { data, isLoading } = useGetProfileQuery({})

  const items: MenuProps['items'] = useMemo(() => [
    {
      key: '1',
      label: (<ClientLink href="/profile" className="flex items-center gap-2" >
        <UserSquare variant="Bulk" size={20} />
        {t('profile')}
      </ClientLink>),
    },
    {
      key: '2',
      label: (<ClientLink href="/bookshelf" className="flex items-center gap-2" >
        <Book variant="Bulk" size={20} />
        {t('bookshelf')}
      </ClientLink>),
    },
    {
      key: '3',
      label: (<ClientLink href={`/logout?pathname=${pathname}`} className="flex items-center gap-2 !text-danger" >
        <Logout variant="Bulk" size={20} />
        {t('logout')}
      </ClientLink>),
    },
  ], [t, pathname])

  if (isLoading) return <Skeleton.Button active shape="square" />

  if (!data?.data) return <ClientLink href="/login">
    <button className="bg-third-color-dark text-white py-[10px] px-[25px] rounded-[25px] flex justify-center items-center flex-row cursor-pointer">
      تسجيل دخول
    </button>
  </ClientLink>

  return (
    <Dropdown menu={{ items }}  >
      <a onClick={(e) => e.preventDefault()}>
        <button className="!px-2 bg-transparent">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C8.82993 15 6.0108 16.5306 4.216 18.906C3.82971 19.4172 3.63656 19.6728 3.64288 20.0183C3.64776 20.2852 3.81536 20.6219 4.02537 20.7867C4.29719 21 4.67387 21 5.42724 21H18.5728C19.3261 21 19.7028 21 19.9746 20.7867C20.1846 20.6219 20.3522 20.2852 20.3571 20.0183C20.3634 19.6728 20.1703 19.4172 19.784 18.906C17.9892 16.5306 15.1701 15 12 15Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </a>
    </Dropdown>
  )
}

export default ProfileDropdown