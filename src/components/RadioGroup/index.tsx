import { Radio } from './Radio';

import styles from './styles.module.scss'

export function RadioGroup() {
  return (
    <div className={styles.main}>
      <Radio value={1} title={'Livros'} />
      <Radio value={2} title={'Cursos'} />
      <Radio value={3} title={'Videoaulas'} />
      <Radio value={5} title={'Banca'} />
      <Radio value={6} title={'Audiobooks'} />
    </div>
  )
}