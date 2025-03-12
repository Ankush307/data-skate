import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import DashBoard from '@/components/dashboard/DashBoard'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <DashBoard />
            <Footer />
        </>
    )
}

export default page