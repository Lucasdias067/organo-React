import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'
import { ITimes } from '../../types/interface/times'
import { IColaborador } from '../../types/interface/colaborador';
import { ContainerTimes } from 'styles/styles';

interface timeProps {
  time: ITimes;
  colaboradores: IColaborador[];
  mudarCor: (e: string, time: string) => void;
  aoDeletar: (valor: string) => void
  aoFavoritar: (valor: string) => void
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: timeProps) => {
  return (
    colaboradores.length > 0 ?
      <ContainerTimes style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
        <input type='color' value={time.cor} onChange={(e: React.ChangeEvent<HTMLInputElement>) => mudarCor(e.target.value, time.id)} />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className='div-times'>
          {colaboradores.map((colaborador) =>
            <Colaborador
              key={colaborador.id}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />)}
        </div>
      </ContainerTimes> : <></>
  )
}

export default Time