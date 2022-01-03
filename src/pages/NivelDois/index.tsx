import { useState, useEffect } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import { GetServerSideProps } from "next"
import styles from './styles.module.scss'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { api } from '../../services/api'

export default function NivelDois({ bookList, loadingStatus, notFound }) {

  const [loading, setLoading] = useState(true);
  // Caso não consiga a conexão, mandar para a page de NotFound
  useEffect(() => {
    setTimeout(() => {
      setLoading(loadingStatus);
    }
      , 2000)
  }, [loadingStatus]);

  const router = useRouter();
  if (notFound) return router.push('/NotFound');

  return (
    <>
      <Head>
        <title>Desafio | Nível 2 </title>
      </Head>

      {loading ?
        (
          <div className={styles.spinner}>
            <h2>Loading...</h2>
            <BeatLoader
              size={30}
              color={'#FFFF '/* 'white' */}
              loading={loading}
            />
          </div>
        )
        :
        (<div className={styles.main} >
          <div className={styles.infoChallenge}>
            <h3> ➡️  Segundo teste : </h3>
            <p>Vamos lá, utilize a seguinte URL para ter acesso aos nossos top 10 mais acessados do momento!
              https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos
            </p>
          </div>
          <h1>🧾 LISTA </h1>
          {
            bookList.map(book => (
              <div key={book.CodLivro} className={styles.container}>
                <p>Nome: {book.Nome} </p>
                <span>
                  <p>CodConteudo: {book.CodConteudo}</p>
                  <p>CodLivro: {book.CodLivro}</p>
                </span>
              </div>
            ))
          }
        </div >)}
    </>
  )

}

export const getServerSideProps: GetServerSideProps = async () => {

  // const res = await fetch('https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos');
  try {
    const res = await api.get('parceiros/6BB6F620/recrutamento/top10/acessos')

    const { data } = res.data;
    // console.log(data);

    return {
      props:
      {
        bookList: data,
        loadingStatus: false,
      }
    }

  } catch (error) {
        return {
      notFound: true,
    }
  }
}
