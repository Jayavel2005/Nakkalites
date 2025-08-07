import React from 'react'

const Title = ({ title, subTitle }) => {
    return (
        <div className='text-center font-poppins'>
            <p className='text-2xl font-bold text-[#1B262C]'>{subTitle}</p>
            <p className='text-xl font-semibold text-[#007ED5]'>{title}</p>
        </div>
    )
}

export default Title
