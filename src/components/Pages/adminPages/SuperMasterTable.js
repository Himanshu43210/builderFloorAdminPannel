import React from "react";
import _ from "lodash";
import { MASTER_TABLE } from "../../../UserJson";
import RenderComponent from "../../customComponents/ComponentRenderer";

export default function PropertyManagement() {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <RenderComponent jsonToRender={MASTER_TABLE} />
      </div>
    </>
  );
}
