
import { Button } from '../Button'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image';

export function Header() {

  let name = "joao vitor pizzini"

  if (name.length > 10) {
    name = name.substring(0, 10) + ' ...'
  }

  const router = useRouter();

  function handleLink() {
    router.push('/')
  }

  return (

    <header className={styles.headerContainer} >
      <div className={styles.headerContext}>
        <Image
          onClick={handleLink}
          src="https://bookplay.com.br/produto/1/logo.svg"
          alt="logo-bookplay"
          width={200}
          height={200}
        />
        <span>
          <p>Challenge</p>
        </span>
        <Button name="Level 1" link="/NivelUm"   />
        <Button name="Level 2" link="/NivelDois" />
        <Button name="Level 3" link="/NivelTres" />
      </div>

      <div className={styles.Login}>
        <p>
          {name}
        </p>
        <span />
      </div>
    </header>
  )
}