import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';
import Item from './components/Item';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  
  const name = "Alexandro Silva"

  const newName = name.toUpperCase()
  
  function sum(a, b)
  {
    return a + b
  }

  const url = "http://via.placeholder.com/150"

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <br/>
      <h2>Proprietário: {newName}</h2>
      <br />
      <p>Meu primeiro App</p>
      <br />
      <p>Soma: {sum(1, 2)}</p>
      <br />
      <img src={url} alt="Minha Imagem" />
      <br />
      <HelloWorld />
      <SayMyName nome="Alexandro" />
      <SayMyName nome="Mateus" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="Programador" 
        foto="https://via.placegolder.com/150"
      />
      <List />
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
    </div>
  );
}

export default App;
