'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    
    return (<header className="flex flex-col justify-center items-center mt-4">
        <span className="text-6xl font-bold"><Link href="/"> María Barriga</Link></span>
        <ul className="flex gap-4 text-2xl pt-2">
            {pathname !=="/" && <li><Link href="/"> Illustration</Link></li>}
            {pathname !=="/motion" &&<li><Link href="/motion">Motion</Link></li>}
            <li><Link href="/about"> About</Link></li>
            <li><Link href="/contact"> Contact</Link></li>
        </ul>
    </header>)
}