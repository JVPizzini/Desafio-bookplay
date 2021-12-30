import React, { useState } from 'react'
import styles from './styles.module.scss'


type RadioProps = {
  title: string,
  // checked: boolean,
  value: number,
}

export function Radio({value, title }: RadioProps) {

  const [selectedRadio, SetSelected] = useState(title);

  const isRadioSelected = (selected):boolean => selected === selectedRadio;
  
  const handleRadioSelect = (event: React.ChangeEvent<HTMLInputElement>):void =>
   {
     SetSelected(event.currentTarget.value)
   };

  return (
    <div className={styles.radioGroup} >
      <label htmlFor="" >
        teste
        <input
          type='radio'
          name={title}
          value={value}
          checked={isRadioSelected(title)}
          onChange={handleRadioSelect}
        >
        </input>
      </label>
    </div>
  )
}