import { useState, useEffect, useRef } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";
import { ItemsListType, SearchList } from "../../services/api";
import { ComboListBox } from "../../components/ComboListBox";

// import { getRedis, setRedis } from '../../redisConfig';

function handleItemsLink(codLivro) {
  window.open(`https://bookplay.com.br/conteudo/${codLivro}`, "_blank");
}

export default function NivelTres(/* { bookList, loadingStatus } */) {
  const router = useRouter();
  const [codItem, setCodItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleSelectItem(value) {
    setCodItem(value);
  }

  useEffect(() => {
    window.localStorage.setItem("url", "/NivelTres");

    let idList = `List-${codItem}`;
    const localSt = localStorage.getItem(idList) ?? "";
    const resultList = localSt && JSON.parse(localSt);

    if (resultList) {

      setItemList(resultList);

    } else {

      setLoading(true);

      SearchList(codItem)
        .then((result) => {
          setItemList(result);
          window.localStorage.setItem(idList, JSON.stringify(result));
        })
        .catch((result) => {
          router.push("/404");
        });
    }

    const time = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codItem]);

  return (
    <>
      <Head>
        <title>Challenge | Lavel 3 </title>
      </Head>

      <div className={styles.main}>
        <div className={styles.infoChallenge}>
          <h3> ➡️ 3º challenge : </h3>
          <p>
            Create a selector in whatever way you like (radio, combobox, etc).
            Submit the corresponding code in the request URL. link products
          </p>
        </div>
        <h1>🧾 LIST </h1>
        <ComboListBox
          name="ListItemsType"
          list={ItemsListType}
          getItem={handleSelectItem}
        />
        {loading ? (
          <div className={styles.spinner}>
            <h2>Loading...</h2>
            <BeatLoader
              size={30}
              color={"#FFFF " /* 'white' */}
              loading={loading}
            />
          </div>
        ) : (
          <>
            {itemList &&
              itemList.map((book) => (
                <div key={book.CodLivro} className={styles.container}>
                  <a
                    onClick={() => {
                      handleItemsLink(book.CodLivro);
                    }}
                  >
                    <p>Nome: {book.Nome} </p>
                    <span>
                      <p>CodConteudo: {book.CodConteudo}</p>
                      <p>CodLivro: {book.CodLivro}</p>
                    </span>
                  </a>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
}
