import React from "react";

import { Card } from "react-bootstrap";
import { HOME_SCREEN } from "../../ScreenJson";
import RenderComponent from "../customComponents/ComponentRenderer";

export default function Home() {
  return (
    <>
      <Card className="home-screen">
        <RenderComponent jsonToRender={HOME_SCREEN} />
      </Card>
    </>
  );
}
