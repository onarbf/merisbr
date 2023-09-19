'use client'
import Link from "next/link";
import { useGlobalContext } from "../context/store";
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
export default function Navbar() {
    const { categories, setCategories } = useGlobalContext();
    const router = useRouter();
    const path = usePathname();

    const toggleSetCategory = (newCategory: string | null) => {
        if (newCategory === null) {
            console.log('null')
            setCategories([])
            router.push('/')
            return
        }
        if (categories.length === 0) {
            setCategories([])
        }
        setCategories([newCategory])
        router.push('/')
    }
    return (<header className="flex flex-col sm:flex-row
        top-0 left-0 sticky
        justify-between items-center
        py-4 px-8 bg-white border-b border-slate-600 mb-2">
        <span className="text-2xl cursor-pointer font-bold" onClick={() => toggleSetCategory(null)} >María Barriga</span>
        <ul className="flex gap-4 text-xl pt-2">
            <li className={`cursor-pointer relative`} onClick={() => toggleSetCategory('Illustration')}>
                {categories.indexOf('Illustration') !== -1 && <motion.span layoutId="underline" className="absolute left-0 top-full block h-[1px] w-full bg-black " />}
                <h4 className="">Illustration</h4>
            </li>

            <li className={`cursor-pointer relative`} onClick={() => toggleSetCategory('Motion')}>

                {categories.indexOf('Motion') !== -1 && <motion.span layoutId="underline" className="absolute left-0 top-full block h-[1px] w-full bg-black " />}
                <h4>Motion</h4>
            </li>

            <li  className="relative">{path === '/about' && <motion.span layoutId="underline" className="absolute left-0 top-full block h-[1px] w-full bg-black " />}
                <Link href="/about" >
                <h4>About</h4>
                </Link>
            </li>

            <li  className="relative">
            {path === '/contact' && <motion.span layoutId="underline"  className="absolute left-0 top-full block h-[1px] w-full bg-black " />}
                <Link href="/contact" >
                <h4>Contact</h4>
                </Link>
            </li>
        </ul>
    </header>)
}