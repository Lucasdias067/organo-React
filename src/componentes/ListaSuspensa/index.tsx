import { ContainerTimesInput } from "styles/styles";

interface ListaSuspensaProps {
  items: string[];
  label: string;
  valor: string;
  aoAlterado: (valor: string) => void
  obrigatorio?: boolean;
}

const ListaSuspensa = ({ label, items, valor, aoAlterado, obrigatorio }: ListaSuspensaProps) => {
  return (
    <ContainerTimesInput >
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={e => aoAlterado(e.target.value)}>
        <option />
        {items.map(item => <option key={item}>{item}</option>)}
      </select>
    </ContainerTimesInput>
  )
}

export default ListaSuspensa