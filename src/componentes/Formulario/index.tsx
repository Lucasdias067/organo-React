import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import '../Formulario/formulario.css'
import { IColaborador } from '../../types/interface/colaborador'
import { ITimes } from '../../types/interface/times'
import { v4 as uuidv4 } from 'uuid';

interface formularioProps {
  aoCadastrar: (valor: IColaborador) => void,
  times: string[],
  cadastrarTime: (valor: ITimes) => void
}

const Formulario = ({ aoCadastrar, times, cadastrarTime }: formularioProps) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setnomeTime] = useState('')
  const [corTime, setcorTime] = useState('')


  const aoSubmeter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
      id: uuidv4()
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card</h2>
        <Campo
          obrigatorio={true}
          label='Nome'
          placeholder='Digite seu nome '
          valor={nome}
          aoAlterado={valor => setNome(valor)} />
        <Campo
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite seu cargo '
          valor={cargo}
          aoAlterado={valor => setCargo(valor)} />
        <Campo
          label='Imagem'
          placeholder='Informe o endereço da imagem '
          valor={imagem}
          aoAlterado={valor => setImagem(valor)} />
        <ListaSuspensa
          obrigatorio={true}
          label='Times'
          items={times}
          valor={time}
          aoAlterado={valor => setTime(valor)} />
        <Botao text='Criar card' />
      </form>
      <form className="formulario" onSubmit={e => {
        e.preventDefault();
        cadastrarTime({ nome: nomeTime, cor: corTime, id: uuidv4()})
        setnomeTime('')
        setcorTime('')
      }}>
        <h2>Preencha os dados para criar o time</h2>
        <Campo
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome do time '
          valor={nomeTime}
          aoAlterado={valor => setnomeTime(valor)}
        />
        <Campo
          type='color'
          obrigatorio={true}
          label='Cor'
          placeholder='Digite a cor do time '
          valor={corTime}
          aoAlterado={valor => setcorTime(valor)}
        />
        <Botao text='Criar um novo time' />
      </form>
    </section>
  )
}

export default Formulario