import { ContainerInput } from 'styles/styles';

interface CampoProps {
  type?: string;
  label: string;
  placeholder: string;
  valor: string;
  aoAlterado: (valor: string) => void
  obrigatorio?: boolean;
}

export default function Campo({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio }: CampoProps) {

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    aoAlterado(e.target.value)
  }

  return (
    <ContainerInput>
      <label>{label}</label>
      <input
        value={valor}
        type={type}
        onChange={onChange}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </ContainerInput>
  )
}

