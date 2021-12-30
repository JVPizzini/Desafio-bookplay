//Next
import { AppProps } from 'next/app';

//Components
import { Header } from '../components/Header';

//Styles
import '../styles/global.scss'

function MyApp({Component, pageProps}: AppProps)  {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>)
}

export default MyApp
