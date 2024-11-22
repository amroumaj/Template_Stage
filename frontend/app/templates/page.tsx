"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
export default function page() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-slate-900">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Preset 1
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            A preset of a personal or a company card containing credentials
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
            <Image
                src="/assets/images/screenshot_2024-11-12-190931.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
            /> 
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            <CardItem
                translateZ={20}
                as={Link}
                href="/preset_1"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
                Try now →
            </CardItem>
{/*             <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-slate-950 dark:bg-white dark:text-black text-white text-xs font-bold"
            >
                Sign up
            </CardItem> */}
            </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Preset 2
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            A preset of a news letter for a quarterly report and statistics
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
            <Image
                src="/assets/images/screenshot_2024-11-12-190918.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
            /> 
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            <CardItem
                translateZ={20}
                as={Link}
                href="/preset_2"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
                Try now →
            </CardItem>
{/*             <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-slate-950 dark:bg-white dark:text-black text-white text-xs font-bold"
            >
                Sign up
            </CardItem> */}
            </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Preset 3
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            A preset of a newwsletter advertising huge sales are on the way
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
            <Image
                src="/assets/images/screenshot_2024-11-12-190855.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
            /> 
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            <CardItem
                translateZ={20}
                as={Link}
                href="/preset_3"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
                Try now →
            </CardItem>
{/*             <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-slate-950 dark:bg-white dark:text-black text-white text-xs font-bold"
            >
                Sign up
            </CardItem> */}
            </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Preset 4
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            A preset for an artestic view of a futurisic landscape city with a tower
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
            <Image
                src="/assets/images/Tower.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
            /> 
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            <CardItem
                translateZ={20}
                as={Link}
                href="/preset_4"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
                Try now →
            </CardItem>
{/*             <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-slate-950 dark:bg-white dark:text-black text-white text-xs font-bold"
            >
                Sign up
            </CardItem> */}
            </div>
        </CardBody>
      </CardContainer>      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Make Your Own
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            Start with a blank canvas and make your owwn design from scratch
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
            <Image 
                src="/assets/images/add1.png"
                height="600"
                width="600"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
            /> 
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            <CardItem
                translateZ={20}
                as={Link}
                href="/create_template"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
                Try now →
            </CardItem>
{/*             <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-slate-950 dark:bg-white dark:text-black text-white text-xs font-bold"
            >
                Sign up
            </CardItem> */}
            </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}
