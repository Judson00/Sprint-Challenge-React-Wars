import React from "react"

function Card(props){
  const { name } = props;

  return(
    <div className="cardContainer">
      <h2>{name}</h2>
    </div>
  )
}

export default Card;