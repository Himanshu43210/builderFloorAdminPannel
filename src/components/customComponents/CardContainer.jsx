import React from "react";
import { Card } from "react-bootstrap";
import RenderComponent from "./ComponentRenderer";
import ComponentSelector from "./ComponentSelector";
import Navbar from "../utils/Navbar";

const CardContainer = ({ component }) => {
  console.log("being rendered");

  return (
    <>
      <div>
        <div>
          <Navbar />
          <Card>
            <Card.Header className="font">{component.title}</Card.Header>
            <Card.Body>
              <RenderComponent jsonToRender={component.child} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
