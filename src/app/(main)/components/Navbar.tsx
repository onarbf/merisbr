'use client'
import { useGlobalContext } from "../context/store";
import { useRouter} from 'next/navigation';

import { useState } from "react";
import Image from "next/image";
import MenuOptions from "./MenuOptions";

export default function Navbar() {
    const { categories, setCategories } = useGlobalContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    

    const toggleSetCategory = (newCategory: string | null) => {
        if (newCategory === null) {
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
    return (<header className="
        flex sm:flex-row
        top-0 left-0 sticky
        md:justify-between
        md:items-center
        py-4 px-8 bg-white  mb-2">
        <span className="text-2xl cursor-pointer font-bold" onClick={() => toggleSetCategory(null)} >María Barriga</span>
        <div className="invisible md:visible w-0 h-0 md:w-auto md:h-auto">
            <MenuOptions toggleSetCategory={toggleSetCategory} categories={categories}/>
        </div>
        <div className="visible md:invisible absolute right-0 ">
            <div className="grow flex justify-end pr-[24px]" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                <Image src={isMenuOpen?"/icons/cross-icon.png":"/icons/menu-icon.png"} width="32" height="32" alt="menu" />
            </div>
            <div >
            {isMenuOpen?<MenuOptions toggleSetCategory={toggleSetCategory} categories={categories} isMenuOpen={isMenuOpen} />: ''}
            </div>
            
        </div>
    </header>)
}