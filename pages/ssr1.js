import Link from 'next/link';

const SSR1 = ({ data }) => {
    return <>
        <h1>Hello {data.name}</h1>
        <Link href={'ssr2'}>Visit SSR2 Page</Link>
    </>
};

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/hello`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default SSR1;

