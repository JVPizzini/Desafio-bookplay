import { useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.scss'

type ComboBoxProps = {
  name: string,
  list: string[][],
  getItem: (value: string) => void
}

export function ComboListBox({ name, list, getItem }: ComboBoxProps) {

  function handleCodList(event){
    return getItem(event.target.value)
  }


  return (
    <div className={styles.main} >
      <label htmlFor="itemsType" >what do you prefer to see today? </label>
      <select name={name} id={name} className={styles.comboBox} onChange={handleCodList/* (e) => getItem(e.target.value) */} >
        {list.map(item => (
          <option key={item[1]} value={item[0]}>{item[1]} </option>
        ))}
      </select>
    </div>
  )
}

/*
1: Livros
2: Cursos
3: Videoaulas
5: Banca
6: Audiobooks
*/
