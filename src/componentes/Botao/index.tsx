import { Button } from "styles/styles";

interface BotaoProps {
  text: string
}

const Botao = ({ text }: BotaoProps) => {
  return (
    <Button>
      {text}
    </Button>
  )
}

export default Botao