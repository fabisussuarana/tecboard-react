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

  const eventos = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no front'
    },
  ]

  return (
    <>
      <main>
        <header>
          <img src={logo} alt="Logo da tecboard" />
        </header>
        <Banner />
        <FormularioDeEventos />
        {/* semelhante ao @for do angular, serve para percorrer/mapear a lista e renderizar os temas */}
        {temas.map(function (item) {
          return (
            <section key={item.id}>
              <Tema tema={item} />
              <CardEvento evento={eventos[0]} />
            </section>
          )
        })}
      </main>
    </>
  )
}

export default App