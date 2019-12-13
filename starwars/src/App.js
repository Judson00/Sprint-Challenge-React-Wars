import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState ([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=1`)
    .then(response => {
      console.log(response);
      setPeople(response.data.results);
    })
    .catch(error => console.log({error}));
  },[])

  const StyledDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  return (
    <StyledDiv className='App'>
      <h1 className='Header'>React Wars</h1>
      {people.map((people, index) => (
        <Cards 
          key={index}
          name={people.name}
          birth_year={people.birth_year}
          gender={people.gender}
          height={people.height}
          mass={people.mass}
          hair_color={people.hair_color}
          skin_color={people.skin_color}
          eye_color={people.eye_color}
        />
      ))}
    </StyledDiv>
  );
}



export default App;
