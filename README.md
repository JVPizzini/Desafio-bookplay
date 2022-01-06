

  #   [Desafio Bookplay](https://github.com/danilo900/recrutamento-bookplay)
       Realizado por João vitor
  ##

  Desafio consiste em 4 níveis, onde cada um possui seu grau de dificuldade.
  O prejto onde se encontram as resoluções de cada nível foi realizado com as seguintes ferramentas.

  * Next.js (framework da biblioteca React)
  * Axios
  * SASS
  * Github
  * Typescript

  Obs: Foi utilizado o framework Next.js pois essa ferramenta dispensa algumas pré configurações do CRA (Create React App), facilitando nas rotas entre páginas e ainda oferece     um SSR (Server Side Rendering) que possíbilita a utilização de um servidor próprio para manupular dados no  back-end.
  # 

  # Aplicação

  > Linguagem
  * aplicação foi toda desenvolvida em inglês (pelo menos essa foi a intenção 😳)

  >_app
  * No arquivo _app foi adicionado o componente <Header/> tornando-se padrão na tela e evitando carregamento desnecessário.
  * Também foi adicionado um useState para salvar url da tela atual. 

  >index.tsx
  * Adicionado um breve texto explicando cada desafio
  * github   
  * linkedin 

- [x] Nível 1 ✔️

  Foi criado uma página simples onde é listado os items do arquivo que foi fornecido pelo desafio.
  Utilizei o SSR para requisitar as informações do .json.
  Para completar, foi feita a leitura do array dos objetos via .map para que cada item da lista fosse renderizado como um item no html.  
 
- [x] Nível 2 ✔️

  Página dois segue o layout padrão da primeira.
  Foi utilizado o Axios para requisitar as informações atravás da API fornecida pelo desafio.
  Armazenamento de url por LocalStorage (para verificar a última url acessada ).
  preload da biblioteca react-spinners.
  Foi inserido um timeout por conta das requisição serem relaivamente rápidas e não estar sendo exibido o proload.
  
- [x] Nível 3 ✔️

  Layout padrão, axios, armazenamento de url, preload, timeout
  Foi incluido o click nas opções da lista, direcionando o usuário ao título dentro do site do bookplay.com.br
  Todas as requisições foram adicionadas ao localStorage, assim evitando a alta quanidade de requisições na API.
  Componente comboBox foi adicionado dando a possíbilidade do usuário escolher entre livros, cursos, video aulas, etc...
  
- [ ] Nível 4 ❌
