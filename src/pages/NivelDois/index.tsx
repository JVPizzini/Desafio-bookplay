import { useState, useEffect, useContext } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import { GetServerSideProps } from "next"
import styles from './styles.module.scss'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { api, SearchList } from '../../services/api'

export default function NivelDois(/* { bookList, loadingStatus } */) {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {

    window.localStorage.setItem('url', '/NivelDois')  

    setLoading(true);

    SearchList('')
      .then(result => setItemList(result))
      .catch(
        result => {
          router.push('/404');
        }
      );

    const time = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => { clearTimeout(time); }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <Head>
        <title>Challenge | Level 2 </title>
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
            <h3> ➡️  2º challenge : </h3>
            <p>
              Come on, use the following URL to access our top 10 most accessed at the moment!
              Insert a preloader and handle the error if the request fails.
              https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos
            </p>
          </div>
          <h1>🧾 LIST </h1>
          {
            itemList.map(book => (
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

