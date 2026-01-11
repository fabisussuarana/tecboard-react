import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Label } from '../Label'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import './formulario-de-evento.estilos.css'

export default function FormularioDeEventos({ temas, aoSubmeter }) {
  function aoFormSubmetido(formData) {
    const evento = {
      capa: formData.get('capa'),
      // usando a função find do js pra procurar o tema selecionado na lista de temas
      tema: temas.find(function (item) {
        // aqui estou comparando o id do tema selecionado no formulário com o id do tema da lista de temas
        return Number(formData.get('tema')) === item.id
      }),
      data: new Date(`${formData.get('dataEvento')}T00:00:00`),
      titulo: formData.get('nomeEvento')
    }

    // função que foi passada via props lá do componente pai (App.jsx)
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para criar um eventooo:
      </TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Digite o nome do evento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da capa do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            name="capa"
            placeholder="http://..."
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            name="dataEvento"
            id="dataEvento"
            placeholder="Data do evento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}/>
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