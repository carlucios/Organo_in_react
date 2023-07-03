import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {

  const times = [    

    {
      nome: 'Programação',
      destaque: '#57C278',
      fundo: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      destaque: '#82CFFA',
      fundo: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      destaque: '#A6D157',
      fundo: '#F0F8E2'
    },
    {
      nome: 'Devops',
      destaque: '#E06B69',
      fundo: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      destaque: '#DB6EBF',
      fundo: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      destaque: '#FFBA05',
      fundo: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      destaque: '#FF8A29',
      fundo: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  return (
    <div className="App">
      <Banner />
      <Form 
        onNewCard = {colaborador => {debugger; setColaboradores([...colaboradores, colaborador]); console.log(colaboradores)}}
        itens = {times.map(time => time.nome)}
      />
      {times.map(time => <Team 
        key={time.nome} 
        nome={time.nome} 
        destaque={time.destaque} 
        fundo={time.fundo}
        itens={colaboradores.filter(item => item.time === time.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
