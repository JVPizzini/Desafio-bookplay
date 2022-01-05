import { GetServerSideProps } from "next"
import Head from "next/head"
import styles from './styles.module.scss'

export default function NivelUm({ bookList }) {
  
  window.localStorage.setItem('url','/NivelUm')

  return (
    <>
      <Head>
        <title>Challenge | Level 1  </title>
      </Head>

      <div className={styles.main}>
        <div className={styles.infoChallenge}>
          <h3> ➡️  1º Challenge </h3>
          <p>A webpage to list the top 10 most accessed Bookplay titles.</p>
        </div>
        <h1>🧾 List </h1>
        {bookList.map(book => (
          <div key={book.CodLivro} className={styles.container}>
            <p>Nome: {book.Nome} </p>
            <span>
              <p>CodConteudo: {book.CodConteudo}</p>
              <p>CodLivro: {book.CodLivro}</p>
            </span>
          </div>
        ))}

      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const { data } = require('../../services/lista.json')

  if (!data) {
    return {
      notFound: true,
    }
  }

  return { props: { bookList: data } }
}