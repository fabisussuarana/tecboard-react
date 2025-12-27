import './campo-entrada.estilos.css'

export function CampoDeEntrada(props) {
  return (
    // pega todas as propriedades e repassa para o input (ex.: type, id, placeholder, etc)
    <input {...props} className='campo-entrada-form'/>
  )
} 