import Link from "next/link";

export default function Navbar(){
    return(
        
        <nav>
            <h1>Frases de Pinguins</h1>
            <ul>
                <li>
                    <Link href={"#"}>Home</Link>
                </li>
                <li>
                    <Link href={"#"}>Frases</Link>
                </li>
                <li>
                    <Link href={"#"}>Pinguins</Link>
                </li>
            </ul>
        </nav>             
        
    )
}