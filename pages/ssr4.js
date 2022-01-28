import Link from 'next/link';
import {useEffect} from "react";
import {useRouter} from "next/router";

const SSR4 = ({ apiData, startTime }) => {
    const router = useRouter();
    useEffect(() => {
        const endTime = Date.now();
        console.log(`The time taken to reach ${router.pathname} is ${(endTime-startTime)} ms`)
    }, []);
    return <>
        <h1>Hello {apiData.name} from SSR4</h1>
        <Link href={'ssr1'}>Visit SSR1 Page</Link>
        <Link href={'ssr2'}>Visit SSR2 Page</Link>
        <Link href={'ssr3'}>Visit SSR3 Page</Link>
    </>
};

SSR4.getInitialProps = async (context) => {
    const startTime = Date.now();
    let apiData = {};
    if (context.req) {
        // Fetch data from external API
        const res = await fetch(`https://test-nextjs-ssr-flow.vercel.app/api/hello`)
        const data = await res.json();
        apiData = data;
    }
    return {apiData, startTime};
}

export default SSR4;



