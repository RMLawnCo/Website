import Footer from "./Footer"
import Nav from "./Nav"
import Head from "next/head"
import Script from "next/script"

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
                <link rel="canonical" href="https://rmlawnco.com/" />
                <title>RMLawnCo</title>
            </Head>
            <Nav />
            <main>{children}</main>
            <Footer />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-KGPFN9LEHN" strategy="afterInteractive"></Script>
            <Script
                id='google-analytics'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-KGPFN9LEHN', {
                                page_path: window.location.pathname,
                            });
                        `,
                }}
            />
        </>
    )
}