import React from "react"

const Cards = props => {
  console.log(props);
  return(
    <div className='main-card'>
      <div className='card-container'>
        <h1 className='name'>Name: {props.name}</h1>
        <h2>Birthday: {props.birth_year}</h2>
      </div>
    </div>
  );
}

export default Cards;