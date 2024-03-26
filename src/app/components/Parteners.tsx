import Image from 'next/image'
import React from 'react'

import Blason_univ_Yaoundé_1Logo from "../../../public/images/Blason_univ_Yaoundé_1.png"
import ifyarLogo from "../../../public/images/ifyar.png"
import kaeyros_logoLogo from "../../../public/images/kaeyros_logo.png"
import oswd_logoLogo from "../../../public/images/oswd_logo.png"
import partn_SCHLogo from "../../../public/images/partn_SCH.png"

const Parteners = () => {
  return (
    <div>
        <div className=" h-[100px]  w-full flex">
            <Image
                // onClick={() => {
                //     router.push("https://kaeyros-analytics.com")
                // }}
                className="cursor-pointer w-[100px] m-auto"
                src={ kaeyros_logoLogo }
                alt="Kaeyros-analytics logo"
            />
        </div>
        <div className=" h-[100px]  w-full flex">
            <Image
                // onClick={() => {
                //     router.push("https://kaeyros-analytics.com")
                // }}
                className="cursor-pointer w-[100px] m-auto"
                src={ Blason_univ_Yaoundé_1Logo }
                alt="Kaeyros-analytics logo"
            />
        </div>
        <div className=" h-[100px]  w-full flex">
            <Image
                // onClick={() => {
                //     router.push("https://kaeyros-analytics.com")
                // }}
                className="cursor-pointer w-[100px] m-auto"
                src={ ifyarLogo }
                alt="Kaeyros-analytics logo"
            />
        </div>
        <div className=" h-[100px]  w-full flex">
            <Image
                // onClick={() => {
                //     router.push("https://kaeyros-analytics.com")
                // }}
                className="cursor-pointer w-[100px] m-auto"
                src={ oswd_logoLogo }
                alt="Kaeyros-analytics logo"
            />
        </div>
        <div className=" h-[100px]  w-full flex">
            <Image
                // onClick={() => {
                //     router.push("https://kaeyros-analytics.com")
                // }}
                className="cursor-pointer w-[100px] m-auto"
                src={ partn_SCHLogo }
                alt="Kaeyros-analytics logo"
            />
        </div>
    </div>
  )
}

export default Parteners