import React from "react";
import { Button } from "react-bootstrap";

function ButtonTodo({ sorttodo }) {
  return (
    <>
      <div>
        <Button onClick={sorttodo} className="buttonlist">
          Todo
        </Button>
      </div>
    </>
  );
}

export default ButtonTodo;
