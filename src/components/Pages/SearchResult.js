import React from "react";

import { Card } from "react-bootstrap";
import RenderComponent from "../customComponents/ComponentRenderer";
import { SEARCH_RESULT } from "../../ScreenJson";
import './../../css/UserStyle.css'

export default function SearchResult() {
  return (
    <>
      <Card className="search-result-screen">
        <RenderComponent jsonToRender={SEARCH_RESULT} />
      </Card>
    </>
  );
}
