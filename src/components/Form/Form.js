import './Form.css'
import TextField from '../TextField/TextField'
import DropDown from '../DropDown/DropDown'

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]

const Form = () => {
    return (
        <section className="forms">
            <form>
                <h2>Preencha os dados para criar o card</h2>
                <TextField label="Nome" placeholder="Digite o seu nome..."/>
                <TextField label="Cargo" placeholder="Digite o seu cargo..."/>
                <TextField label="Imagem" placeholder="Digite o endereço da sua imagem..."/>
                <DropDown label="Time" itens={times} />
            </form>
        </section>
    )
}

export default Form