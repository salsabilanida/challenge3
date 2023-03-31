import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";


function ButtonDelete() {
  return (
    <>
    <Container className="container text-center p-3">
        <Row className="row">
            <Col className="col-6 col-md-6">
                <Button className="buttondelete">Delete done tasks</Button>
            </Col>
            <Col className="col-6 col-md-6">
                <Button className="buttondelete">Delete all tasks</Button>
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default ButtonDelete;