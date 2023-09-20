import Image from "next/image";
import Link from "next/link";

export function Footer(){
    return (
        <div className="flex items-center justify-center py-2 px-8  bg-white">
            <ul className="flex gap-2">
                <li className="w-[30px] h-[30px]">
                    <Link href="#">
                        <Image src="/icons/linkedin-icon.png" alt="Linkedin Logo" width="32" height="32"/>
                    </Link>
                </li>
                <li className="w-[30px] h-[30px]">
                    <Link href="#">
                        <Image src="/icons/instagram-icon.png" alt="Instagram Logo" width="32" height="32"/>
                    </Link>
                </li>
                <li className="w-[30px] h-[30px]">
                <Link href="#">
                        <Image src="/icons/email-icon.png" alt="Email Logo" width="32" height="32"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}