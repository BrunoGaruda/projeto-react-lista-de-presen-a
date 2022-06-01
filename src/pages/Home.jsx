//Numa estrutura jsx você tem uma função que retorna o conteúdo HTML pra ser renderizado
function Home() {
  //Tag JSX precisa ser "embrulhada" para nao dar erro. <> </> ou uma <div>
  return (
    <div>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </div>
  )
}

export default Home
