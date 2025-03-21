"use client";
import { DownArrow } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
    const homePage = usePathname() === "/";
    const dashboardPage = usePathname() === "/dashboard";
    const [user, setUser] = useState({ firstName: "", secondName: "" });
    const [profileImage, setProfileImage] = useState("");

    useEffect(() => {
        const storedData = localStorage.getItem("formData");
        if (storedData) {
            const passedData = JSON.parse(storedData);
            setUser({
                firstName: passedData.firstName,
                secondName: passedData.secondName,
            });
        }
        const storedImage = localStorage.getItem("profileImage");
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, []);

    return (
        <div className={`py-[19.9px] max-sm:p-4 px-4 ${dashboardPage && "bg-light-white"}`} >
            <div className="max-w-[1140px] container mx-auto justify-between flex">
                <div className="flex gap-2.5 items-center">
                    <Link href={"/"}><Image src={"/assets/images/png/page-logo.png"} width={144.39} height={33.62} alt="page-logo" /></Link>
                    <div className="h-[19px] max-sm:hidden w-[1.5px] bg-black"></div>
                    <p className="font-syne max-sm:hidden font-medium max-md:text-base">TMM Accelerator</p>
                </div>
                <div className="flex cursor-pointer items-center gap-[7px]">
                    <Image
                        src={dashboardPage && profileImage ? profileImage : "/assets/images/png/user-img.png"}
                        unoptimized width={40} height={40} alt="admin" className="rounded-full size-10 object-cover pointer-events-none" />
                        <div className="flex flex-col max-sm:hidden gap-[1px]">
                            <p className="font-syne font-medium leading-[100%]"> {user.firstName} {user.secondName}</p>
                            <p className="text-sm text-black/70">Admin</p>
                        </div>
                    {!homePage && <DownArrow iconClass="max-sm:hidden" />}
                </div>
            </div>
        </div>
    );
};

export default Header;
