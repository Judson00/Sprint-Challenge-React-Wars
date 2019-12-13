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
        </CardBody>
      </Card>
    </StyledDiv>
  );
  }

export default Cards;