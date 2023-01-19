import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"
import darkLogo from "../public/logoDark.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flexVertical">
                <Link href="/tos" className="footerLink">Terms of Service</Link>
                <Link href="/privacypolicy" className="footerLink">Privacy Policy</Link>
            </div>
            <Link href="/" className="noUnderline centerVertical">
                <Image priority id="lightLogo2" src={logo} alt="logo" className="logoImage" />
                <Image priority id="darkLogo2" src={darkLogo} alt="logo" className="logoImage" style={{ "display": "none" }} />
            </Link>
        </footer>
    )
}