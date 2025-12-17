import { useState } from 'react'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import './App.css'

// no react componentes são funções
function FormularioDeEventos() {
  return (
    <form className="form-evento">
      <h2>Preencha para criar um evento: </h2>
      <fieldset>
        <label htmlFor="nome">Qual o nome do evento?</label>
        <input type="text" id="nome" />
      </fieldset>
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