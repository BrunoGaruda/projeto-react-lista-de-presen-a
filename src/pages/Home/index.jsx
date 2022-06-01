import React, { useState } from 'react' // Necessário a (hook = useState) importação para refletir a "let" na interface
import './styles.css'

import { Card } from '../../components/Card'

//Numa estrutura jsx você tem uma função que retorna o conteúdo HTML pra ser renderizado
export function Home() {
  const [studentName, setstudentName] = useState()
  const [students, setStudents] = useState([])

  //Vai ser criado um novo objeto adicionado o nome pegando do estado no condeúdo do  input e o time no horário atual "toLocaleDateString"
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    //Com essa função você consegue recuperar o antigo studend e adicinando um novo ao vetor

    //... serve para evitar que o prevState crie um novo vetor, despejando todos em um mesmo vetor.
    setStudents(prevState => [...prevState, newStudent])
  }

  function handleNameChange(name) {
    studentName = name
  }
  //Tag JSX precisa ser "embrulhada" para nao dar erro. <> </> ou uma <div>
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        //Pegando o conteúdo atual do input e atualizando o estado com setstudentName
        onChange={e => setstudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map(student => (
        //foi idicionado a "key={student.time}" para evitar bugs, pois caso haja um estudando com o mesmo nome vai gerar erro.
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  )
}
