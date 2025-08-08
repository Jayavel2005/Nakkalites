import React from 'react'
import { Tabs } from "../components/ui/tabs"

const YoutubeVideos = () => {

    const tabs = [
        {
            title: "Top Videos",
            value: "topVideos",
            content: (
                <div className='flex justify-center items-center h-full bg-red-500 rounded-2xl'>
                    <h1>Jayavel</h1>
                </div>
            ),
        },
        {
            title: "Recent Videos",
            value: "recentVideos",
            content: (
                <div className='flex justify-center items-center h-full bg-amber-500 rounded-2xl'>
                    <h1>Jayavel</h1>
                </div>
            ),
        }
    ];
    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
            <Tabs tabs={tabs} />
        </div>
    )
}

export default YoutubeVideos
