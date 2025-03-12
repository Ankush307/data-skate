import { DETAILED_METRICES_LIST } from "@/utils/helper";
import { DetailedArrow } from "@/utils/icons";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const DetailedMetrices = () => {
    const params = useSearchParams();
    const card = params.get("card");
    const router = useRouter();

    return (
        <div className="bg-gray">
            <p className="font-semibold text-2xl font-syne max-md:text-xl leading-100 mt-[31px] pb-6"> Detailed metrices</p>
            <div className="w-full max-md:flex-col flex gap-6">
                <div className="max-w-[558px] max-md:max-w-[unset] flex flex-col gap-4 w-full">
                    {DETAILED_METRICES_LIST.map((item, index) => (
                        <button key={index} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            router.push(`/dashboard?card=${item.title.toLowerCase().replaceAll(" ", "-")}`, { scroll: false });
                        }} className={`w-full bg-white flex rounded-lg cursor-pointer border border-solid items-center text-sm justify-between py-3 px-4 ${card === item.title.toLowerCase().replaceAll(" ", "-") ? "border-red" : "border-transparent"}`}>
                            <span className="flex items-center gap-4">
                                <span className="bg-light-blue justify-center font-semibold font-syne text-2xl max-md:text-xl max-sm:text-lg items-center flex size-10 rounded-full">{item.number}</span>{item.title}</span>
                            <DetailedArrow />
                        </button>
                    ))}
                </div>
                <div className="bg-white min-h-[464px] max-lg:min-h-[380px] w-full max-w-[558px] max-xl:max-w-[480px] flex flex-col justify-center items-start pl-5 rounded-lg">
                    <Image width={497} height={315.08} className="max-w-[497px] object-cover pointer-events-none w-full" src="/assets/images/png/color-circle-img.png" alt="image" />
                    <p className="text-start pt-16 text-xl font-medium font-syne">11 Starter processes</p>
                </div>
            </div>
        </div>
    );
};

export default DetailedMetrices;
