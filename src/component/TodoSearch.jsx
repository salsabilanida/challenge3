import React from "react";
import { Container, Card, Button, ButtonGroup, ButtonToolbar, InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TodoSearch() {
    return (
      <>
        <Container>
          <h1 className="text-center p-3 fw-bold">Todo Search</h1>
          <Card className="my-4">
            <Card.Body>
              <InputGroup className="mb-3 d-flex flex-grow-1 search">
                <InputGroup.Text className="mycolor" id="basic-addon1">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputGroup.Text>
                <Form.Control placeholder="Search todo" aria-label="Search" />
              </InputGroup>
              <ButtonToolbar className="justify-content-between">
                <ButtonGroup>
                  <Button className="buttonsearch">Search</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button className="buttonAdd" as={Link} to="/list/add">Add New Task</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
}

export default TodoSearch;