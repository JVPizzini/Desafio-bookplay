import { useRouter } from 'next/router'
import styles from './styles.module.scss'
import React, { useContext } from 'react'
import { currentUrl } from '../../useContext';

interface ButtonProps  {
  name: string,
  link: string,
}

export function Button({ name, link }: ButtonProps) {

  const router = useRouter();
  const {setUrl} = useContext(currentUrl)

  function handleLink() {
    setUrl(link)
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
