import './styles.css'

import { Card } from '../../components/Card'

//Numa estrutura jsx você tem uma função que retorna o conteúdo HTML pra ser renderizado
export function Home() {
  //Tag JSX precisa ser "embrulhada" para nao dar erro. <> </> ou uma <div>
  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Bruno" time="10:55:25" />
      <Card name="Karol" time="11:22:18" />
    </div>
  )
}
