"use client";
import React, { useState } from "react";
import Header from "./common/Header";
import { FEATURES_LIST } from "@/utils/helper";
import Image from "next/image";

const LoginForm = () => {
    const [preView, setPreView] = useState<string[]>([]);

    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        console.log(files);
        if (files) {
            const newPreviews: string[] = [];
            Array.from(files).forEach((file) => {
                if (validImageTypes.includes(file.type)) {
                    newPreviews.push(URL.createObjectURL(file));
                } else {
                    alert(`Error: ${file.name} is not a valid image file.`);
                }
            });
            setPreView((prev) => [...prev, ...newPreviews]);
        }
    };

    const HandelDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files) {
            const newPreviews: string[] = [];
            Array.from(files).forEach((file) => {
                if (validImageTypes.includes(file.type)) {
                    newPreviews.push(URL.createObjectURL(file));
                } else {
                    alert(`Error: ${file.name} is not a valid image file.`);
                }
            });
            setPreView((prev) => [...prev, ...newPreviews]);
        }
    };

    const HandelDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div>
            <Header />
            <div className="container mx-auto max-w-[1140px] pb-[73px]">
                <h3 className="text-[32px] font-semibold leading-[100%] text-center pt-9">Read & process your files online</h3>
                <div className="shadow-[0px_16px_42.7px_0px_rgba(0,0,0,0.08)] rounded-xl max-w-[786px] h-[358px] mx-auto p-4 mt-[34px]">
                    <input type="file" id="image" onChange={handleImageChange} hidden multiple />
                    <label htmlFor="image">
                        <div className="py-10 px-10 w-full h-full border border-dashed border-[#ED1C24] rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer"
                            onDragOver={HandelDragOver} onDrop={HandelDrag}>
                                <Image height={24} width={24} src={'/assets/images/svg/upload-cloud.svg'} alt='page logo' />
                                <p className="pt-4 pb-1 leading-[150%] ff-inter">Paste or drag and drop files here </p>
                                <p className=" ff-inter">WAR, ZIP or EAR, file size no more than 10MB</p>
                        </div>
                    </label>
                    <div className="mt-4">
                        {preView.map((url, index) => (
                            <Image  height={96} width={96} key={index} src={url} alt={`Preview ${index + 1}`} className="w-24 h-24 object-cover m-2" />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between pt-12">
                    <div className="">
                        <p className="text-sm leading-[150%] text-[#0D0D0D] ff-inter max-w-[335px] ">Our accelerator allows you to upload, read, and process multiple file types (e.g., Python, JAR, ZIP), extracting key data like classes, methods, and structure for easy review.</p>
                    </div>
                    <div className="">
                        <ul className="space-y-2">
                            {FEATURES_LIST.map((item, index) => (
                                <li key={index} className="flex items-center gap-1.5 text-sm leading-[150%] text-[#0D0D0D] ff-inter"> <Image height={18} width={18} src={'/assets/images/svg/check-icon.svg'} alt='page logo' /> {item.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;