import { usePathname } from "next/navigation";

import { motion } from 'framer-motion';
import Link from "next/link";

export default function MenuOptions({toggleSetCategory, categories}: any){
    const path = usePathname();
    return(
        <ul className="flex flex-col md:flex-row gap-4 text-xl pt-2 bg-white p-[24px]">
                <li className={`cursor-pointer relative`} onClick={() => toggleSetCategory('Illustration')}>
                    {categories.indexOf('Illustration') !== -1 && <motion.span layoutId="underline" className="absolute left-0 top-full block h-[1px] w-full bg-black " />}
                    <h4 className="">Illustration</h4>
                </li>

                <li className={`cursor-pointer relative`} onClick={() => toggleSetCategory('Motion')}>

                    {categories.indexOf('Motion') !== -1 && <motion.span layoutId="underline" className="absolute left-0 top-full block h-[1px] w-full bg-black " />}
                    <h4>Motion</h4>
                </li>

                <li className="relative">{path === '/about' && <motion.span layoutId="underline" className="absolute left-0 top-full block h-[1px] w-full bg-black " />}
                    <Link href="/about" >
                        <h4>About</h4>
                    </Link>
                </li>

                <li className="relative">
                    {path === '/contact' && <motion.span layoutId="underline" className="absolute left-0 top-full block h-[1px] w-full bg-black " />}
                    <Link href="/contact" >
                        <h4>Contact</h4>
                    </Link>
                </li>
            </ul>
    )
}