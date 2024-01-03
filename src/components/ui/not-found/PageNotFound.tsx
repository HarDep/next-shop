import { titleFont } from "@/configs/fonts";
import Image from "next/image";
import Link from "next/link";

export const PageNotFound = ({ message, optionText, linkText, link }: { message: string, optionText: string, linkText: string, link: string }) => {
    return (
        <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
            <div className="text-center px-5 mx-5">
                <h2 className={`${titleFont.className} antialiased text-9xl`} >404</h2>
                <p className="font-semibold text-xl">Whoops! {message}.</p>
                <p className="font-light">
                    <span>Puedes {optionText} </span>
                    <Link href={link} className="font-normal hover:underline transition-all">{linkText}</Link>
                </p>
            </div>
            <div className="px-5 mx-5">
                <Image src={'/imgs/starman_750x750.png'} alt="Starman" width={550} height={550}
                    className="p-5 sm:p-0" />
            </div>
        </div>
    )
}
