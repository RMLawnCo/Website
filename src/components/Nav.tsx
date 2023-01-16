import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"
import darkLogo from "../public/logoDark.png"
import DarkLightButton from "./DarkLightButton"

export default function Nav() {
    return (
        <nav className="nav">
            <Link href="/" className="noUnderline centerVertical">
                <Image priority id="lightLogo" src={logo} alt="logo" className="logoImage" />
                <Image priority id="darkLogo" src={darkLogo} alt="logo" className="logoImage" style={{ "display": "none" }} />
            </Link>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/plans">Plans</Link>
                <Link href="/about">About</Link>
                <DarkLightButton />
            </div>
        </nav>
    )
}