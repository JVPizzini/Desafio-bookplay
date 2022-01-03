import { useState, useEffect } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import { GetServerSideProps } from "next"
import styles from './styles.module.scss'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { api } from '../../services/api';


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

  function handledItemsLink(codLivro) {
    const link = window.open(`https://bookplay.com.br/conteudo/${codLivro}`, '_blank');
    console.log(codLivro)
    console.log(link)
  }

  function handleFilterItems(event){
   console.log(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Desafio | Nível 3 </title>
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
            <h3> ➡️  Terceiro teste : </h3>
            <p>Crie um seletor da maneira que achar melhor (rádio, combobox, etc).
              Envie o código correspondente na URL da requisição. Linkar produtos
            </p>
          </div>
          <h1>🧾 LISTA </h1>

          {
            bookList.map(book => (
              <div
                key={book.CodLivro}
                className={styles.container}
              >
                <a onClick={() => { handledItemsLink(book.CodLivro) }} >
                  <label htmlFor="
                  ">

                  </label>
                  <p>Nome: {book.Nome} </p>

                  <span>
                    <p>CodConteudo: {book.CodConteudo}</p>
                    <p>CodLivro: {book.CodLivro}</p>
                  </span>
                </a>
              </div>
            ))
          }
        </div >)
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {


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
