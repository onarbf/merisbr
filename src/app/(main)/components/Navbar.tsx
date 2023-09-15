'use client'
import Link from "next/link";
import { useGlobalContext } from "../context/store";
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const { categories, setCategories } = useGlobalContext();
    const router = useRouter();

    const toggleSetCategory = (newCategory: string | null) => {
        console.log('redirecting')
        if (newCategory === null ) {
            console.log('null')
            setCategories([])
            router.push('/')
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
        router.push('/')
    }

    return (<header className="flex flex-col sm:flex-row
        top-0 left-0 sticky
        justify-between items-center
        py-4 px-8 bg-white border-b border-slate-600 mb-2">
        <span className="text-2xl cursor-pointer font-bold" onClick={() => toggleSetCategory(null)} >María Barriga</span>
        <ul className="flex gap-4 text-xl pt-2">
            <li className={`cursor-pointer `} onClick={() => toggleSetCategory('Illustration')}>  

                <h4 className="">Illustration</h4>
            </li>
            <li className={`cursor-pointer `} onClick={() => toggleSetCategory('Motion')}>
            <h4>Motion</h4></li>
            <li><Link href="/about"><h4>About</h4></Link></li>
            <li><Link href="/contact"> <h4>Contact</h4></Link></li>
        </ul>
    </header>)
}