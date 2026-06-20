import Link from "next/link";

export default function Navbar() {
    return (

        <nav className="flex justify-between items-center px-8 py-5 border-b bg-slate-200">
            <h1 className="text-2xl font-bold tracking-tight">Frases de Pinguins</h1>
            <ul className="flex gap-8">
                <li>
                    <Link href={"#"} className="text-gray-700 font-medium transition-colors hover:text-black">Home</Link>
                </li>
                <li>
                    <Link href={"#"} className="text-gray-700 font-medium transition-colors hover:text-black">Frases</Link>
                </li>
                <li>
                    <Link href={"#"} className="text-gray-700 font-medium transition-colors hover:text-black">Pinguins</Link>
                </li>
            </ul>
        </nav>

    )
}