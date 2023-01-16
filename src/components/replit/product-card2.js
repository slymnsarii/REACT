import React from "react";
import { Card } from "react-bootstrap";

const ProductCard2 = (props) => {
  const { title, image, price, discount, rate } = props;

  return (
    <Card className="h-70">
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body className="text-center d-flex flex-column justify-content-between align-items-center">
        <Card.Title></Card.Title>
        <Card.Title className="fs-2">{title}</Card.Title>
        <Card.Text className="fs-3 text-success">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard2;
