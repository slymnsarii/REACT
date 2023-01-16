import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../07-props-2/product-card";
import datas2 from "./data2.json";
import ProductCard2 from "./product-card2";

const ProductList2 = () => {
  return (
    <Container>
      <Row className="g-5 mt-5">
        {datas2.map((data) => (
          <Col key={data.id} md={6} lg={4} xl={3}>
            <ProductCard2 {...data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList2;
