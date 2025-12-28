import './temas.estilos.css'

export default function Temas({ tema }) {
  return (
    <>
      <h3 className='titulo-tema'>{tema.nome}</h3>
    </>
  )
}