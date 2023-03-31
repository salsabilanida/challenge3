import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import list from "../data/list.json";
import ButtonAll from "./ButtonAll";
import ButtonDone from "./ButtonDone";
import ButtonTodo from "./ButtonTodo";


function ButtonTodoList() {
    const [tasks, setTask] = useState(list);

    const state = useLocation().state;

    useEffect(() => {
        if (state){
            setTask(state.list);
        };
    }, [state]);

    const sortAll = (id) =>{
        setTask(state?.list);
    };

    const sortDone = () => {
      const newData = tasks.filter((item) => item.complete === true);
      setTask(newData);
    };

    const sortTodo = () => {
        const newTask = tasks.filter((todo) => todo.complete === false);
        setTask(newTask);
    }


  return (
    <>
    <h3 className="text-center p-2">Todo List</h3>
    <Container className="container text-center">
        <Row className="row">
            <Col className="col-6 col-md-4">
                <ButtonAll sortall={() => {sortAll(); }}/>
            </Col>
            <Col className="col-6 col-md-4">
                <ButtonDone sortdone={() => {sortDone(); }}/>
            </Col>
            <Col className="col-6 col-md-4">
                <ButtonTodo sorttodo={() => {sortTodo(); }}/>
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default ButtonTodoList;