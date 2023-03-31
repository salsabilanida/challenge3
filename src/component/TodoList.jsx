import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import ButtonTodoList from "./ButtonTodoList";
import TodoSearch from "./TodoSearch";
import ButtonDelete from "./ButtonDelete";
import list from "../data/list.json";

function TodoList() {
  const [tasks, setTask] = useState(list);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = (id) => {
    const newTask = tasks.map((todo) => {
      if (todo.id === id) return { ...todo, complete: !todo.complete };
      return todo;
    });
    setTask(newTask);
  };

  const handleDelete = (id) => {
    const newTask = tasks.filter((todo) => todo.id !== id);
    setTask(newTask);
  };


  return (
    <>
      <TodoSearch />

      <ButtonTodoList />

      <Container className="p-3">
        <Row className="mx-3">
          <Col>
            {tasks && tasks.length ? "" : "No Tasks..."}
            {tasks.map((todolist) => {
              return (
                <React.Fragment key={todolist.id}>
                  <div className="col list_task">
                    <div className={todolist.complete ? "done" : ""}>
                      <span className="taskText">{todolist.task}</span>
                    </div>

                    <div className="icon_group">
                      <span
                        onClick={() => {
                          handleCheckboxChange(todolist.id);
                        }}
                        
                      >
                        <input className="text-success" type="checkbox" checked = {todolist.complete === true}/>
                      </span>
                      <span className="text-warning">
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                      <span
                        onClick={() => {
                          handleDelete(todolist.id);
                        }}
                        className="text-danger"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>

      <ButtonDelete />
    </>
  );
}

export default TodoList;