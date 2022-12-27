import '../Campo/campo.css';

interface CampoProps {
  type?: string;
  label: string;
  placeholder: string;
  valor: string;
  aoAlterado: (valor: string) => void
  obrigatorio?: boolean;
}

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio }: CampoProps) => {

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    aoAlterado(e.target.value)
  }

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        value={valor}
        type={type}
        onChange={onChange}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Campo