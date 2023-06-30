import Banner from './components/Banner/Banner';
import TextField from './components/TextField/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nome" placeholder="Digite o seu nome..."/>
      <TextField label="Cargo" placeholder="Digite o seu cargo..."/>
      <TextField label="Imagem" placeholder="Digite o endereço da sua imagem..."/>
      <TextField label=""/>
    </div>
  );
}

export default App;
