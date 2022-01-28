import Link from 'next/link';
import {useEffect} from "react";
import {useRouter} from "next/router";

const SSR1 = ({ data, startTime }) => {
    const router = useRouter();
    useEffect(() => {
        const endTime = Date.now();
        console.log(`The time taken to reach ${router.pathname} is ${(endTime-startTime)} ms`)
    }, []);
    return <>
        <h1>Hello {data.name}</h1>
        <p>How are you?</p>
        <Link href={'ssr2'}>Visit SSR2 Page</Link>
        <Link href={'ssr3'}>Visit SSR3 Page</Link>
        <Link href={'ssr4'}>Visit SSR4 Page</Link>
    </>
};

// This gets called on every request
export async function getServerSideProps() {
    const startTime = Date.now();
    // Fetch data from external API
    const res = await fetch(`https://test-nextjs-ssr-flow.vercel.app/api/hello`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data, startTime } }
}

export default SSR1;

