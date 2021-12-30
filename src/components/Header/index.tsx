
import { Button } from '../Button'
import styles from './styles.module.scss'
import {useRouter} from 'next/router'
import Image from 'next/image';

export function Header() {

  const router = useRouter();

  function handleLink() {
    router.push('/NivelDois')
  }

  return (

    <header className={styles.headerContainer} >
      <div className={styles.headerContext}>
        <Image 
         onClick ={handleLink} 
         src="https://bookplay.com.br/produto/1/logo.svg" 
         alt="logo-bookplay"
         width={200} 
         height={200} 
         />
        <span> <p>Desafio</p>  </span>
        <Button name="Nível 1" link="/NivelUm" />
        <Button name="Nível 2" link="/NivelDois" />
        <Button name="Nível 3" link="/NivelTres" />
      </div>

    </header>

  )
}