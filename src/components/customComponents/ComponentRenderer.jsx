import React from "react";
import ComponentSelector from "./ComponentSelector";

export default function RenderComponent({ jsonToRender }) {
  const renderComponent = (componentList) => {
    return componentList?.map((component) => {
      return <ComponentSelector key={component.name} component={component} />;
    });
  };
  return <>{renderComponent(jsonToRender.children)}</>;
}
