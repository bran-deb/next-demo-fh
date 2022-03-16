import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //funcion que retorna los layouts con page o solo page
  const getLayout = Component.getLayout || ((page) => page)

  // return (
  //   <Component {...pageProps} />
  // )
  return getLayout(<Component{...pageProps} />)
}

export default MyApp
