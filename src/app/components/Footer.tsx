import Image from "next/image";

export default function Footer() {
    return (
        <footer className="sm:px-16 py-4 px-8 flex items-center justify-between gap-2 flex-wrap bg-[#161921]">
            <p className="text-white font-bold text-base">@2023 AnimeFusion</p>
            <Image
                src="./logo.svg"
                alt="logo"
                width={47}
                height={44}
                className="object-contain"
            />
            <div className="flex items-center gap-6">
                <Image
                    src="./tiktok.svg"
                    alt="logo"
                    width={19}
                    height={19}
                    className="object-contain"
                />
                <Image
                    src="./instagram.svg"
                    alt="logo"
                    width={19}
                    height={19}
                    className="object-contain"
                />
                <Image
                    src="./twitter.svg"
                    alt="logo"
                    width={19}
                    height={19}
                    className="object-contain"
                />
            </div>
        </footer>
    )
}
