import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Cards from "./components/Cards";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=1`)
    .then(res => {
      setName(res.data.results[0].name);
      setData(res.data);
    })
    .catch(error => console.log({error}));
  },[])
  console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Cards
        name={name}
      />
    </div>
  );
}



export default App;
