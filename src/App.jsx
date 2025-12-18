import { useState } from 'react'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import './App.css'

// no react componentes são funções

// UMA DAS FORMAS DE PASSAR PROPS
// function TituloFormulario(props) {
//   return (
//     <h2>{props.children}</h2>
//   )
// }
// outra forma de passar props - DESESTRUTURAÇÃO
function TituloFormulario({ children }) {
  return (
    <h2>{children}</h2>
  )
}

function CampoDeFormulario({ children }) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function CampoDeEntrada(props) {
  return (
    <input {...props}/>
  )
}

function FormularioDeEventos() {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario>
        <label htmlFor="nome">Qual o nome do evento?</label>
        <CampoDeEntrada
          type="text"
          id="nome"
          placeholder="Digite o nome do evento"
        />
      </CampoDeFormulario>
    </form>
  )
}

function App() {
  return (
    <>
      <main>
        <header>
          <img src={logo} alt="Logo da tecboard" />
        </header>
        <section>
          <img src={banner} alt="Banner com uma mulher usando óculos virtual e sorrindo." />
        </section>
        <FormularioDeEventos />
      </main>
    </>
  )
}

export default App