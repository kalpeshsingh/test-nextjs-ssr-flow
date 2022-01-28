import Link from 'next/link';
import { format } from 'date-fns';
import {useEffect} from "react";
import {useRouter} from "next/router";



const SSR3 = ({ apiData, startTime }) => {
    const router = useRouter();
    useEffect(() => {
        const endTime = Date.now();
        console.log(`The time taken to reach ${router.pathname} is ${(endTime-startTime)} ms`)
    }, []);
    return <>
        <h1>Hello {apiData.name} from SSR3</h1>
        <small>{apiData.date}</small>
        <Link href={'ssr1'}>Visit SSR1 Page</Link>
        <Link href={'ssr2'}>Visit SSR2 Page</Link>
        <Link href={'ssr4'}>Visit SSR4 Page</Link>
    </>
};

SSR3.getInitialProps = async (context) => {
    const startTime = Date.now();
    let apiData = {};
    if (context.req) {
        // Fetch data from external API
        const res = await fetch(`https://test-nextjs-ssr-flow.vercel.app/api/pokemon`)
        const data = await res.json();
        apiData = Object.assign({}, data, {date: format(new Date(), "'Today is a' eeee")});
    }
    return {apiData, startTime};
}
export default SSR3;




