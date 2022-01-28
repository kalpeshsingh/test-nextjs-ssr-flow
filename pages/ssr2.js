import Link from 'next/link';
import {useEffect} from "react";

const SSR2 = ({ data, startTime }) => {
    useEffect(() => {
        const endTime = Date.now();
        console.log(`The time taken to reach here is ${(endTime-startTime)} ms`)
    }, []);
    return <>
        <h1>Hello {data.name}</h1>
        <p>How is your day going so far?</p>
        <Link href={'ssr1'}>Visit SSR1 Page</Link>
        <Link href={'ssr3'}>Visit SSR3 Page</Link>
        <Link href={'ssr4'}>Visit SSR4 Page</Link>
    </>
};

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://test-nextjs-ssr-flow.vercel.app/api/pokemon`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default SSR2;

