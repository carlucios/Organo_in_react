import './Team.css'
import Card from '../Card/Card'

const Team =(props) => {
    const css = { backgroundColor:props.fundo }
    return (
        props.itens.length > 0 && <section className='teams' style={css}>
            <h3 style={{ borderColor: props.destaque }}>{props.nome}</h3>
            {props.itens.map( card => <Card key={card.nome} nome={card.nome} cargo={card.cargo} imagem={card.imagem} time={card.time} fundo={props.destaque}/>)}
        </section>
    )
}

export default Team