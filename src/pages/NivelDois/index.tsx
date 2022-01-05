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

  }, []);
  
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
            <p>Vamos lá, utilize a seguinte URL para ter acesso aos nossos top 10 mais acessados do momento!
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

