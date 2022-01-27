import Link from 'next/link';

const SSR4 = ({ data }) => {
    return <>
        <h1>Hello {data.name} from SSR3</h1>
        <Link href={'ssr1'}>Visit SSR1 Page</Link>
        <Link href={'ssr2'}>Visit SSR2 Page</Link>
        <Link href={'ssr3'}>Visit SSR3 Page</Link>
    </>
};

SSR4.getInitialProps = async (context) => {
    let apiData = {};
    if (context.req) {
        // Fetch data from external API
        const res = await fetch(`https://test-nextjs-ssr-flow.vercel.app/api/hello`)
        const data = await res.json();
        apiData = data;
    }
    return {apiData};
}

export default SSR4;



