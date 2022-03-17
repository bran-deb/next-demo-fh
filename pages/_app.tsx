import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'

//es de tipo(page) y si tiene layout es de tipo(reactElement o jsx.element)
type NextPageWithLayout = NextPage &{
  getLayout?: (page: ReactElement)=>ReactNode;
  // getLayout?: ()=>JSX.Element;
}
//creaa un tipo especifico(AppPropsWithLayout) que contiene un componente de tipo(NextPageWithLayout)
type AppPropsWithLayout = AppProps &{
  Component: NextPageWithLayout
}



function MyApp({ Component, pageProps }:AppPropsWithLayout) {
  //funcion que retorna los layouts con page o solo page
  const getLayout = Component.getLayout || ((page) => page)
  // return (
    //   <Component {...pageProps} />
    // )
    return getLayout(<Component{...pageProps} />)
}

export default MyApp
