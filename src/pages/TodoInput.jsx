import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook} from "@fortawesome/free-solid-svg-icons";
import list from "../data/list.json";

function TodoInput() {
  const navigate = useNavigate();

  const [task, setTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const listLength = list.length;
    list.push({
      id: listLength + 1,
      complete: false,
      task,
    });

    return navigate("/todolist");
  };

  return (
    <Container>
      <h2 className="text-center p-3">Todo Input</h2>
      <Card className="my-4">
        <Card.Body>
          <Row>
            <Col>
              <Form onSubmit={onSubmit}>
              <InputGroup className="mb-3 d-flex flex-grow-1">
                <InputGroup.Text className="mycolor" controlId="name">
                  <FontAwesomeIcon icon={faBook} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Input todo"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </InputGroup>
              <div className="d-grid gap-2">
                <Button className="mycolor" type="submit">
                  Submit
                </Button>
              </div>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TodoInput;