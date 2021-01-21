import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <p>Header acá</p>
    
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
