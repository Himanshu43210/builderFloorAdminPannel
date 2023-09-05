import React from "react";
import RenderComponent from "../../customComponents/ComponentRenderer";
import { USER_DASHBOARD } from "../../../UserJson";

export default function AdminDashboard() {

  return (
    <div style={{ marginTop: "100px" }}>
      <RenderComponent jsonToRender={USER_DASHBOARD} />
    </div>
  );
}