import './lista-suspensa.estilos.css'

export default function ListaSuspensa({ itens, ...rest }) {
    return (
        <select className='lista-suspensa-form' {...rest} defaultValue={""}>
            <option value="" disabled>Selecione uma opção</option>
            {itens.map(function (item) {
                return <option key={item.id} value={item.id}>{item.nome}</option>
            })}
        </select>
    )
}