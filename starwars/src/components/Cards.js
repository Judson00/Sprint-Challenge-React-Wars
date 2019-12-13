import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle } from 'reactstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`  
  max-width: 250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`


const Cards = props => {
  console.log(props);
  return (
    <StyledDiv>
      <Card>
        <CardHeader>Name: {props.name}</CardHeader>
        <CardBody>
          <CardTitle>Birthday: {props.birth_year}</CardTitle>
          <CardTitle>Gender: {props.gender}</CardTitle>
          <CardTitle>Height: {props.height}</CardTitle>
          <CardTitle>Mass: {props.mass}</CardTitle>
          <CardTitle>Hair Color: {props.hair_color}</CardTitle>
          <CardTitle>Skin Color: {props.skin_color}</CardTitle>
          <CardTitle>Eye Color: {props.eye_color}</CardTitle>
        </CardBody>
      </Card>
    </StyledDiv>
  );
  }

export default Cards;