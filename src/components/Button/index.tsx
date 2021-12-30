import { useRouter } from 'next/router'

import styles from './styles.module.scss'

type ButtonProps = {
  name: string,
  link: string,
}

export function Button({ name, link }: ButtonProps) {

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
      {name}
    </button>
  )
}
