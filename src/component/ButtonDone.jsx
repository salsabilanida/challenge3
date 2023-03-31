import React from "react";
import { Button } from "react-bootstrap";

function ButtonDone({ sortdone }) {
  return (
    <>
      <div>
        <Button onClick={sortdone} className="buttonlist" >
         Done
        </Button>
      </div>
    </>
  );
}

export default ButtonDone;
