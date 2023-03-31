import React from "react";
import { Container } from "react-bootstrap";
// import TodoSearch from "../component/TodoSearch";
import TodoList from "../component/TodoList";

function Home(){
    return (
    <>
    <Container>
        <TodoList />
    </Container>
    </>
    );
}

export default Home;