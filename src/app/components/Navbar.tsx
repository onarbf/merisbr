import Link from "next/link";

export default async function Navbar() {
    return (<header className="flex justify-between">
        <span>Maria Barriga</span>
        <ul className="flex gap-2">
            <li><Link href="/"> Illustration</Link></li>
            <li><Link href="/motion">Motion</Link></li>
            <li><Link href="/about"> About</Link></li>
        </ul>
    </header>)
}