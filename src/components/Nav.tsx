import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"

export default function Nav() {
    return (
        <nav className="nav">
            <Link href="/" className="noUnderline centerVertical">
                <Image priority src={logo} alt="img" className="logoImage" />
            </Link>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/plans">Plans</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    )
}