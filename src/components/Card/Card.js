import './Card.css'

const Card = ({ nome, imagem, cargo, fundo }) => {
    return (
            <div className='cards'>
                <div className='headers' style={{ backgroundColor: fundo}}>
                    <img src={imagem} alt={nome} />
                </div>
                <div className='footers'>
                    <h4>{nome}</h4>
                    <h5>{cargo}</h5>
                </div>
            </div>
        )
}

export default Card