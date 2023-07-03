import './Form.css'
import TextField from '../TextField/TextField'
import DropDown from '../DropDown/DropDown'
import Button from '../Button/Button'
import { useState } from 'react'

const Form = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    
    const aoSalvar = (e) => {
        e.preventDefault();
        props.onNewCard({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
       })
    }

    return (
        <section className="forms">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite o seu nome..." value={nome} change={valor => setNome(valor)}/>
                <TextField mandatory={true} label="Cargo" placeholder="Digite o seu cargo..." value={cargo} change={valor => setCargo(valor)}/>
                <TextField label="Imagem" placeholder="Digite o endereço da sua imagem..." value={imagem} change={valor => setImagem(valor)}/>
                <DropDown mandatory={true} label="Time" value={time} itens={props.itens} change={valor => setTime(valor)}/>
                <Button>
                    Criar Card
                </ Button>
            </form>
        </section>
    )
}

export default Form