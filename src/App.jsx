import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
import FormularioDeEventos from './components/FormularioDeEvento'
import Tema from './components/Temas'
import Banner from './components/Banner'
import CardEvento from './components/CardEvento'

function App() {
  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no front'
    }
  ])

  function adicionarEvento(evento) {
    setEventos([...eventos, evento])
    console.log('Evento recebido no App.jsx:', eventos)
  }

  return (
    <>
      <main>
        <header>
          <img src={logo} alt="Logo da tecboard" />
        </header>
        <Banner />
        {/* passando os temas e a função para adicionar eventos por props para o componente de formulário */}
        <FormularioDeEventos temas={temas} aoSubmeter={adicionarEvento} />
        {/* semelhante ao @for do angular, serve para percorrer/mapear a lista e renderizar os temas.
            Não é usado um foreach por exemplo porque o foreach não retorna uma nova lista, ele apenas itera sobre a lista original
        */}
        <section className='container'>
          {temas.map(function (tema) {
            if (!eventos.some(evento => evento.tema.id === tema.id)){
              return null
            }
            return (
              <section key={tema.id}>
                <Tema tema={tema} />
                <div className="eventos">
                  {eventos
                  .filter(function (evento) {
                    return evento.tema.id === tema.id
                  })
                  .map(function (evento, indice) {
                    return <CardEvento evento={evento} key={indice}/>
                  })}
                </div>
              </section>
            )
          })}
        </section>
      </main>
    </>
  )
}

export default App