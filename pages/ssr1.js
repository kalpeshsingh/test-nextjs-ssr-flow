import Link from 'next/link';

const SSR1 = ({ data }) => {
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
    // Fetch data from external API
    const res = await fetch(`https://test-nextjs-ssr-flow.vercel.app/api/hello`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default SSR1;

