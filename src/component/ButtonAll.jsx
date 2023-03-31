import React from "react";
import { Button } from "react-bootstrap";

function ButtonAll({ sortall }) {
  return (
    <>
      <div>
        <Button onClick={sortall} className="buttonlist">
          All
        </Button>
      </div>
    </>
  );
}

export default ButtonAll;
