import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description"
                    content="RMLawnCo is a landcare and landscaping comany. We provide amazing lawnmowing and landcare to landscapes in the Fairview Heights, Illinois area, all of this at an affordable price!" />
                <meta name="keywords"
                    content="RMLawnCo" />
                <link rel="shortcut icon" href="/favicon.ico?v=2" />

                <title>RMLawnCo</title>
            </Head>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    )
}