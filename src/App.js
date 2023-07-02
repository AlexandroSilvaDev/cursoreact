 import { useState } from 'react';
 import './App.css';
 import Condicional from './components/Condicional';
 import Evento from './components/Evento';
 import Form from './components/Form';
 import './components/HelloWorld'
 import HelloWorld from './components/HelloWorld';
// import Item from './components/Item';
 import List from './components/List';
 import OutraLista from './components/OutraLista';
 import Pessoa from './components/Pessoa';
 import SayMyName from './components/SayMyName';
 import SeuNome from './components/SeuNome';
 import Saudacao from './components/Saudacao';
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Home from './pages/Home';
 import Empresa from './pages/Empresa';
 import Contato from './pages/Contato';
 import NavBar from './components/Layout/NavBar';

 import React from 'react'

function App() {
  
  const name = "Alexandro Silva"

  const newName = name.toUpperCase()
  
  function sum(a, b)
  {
    return a + b
  }

  const url = "http://via.placeholder.com/150"

   const nome2 = "Maria"

   const meusItens = ["React", "Vue", "Angular"]

   const [nome, setNome] = useState()

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
       <SayMyName nome={nome2} />
       <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
      />
      <List />
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
      <Condicional />
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />

      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/Empresa' element={<Empresa />} />
          <Route exact path='/Contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
