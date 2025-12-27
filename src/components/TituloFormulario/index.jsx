import './titulo-formulario.estilos.css'

// UMA DAS FORMAS DE PASSAR PROPS
// function TituloFormulario(props) {
//   return (
//     <h2>{props.children}</h2>
//   )
// }
// outra forma de passar props - DESESTRUTURAÇÃO
export function TituloFormulario({ children }) {
  return (
    <h2 className='titulo-form'>{children}</h2>
  )
} 