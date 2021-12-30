import styles from './styles.module.scss'
import image from 'next/image'
import { Header } from '../../components/Header'
import { CircularButton } from '../../components/CircularButton'
import Head from 'next/head'

export default function Custom404() {
  return (


      <div className={styles.main}>
      <Head>
        <title>Challenge | 404 </title>
      </Head>
        <h1>404</h1>
        <p>Oops! Algo deu errado por aqui 😴.</p>
        <CircularButton name={'Recarregar'} link={'/'} />
      </div>


  )
}