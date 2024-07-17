import React, { useState } from 'react'
import GetData from './components/getData'
import './App.css'

function App() {
  //API
  //https://rickandmortyapi.com/api
  //https://rickandmortyapi.com/api/character  
  
  // Axios Method
  // const ax = async () => {
  //   const data = await axios.get('https://rickandmortyapi.com/api/character/2');
  //   console.log(data);
  // }
  // ax();

    
  // const xhr = new XMLHttpRequest();
  // xhr.open('GET', 'https://rickandmortyapi.com/api/character/2');
  // xhr.send();

  // xhr.addEventListener('load', () => {
  //     const datas = (JSON.parse(xhr.response));
  //     setData(datas)
  //     console.log(data.name);
  //     console.log(data.status);
  //     console.log(data.species);
  //     console.log(data.location.name);
  //     console.log(data.image);
  //   });

  return (
    <React.Fragment>
      <GetData />
    </React.Fragment>
  )
}

export default App
