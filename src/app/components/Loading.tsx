"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import fetchData from "../actions";
import Card, { AnimeProp } from "./Card";

let page = 2

export type Card = JSX.Element 

export default function Loading() {
    const { ref, inView } = useInView()
    const [data, setData] = useState<Card[]>([])
    useEffect(() => {
        if (inView) {
            // confirm('load more ?')
            fetchData(page).then((res) => {
                setData([...data, ...res])
                page++;
            })
        }
    }, [data, inView])
    return (
        <>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
                {data}
            </section>
            <div ref={ref} className="flex justify-center items-center w-full">
                <Image
                    src="./spinner.svg"
                    alt="spinner"
                    width={56}
                    height={56}
                    className="object-contain"
                />
            </div>
        </>
    )
}
