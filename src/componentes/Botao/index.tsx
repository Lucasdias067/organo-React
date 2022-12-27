import '../Botao/botao.css';

interface BotaoProps {
  text: string
}

const Botao = ({ text }: BotaoProps) => {
  return (
    <button className="botao" type='submit'>
      {text}
    </button>
  )
}

export default Botao