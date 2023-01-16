import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flexVertical">
                <Link href="/tos">Terms of Service</Link>
                <Link href="/privacypolicy">Privacy Policy</Link>
            </div>
            <Link href="/" className="noUnderline centerVertical">
                <Image priority src={logo} alt="img" className="logoImage" />
            </Link>
        </footer>
    )
}