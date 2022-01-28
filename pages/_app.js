import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const t0 = Date.now();
  return <Component {...pageProps} startTime={t0} />
}

export default MyApp
