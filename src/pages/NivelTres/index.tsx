import { useState, useEffect } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import styles from './styles.module.scss'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ItemsListType, SearchList } from '../../services/api';
import { ComboListBox } from '../../components/ComboListBox';
// import { getRedis, setRedis } from '../../redisConfig';

function handleItemsLink(codLivro) {
  window.open(`https://bookplay.com.br/conteudo/${codLivro}`, '_blank');
}

export default function NivelTres(/* { bookList, loadingStatus } */) {

  const router = useRouter();
  const [codItem, setCodItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [teste, setTeste] = useState('');
  // Caso não consiga a conexão, mandar para a page de NotFound

  function handleSelectItem(value) {
    // console.log(value);
    setCodItem(value);
  }

  // async function cacheList() {

  //   const userRedis = await getRedis(`lista${codItem}`);

  //   if (userRedis) {

  //     setItemList(userRedis)

  //   } else {

  //     SearchList(codItem)
  //       .then(result => setItemList(result))
  //       .then(result => setRedis(`lista${codItem}`, JSON.stringify(result)))
  //       .catch(
  //         result => {
  //           router.push('/404');
  //         }
  //       );
  //   }
  // }

  useEffect(() => {

    setLoading(true);

    // cacheList()

    SearchList(codItem)
      .then(result => setItemList(result))
      // .then(result => setRedis(`lista${codItem}`, JSON.stringify(result)))
      .catch(
        result => {
          router.push('/404');
        }
      );

    const time = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => { clearTimeout(time); }

  }, [codItem]);

  return (
    <>
      <Head>
        <title>Desafio | Nível 3 </title>
      </Head>

      <div className={styles.main} >
        <div className={styles.infoChallenge}>
          <h3> ➡️  Terceiro teste : </h3>
          <p>Crie um seletor da maneira que achar melhor (rádio, combobox, etc).
            Envie o código correspondente na URL da requisição. Linkar produtos
          </p>
        </div>
        <h1>🧾 LISTA </h1>
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
          (
            <>
              <ComboListBox name="ListItemsType" list={ItemsListType} getItem={handleSelectItem} />
              {itemList &&
                itemList.map(book => (
                  <div
                    key={book.CodLivro}
                    className={styles.container}
                  >
                    <a onClick={() => { handleItemsLink(book.CodLivro) }} >
                      <p>Nome: {book.Nome} </p>
                      <span>
                        <p>CodConteudo: {book.CodConteudo}</p>
                        <p>CodLivro: {book.CodLivro}</p>
                      </span>
                    </a>
                  </div>
                ))
              }
            </>)
        }
      </div >
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {

//   // const userRedis = await getRedis('lista');
//   // console.log(`TEEEEESTE ${userRedis}`)

//   // if(userRedis){
//   //   return
//   // }

//   try {

//     const res = await api.get('parceiros/6BB6F620/recrutamento/top10/acessos')
//     const { data } = res.data;
//     //  console.log(data);

//     //  setRedis('lista',JSON.stringify(data));

//     return {
//       props:
//       {
//         bookList: data,
//         loadingStatus: false,
//       }
//     }

//   } catch (error) {
//     return {
//       notFound: true,
//     }
//   }
// }
