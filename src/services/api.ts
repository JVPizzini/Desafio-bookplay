import axios from "axios";

export const api = axios.create({
  baseURL: 'https://bmain.bookplay.com.br/',
});

export const SearchList = async function (codItem) {

  const res = await api.get(`parceiros/6BB6F620/recrutamento/top10/acessos/${codItem}`)
  const { data } = res.data;
  return data

}

export const ItemsListType = [["1", "Livros"], ["2", "Cursos"], ["3", "Videoaulas"], ["5", "Banca"], ["6", "Audiobooks"]];
