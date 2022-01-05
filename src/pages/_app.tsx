//Next
import { AppProps } from 'next/app';
import { useState } from 'react';

//Components
import { Header } from '../components/Header';
import { currentUrl } from '../useContext';

//Styles
import '../styles/global.scss'


function MyApp({ Component, pageProps }: AppProps) {

  const [url, setUrl] = useState('')

  return (
    <>
      <currentUrl.Provider value={{url,setUrl}}>
        <Header />
        <Component {...pageProps} />
      </currentUrl.Provider>
    </>)
}

export default MyApp
