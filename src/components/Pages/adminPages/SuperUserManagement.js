import _ from "lodash";
import React from "react";
import RenderComponent from "../../customComponents/ComponentRenderer";
import { SUPER_USER } from "../../../UserJson";

export default function UserManagement() {
  return (
    <div style={{ marginTop: "100px" }}>
      <RenderComponent jsonToRender={SUPER_USER} />
    </div>
  );
}
