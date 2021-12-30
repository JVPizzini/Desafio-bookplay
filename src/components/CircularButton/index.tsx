import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './styles.module.scss'

type ButtonProps = {
  name: string,
  link: string,
}

export function CircularButton({ name, link }: ButtonProps) {

  const router = useRouter();

  function handleLink() {
    router.push(link)
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleLink}
    >
      <Image 
      src='https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-10.png' 
      alt="botaoRedondo"
      width={40}
      height={40}/>
      {name}
    </button>
  )
}