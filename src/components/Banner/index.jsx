import banner from '../../assets/banner.png'
import './banner.estilos.css'

export default function Banner() {
    return (
        <section className='banner'>
            <img src={banner} alt="Banner com uma mulher usando óculos virtual e sorrindo." />
        </section>
    )
}