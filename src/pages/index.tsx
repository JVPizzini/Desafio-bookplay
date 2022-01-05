
import Head from 'next/head';
import styles from './styles.module.scss'
import Image from 'next/image'
import gitHub from '../../public/images/github.png'
import linkedin from '../../public/images/linkedin.png'

export default function Home() {

  function handleLinks(gitHub) {
    if (gitHub) {
      window.open(`https://github.com/JVPizzini/Desafio-bookplay`, '_blank')
    } else {
      window.open(`https://www.linkedin.com/in/jvpizzini/`, '_blank')
    }
  }
  
  return (
    <>
      <Head>
        <title>Challenge | Bookplay </title>
      </Head>
      <div className={styles.main}>
        <div className={styles.info}>
          <h1> Recruitment process by João Vitor. </h1>
          <h3>The process consists of 4 challenges: </h3>
          <ol>
            <li>
              A simple listing of a list containing 10 items,
              using React, base color #48a0dc and no need for boostrap.
            </li>
            <li>
              Listing of the same list containing 10 items but you need to use our URL to do it.
              Display a preloader and handling a error  when request fails.
            </li>
            <li>
              Create a selector as you want (radio, combobox, etc).
              Research a list according your selector. Create a cache for your
              request and link items on original bookplay site.
            </li>
            <li>
            Create a login / user registration form, only accessible to logged users.
            </li>
          </ol>
        </div>
        <div className={styles.imagens}>
          <div > 
          <Image
            src={gitHub}
            alt="github"
            width={55}
            height={55}
            placeholder='blur'
            onClick={() => handleLinks(1)}
            ></Image>
          </div>
          <div>
 
          <Image
            src={linkedin}
            alt="linkedin"
            width={54}
            height={54}
            placeholder='blur'
            onClick={() => handleLinks(0)}
          ></Image>
          </div>
        </div>
      </div>
    </>
  )
}


