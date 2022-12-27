import './lista-suspensa.css'

interface ListaSuspensaProps {
  items: string[];
  label: string;
  valor: string;
  aoAlterado: (valor: string) => void
  obrigatorio?: boolean;
}

const ListaSuspensa = ({ label, items, valor, aoAlterado, obrigatorio }: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={e => aoAlterado(e.target.value)}>
        <option />
        {items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa