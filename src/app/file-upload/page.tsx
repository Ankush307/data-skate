"use client";
import { useRouter } from "next/navigation";
import DragDrop from "@/components/upload/DragDrop";
import React, { useEffect } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const page = () => {
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("isLogin") !== "true") {
            router.push("/");
        }
    }, []);

    return (
        <>
            <Header />
            <DragDrop />
            <Footer />
        </>
    );
};

export default page;
