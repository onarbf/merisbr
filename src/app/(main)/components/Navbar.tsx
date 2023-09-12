'use client'
import Link from "next/link";
import { useEffect } from "react";
import { useGlobalContext } from "../context/store";

export default function Navbar() {
    const {categories, setCategories} = useGlobalContext();
    const toggleSetCategory = (newCategory: string| null)=>{
        if(newCategory === null){
            setCategories(['Illustration','Motion'])
            return
        }
        if(categories.indexOf(newCategory) === -1){
            setCategories([...categories,newCategory])
        }else{
            categories.splice(categories.indexOf(newCategory),1)
            setCategories([...categories])
        }
        
    }

    const isCategoryActive = (category: string)=> {
        const isActive = (categories.indexOf(category) !== -1)
        console.log(isActive)
        return isActive ? true:false;
    }

    return (<header className="flex top-0 left-0 sticky justify-between items-center py-4 px-8 bg-white">
        <span className="text-2xl cursor-pointer" onClick={()=> toggleSetCategory(null)} >María Barriga</span>
        <ul className="flex gap-4 text-2xl pt-2">
        <li  className={`cursor-pointer ${isCategoryActive('Illustration')?'underline':''}`} onClick={()=> toggleSetCategory('Illustration')}>
                Illustration
                </li>
            <li  className={`cursor-pointer ${isCategoryActive('Motion')?'underline':''}`} onClick={()=> toggleSetCategory('Motion')}>Motion</li>
            <li><Link href="/about"> About</Link></li>
            <li><Link href="/contact"> Contact</Link></li>
        </ul>
    </header>)
}