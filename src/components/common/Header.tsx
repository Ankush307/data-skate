import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className="flex justify-between items-center py-5">
            <div className="container mx-auto max-w-[1140px] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <Image height={33} width={144} src={'/assets/images/png/page-logo.png'} alt='page logo' />
                    <p className='border-l-[1.5px] h-[15px]'></p>
                    <p className='font-medium'>TMM Accelerator</p>
                </div>
                <div className="items-center flex justify-center">
                    <Image className='rounded-full size-10 ' height={40} width={40} src={'/assets/images/png/user-img.png'} alt='page logo' />
                    <div className="flex flex-col">
                        <p className='leading-[100%] font-medium'>Jhon doe</p>
                        <p className='leading-[100%]'>Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header