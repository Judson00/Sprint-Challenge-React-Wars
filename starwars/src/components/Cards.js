import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle } from 'reactstrap';

const Cards = props => {
  console.log(props);
  return (
    <div>
      <Card>
        <CardHeader>Name: {props.name}</CardHeader>
        <CardBody>
          <CardTitle>Birthday: {props.birth_year}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
  }

export default Cards;