import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#1B1B1B] py-[23px] max-lg:px-4'>
            <div className="container mx-auto max-w-[1140px] flex max-md:flex-col justify-center items-center md:justify-between ff-inter">
                <p className='text-sm leading-[150%] text-white/50 ff-inter'>Made with ❤ for the people of the internet.</p>
                <p className='text-sm leading-[150%] text-white/50 ff-inter'>© {new Date().getFullYear()} Dataskate.io, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer