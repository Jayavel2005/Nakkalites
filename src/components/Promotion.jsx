import React from 'react'
import classRaid from "../assets/classRaid.jpg"
import parentsTeacherMeeting from "../assets/parentsTeacherMeeting.webp"
import diwali from "../assets/diwali.jpg"
import ammuchi from "../assets/ammuchi.webp"
import PlayStore from "./StoreButtons/PlayStore.jsx"
import AppStore from './StoreButtons/AppStore.jsx'

const Promotion = () => {
    return (
        <section>
            <div className="w-full  mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4   p-5">

                <div className="bento-item md:col-span-2 md:row-span-4 rounded-2xl ">
                    <img src={classRaid} alt="" className='w-full h-full object-cover rounded-2xl' />
                </div>

                <div className="bento-item md:col-span-2 md:row-span-2 rounded-2xl">
                    <img src={parentsTeacherMeeting} alt="" className='w-full h-full object-cover rounded-2xl' />
                </div>

                <div className="bento-item rounded-2xl md:row-span-2 md:col-span-1">
                    <img src={diwali} alt="" className='w-full h-full object-cover rounded-2xl' />

                </div>

                <div className="rounded-2xl md:row-span-2 md:col-span-1 bento-item">
                    <img src={ammuchi} alt="" className='w-full h-full object-cover rounded-2xl' />

                </div>



            </div>
            <div className='max-sm:flex-col flex items-center justify-center gap-2 md:gap-5   font-poppins'>
                <PlayStore />
                <AppStore />
            </div>

        </section>

    )
}

export default Promotion
