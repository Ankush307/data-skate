"use client";
import { UPLOAD_FILE_LIST } from "@/utils/helper";
import { CheckIcon, PlusIcon, UplodingIcon, UploadIcon, } from "@/utils/icons";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hero = () => {
    const [upload, setUpload] = useState(false);
    const [fileName, setFileName] = useState("");
    const [uploadCount, setUploadCount] = useState(0);
    const router = useRouter();

    const imageUploadHandler = (e: any) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const fileName = file.name ?? "";
            setFileName(fileName);
            localStorage.setItem("fileName", fileName);
            setUpload(true);
            const imageUrl = URL.createObjectURL(file);
            localStorage.setItem("profileImage", imageUrl);
        } else {
            alert("Please upload a valid image.");
        }
    };

    const imageDragHandler = (e: any) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const fileName = file.name ?? "";
            setFileName(fileName);
            localStorage.setItem("fileName", fileName);
            setUpload(true);
            const imageUrl = URL.createObjectURL(file);
            localStorage.setItem("profileImage", imageUrl);
        } else {
            alert("Please upload a valid image.");
        }
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (upload && uploadCount < 100) {
            interval = setInterval(() => {
                setUploadCount((prevCount) => {
                    if (prevCount >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prevCount + 1;
                });
            }, 30);
        }

        if (uploadCount === 100) {
            setTimeout(() => {
                router.push("/dashboard");
            }, 100);
        }

        return () => {
            clearInterval(interval);
        };
    }, [upload, uploadCount]);

    return (
        <div className="min-h-screen relative flex justify-between flex-col">
            <div className="flex justify-center items-center flex-col px-5">
                <h1 className="font-syne custom-black text-[32px] max-md:text-2xl font-semibold leading-[100%] text-center pt-9 pb-[34px] max-lg:py-8 max-md:py-6">
                    Read & process your files online
                </h1>
                <div className="w-full max-w-[786px] mx-auto pb-[69px]">
                    <div className="w-full min-h-[358px] shadow-[0px_16px_42.7px_0px_#00000014] rounded-b-xl p-4">
                        <div onDrop={imageDragHandler} onDragOver={(e) => e.preventDefault()} className="min-h-[326px] px-6 border border-dashed border-[#ED1C24] rounded-lg flex flex-col justify-center items-center">
                            {upload ? (
                                <div className="w-full flex flex-col justify-center items-center">
                                    <div className="flex gap-3 max-w-[370px] w-full p-4 mx-auto">
                                        <UploadIcon />
                                        <div className="flex w-full gap-2 flex-col">
                                            <div className="flex max-w-[306px] w-full justify-between">
                                                <p className="leading"> Uploading{" "} <span className="font-bold">{fileName}</span></p>
                                                <p>{uploadCount}%</p>
                                            </div>
                                            <div className="bg-[#E7EAEE] h-[3px] rounded-sm w-full">
                                                <div className="bg-red-400 w-0 transition-all duration-300 h-full" style={{ width: `${uploadCount}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full justify-center items-center flex flex-col">
                                    <UplodingIcon />
                                    <p className="pt-4 text-base font-normal leading-[150%]"> Paste or drag and drop files here</p>
                                    <p className="pt-2 pb-4 text-base font-normal leading-[150%] opacity-40 custom-black">WAR, ZIP or EAR, file size no more than 10MB</p>
                                    <label htmlFor="imageInp" className="size-8 bg-[#ED1C24] flex justify-center items-center rounded cursor-pointer border border-transparent hover:border-[#ED1C24] hover:bg-transparent duration-300 ease-linear plus-icon"><PlusIcon /></label>
                                    <input type="file" id="imageInp" hidden onChange={imageUploadHandler} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between w-full items-center pt-12 flex-wrap max-md:justify-start max-md:gap-5 max-md:items-start max-md:max-w-[400px] mx-auto max-md:pt-8">
                        <p className="max-w-[356px] text-sm max-md:max-w-[400px] max-md:mx-auto">
                            Our accelerator allows you to upload, read, and process multiple
                            file types (e.g., Python, JAR, ZIP), extracting key data like
                            classes, methods, and structure for easy review.
                        </p>
                        <div className="flex flex-col gap-2 justify-start">
                            {UPLOAD_FILE_LIST.map((obj, i) => (
                                <div key={i} className=" flex items-center gap-1.5">
                                    <CheckIcon />
                                    <p className="text-sm leading-[150%] custom-black">{obj}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;