import logo from './assets/logo.png'
import banner from './assets/banner.png'
import './App.css'
import FormularioDeEventos from './components/FormularioDeEvento'

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