import Head from "next/head";
import Nav from "./Nav";

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description"
                    content="RMLawnCo is a landcare and landscaping comany. We provide amazing lawnmowing and landcare to landscapes in the Fairview Heights, Illinois area, all of this at an affordable price!" />
                <meta name="keywords"
                    content="RMLawnCo, landscaping, landcare, lawnmowing, landmower RMlawn, rm lawnco, rmlawn co, rm lawn co, landscapers, hire, landscapers" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <title>RMLawnCo</title>
            </Head>
            <Nav />
            <main>{children}</main>
        </>
    )
}