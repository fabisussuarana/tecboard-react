import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Label } from '../Label'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import './formulario-de-evento.estilos.css'

export default function FormularioDeEventos() {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            placeholder="Digite o nome do evento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            placeholder="Data do evento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Tema do evento</Label>
          <ListaSuspensa/>
        </CampoDeFormulario>
        <div className="acoes">
          <Botao>
            Criar evento
          </Botao>
        </div>
      </div>
    </form>
  )
}