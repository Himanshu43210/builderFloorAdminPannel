import React from "react";
import RenderComponent from "../../customComponents/ComponentRenderer";
import { MASTER_TABLE} from "../../../UserJson";

export default function AdminDashboard() {

  return (
    <div style={{ marginTop: "100px" }}>
      <RenderComponent jsonToRender={MASTER_TABLE} />
    </div>
  );
}