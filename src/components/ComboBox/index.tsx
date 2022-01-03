

export function ComboBox() {
  return (
    <div>
      <label htmlFor="cars">Choose a car:</label>

      <select name="cars" id="cars" /* onChange={} */>
        <option value="1">Livros</option>
        <option value="2">Cursos</option>
        <option value="3">Videoaulas</option>
        <option value="5">Banca</option>
        <option value="6">Audiobooks</option>

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
