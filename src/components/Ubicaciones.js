import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch'
import useForm from '../hooks/useForm';

const Ubicaciones = () => {
  const [info, setInfo] = useForm({
    nombreGato: '', 
    colorGato: '', 
    edadGato: ''
  })


  const handleSubmit = e => {
    e.preventDefault();
    alert("Enviamos tu info" + info.nombreGato)
  }
  console.log(info)
 
  return (
    <div className="Ubicaciones">
       <form onSubmit={handleSubmit}>
        Gatito que queres adoptar: <input type="text" name="nombreGato" onChange={setInfo}></input>
        Color del gato: <input type="text" name="colorGato" onChange={setInfo}></input>
        Edad del gato: <input type="text" name="edadGato" onChange={setInfo}></input>
        <input type="submit" value="Enviar"></input>      </form>
    </div>
  );
}

export default Ubicaciones;

