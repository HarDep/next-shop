import { titleFont } from "@/configs/fonts";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import React from 'react'
import { ButtonOpenMenu } from "./ButtonOpenMenu";

export const TopMenu = () => {
    return (
        <nav className="grid grid-cols-1 sm:grid-cols-3 px-5 content-start w-full">
            <div className="flex items-center pt-4 sm:pt-0">
                <Link href='/'>
                    <span className={`${titleFont.className} antialiased font-bold`}>App</span>
                    <span> | Shop</span>
                </Link>
            </div>
            <div className="hidden sm:flex items-center justify-self-center">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/men'>Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/women'>Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/kid'>Niños</Link>
            </div>
            <div className="flex items-center justify-self-start sm:justify-self-end">
                <Link href={'/search'} className="mx-2">
                    <IoSearchOutline className='w-5 h-5' />
                </Link>
                <Link href={'/cart'} className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </Link>
                <ButtonOpenMenu />
            </div>
        </nav>
    )
}

