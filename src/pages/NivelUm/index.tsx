import { GetServerSideProps } from "next"
import Head from "next/head"
import styles from './styles.module.scss'

export default function NivelUm({ bookList }) {

  return (
    <>
      <Head>
        <title>Desafio | Nível 1  </title>
      </Head>

      <div className={styles.main}>
        <div className={styles.infoChallenge}>
          <h3> ➡️  Primeiro teste : </h3>
          <p>Uma página web para listar os top 10 títulos mais acessados do Bookplay.</p>
        </div>
        <h1>🧾 LISTA </h1>
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