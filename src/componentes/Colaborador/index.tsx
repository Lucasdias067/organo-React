import { Close, ContainerColaborador, ContainerColaboradorCard } from 'styles/styles';
import { IColaborador } from '../../types/interface/colaborador';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface ColaboradorProps {
  colaborador: IColaborador;
  corDeFundo: string;
  aoDeletar: (valor: string) => void
  aoFavoritar: (valor: string) => void
}

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }: ColaboradorProps) => {

  function favoritar() {
    aoFavoritar(colaborador.id)
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar
  }

  return (
    <ContainerColaborador>
      <Close
        size={25}
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <ContainerColaboradorCard >
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className='favoritar'>
          {colaborador.favorito ? <AiFillHeart {...propsFavorito} color='#ff0000' /> : <AiOutlineHeart {...propsFavorito} />}
        </div>
      </ContainerColaboradorCard>
    </ContainerColaborador>)
}

export default Colaborador