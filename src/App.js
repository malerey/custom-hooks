import React, { useState, useEffect } from 'react';
import './App.css';
import Ubicaciones from './components/Ubicaciones';
import useForm from './hooks/useForm';
const App = () => {
  const [info, setInfo] = useForm({
    nombre: '',
    telefono: '',
    zona: '',
  }); 

  return (
    <div className="App">
      <form>
        Nombre: <input type="text" name="nombre" onChange={setInfo}></input>
        Telefono
        <input type="number" name="telefono" onChange={setInfo} ></input>
        Lugar donde su gato le pide caricias
        <input type="text" name="zona" onChange={setInfo} ></input>
      </form>
      <hr />
      <Ubicaciones />
    </div>
  );
};

export default App;
