import React, { useState } from 'react'
import RecentsVideos from './RecentsVideos';
import PopularVideos from './PopularVideos';

const YoutubeVideos = () => {
    const [tabs, setTabs] = useState('popular');

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            {/* Tab Triggers */}
            <div className='border rounded-full inline-flex gap-3 p-1 bg-gray-100'>
                <button
                    onClick={() => setTabs('popular')}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        tabs === 'popular' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    Popular Videos
                </button>
                <button
                    onClick={() => setTabs('recent')}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        tabs === 'recent' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    Recent Videos
                </button>
            </div>

            {/* Tab Content with Smooth Animation */}
            <div className="mt-6 w-full flex justify-center">
                <div className="transition-opacity duration-500 ease-in-out w-full">
                    {tabs === 'recent' ? <RecentsVideos /> : <PopularVideos />}
                </div>
            </div>
        </div>
    );
};

export default YoutubeVideos;
