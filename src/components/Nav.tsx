export default function Nav() {
    return (
        <nav className="nav">
            <a href="/" className="noUnderline centerVertical">
                <img src="logo.png" alt="img" className="logoImage" />
            </a>
            <div className="links">
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
                <a href="/plans">Plans</a>
                <a href="/about">About</a>
            </div>
        </nav>
    )
}