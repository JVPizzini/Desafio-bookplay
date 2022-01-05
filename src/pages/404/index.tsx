import styles from './styles.module.scss'
import image from 'next/image'
import { Header } from '../../components/Header'
import { ReloadButton } from '../../components/ReloadButton'
import Head from 'next/head'
import { useContext, useEffect, useRef } from 'react'
import { currentUrl } from '../../useContext'

export default function Custom404() {

  const {url} = useContext(currentUrl)
  const urlReload = useRef('')

 // COLOCAR O LOCALSTORAGE DENTRO DAS PAGES!!!
  useEffect(() => {
  
    urlReload.current = localStorage.getItem('reload')
  },[])

  return (

    <div className={styles.main}>
      <Head>
        <title>Error | 404 </title>
      </Head>
      <h1>404</h1>
      <p>Oops! something went wrong 😴.</p>
      <ReloadButton name={'Reload'} link={urlReload.current} />
    </div>
  )
}