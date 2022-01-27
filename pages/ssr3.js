import Link from 'next/link';

const SSR3 = ({ data }) => {
    return <>
        <h1>Hello {data.name} from SSR3</h1>
        <Link href={'ssr1'}>Visit SSR1 Page</Link>
        <Link href={'ssr2'}>Visit SSR2 Page</Link>
        <Link href={'ssr4'}>Visit SSR4 Page</Link>
    </>
};

SSR3.getInitialProps = async (context) => {
    let apiData = {};
    if (context.req) {
        // Fetch data from external API
        const res = await fetch(`https://test-nextjs-ssr-flow.vercel.app/api/pokemon`)
        const data = await res.json();
        apiData = data;
    }
    return {apiData};
}
export default SSR3;




