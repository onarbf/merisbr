'use client'
import Link from "next/link";
import { useEffect } from "react";
import { useGlobalContext } from "../context/store";
import MarkerIcon from "../icons/marker-icon";

export default function Navbar() {
    const { categories, setCategories } = useGlobalContext();
    const toggleSetCategory = (newCategory: string | null) => {
        if (newCategory === null ) {
            setCategories([])
            return
        }
        if(categories.length === 0){
            setCategories([])
        }
        if (categories.indexOf(newCategory) === -1) {
            setCategories([...categories, newCategory])
        } else {
            categories.splice(categories.indexOf(newCategory), 1)
            setCategories([...categories])
        }



    }

    const isCategoryActive = (category: string) => {
        const isActive = (categories.indexOf(category) !== -1)
        return isActive ? true : false;
    }

    return (<header className="flex flex-col sm:flex-row
        top-0 left-0 sticky
        justify-between items-center
        py-4 px-8 bg-white border-b border-slate-600 mb-2">
        <span className="text-2xl cursor-pointer font-bold" onClick={() => toggleSetCategory(null)} >María Barriga</span>
        <ul className="flex gap-4 text-xl pt-2">
            <li className={`cursor-pointer ${isCategoryActive('Illustration') ? 'underline' : ''}`} onClick={() => toggleSetCategory('Illustration')}>  

                <h4 className="">Illustration</h4>
            </li>
            <li className={`cursor-pointer ${isCategoryActive('Motion') ? 'underline' : ''}`} onClick={() => toggleSetCategory('Motion')}>
            <h4>Motion</h4></li>
            <li><Link href="/about"><h4>About</h4></Link></li>
            <li><Link href="/contact"> <h4>Contact</h4></Link></li>
        </ul>
    </header>)
}