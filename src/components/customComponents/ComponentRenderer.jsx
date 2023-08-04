import React from "react";
import { useSelector } from "react-redux";
import ComponentSelector from "./ComponentSelector";
import { CircularProgress } from "@mui/material";
import { selectApiStatus } from "./../../redux/utils/apiSelector"; // Replace with the correct path to your selector file

export default function RenderComponent({ jsonToRender }) {
  const loadingStatus = useSelector((state) =>
    selectApiStatus(state, "getSearchResult")
  );

  const renderComponent = (componentList) => {
    return componentList?.map((component) => {
      return (
        <div className={component?.className}>
          <ComponentSelector key={component.name} component={component} />
        </div>
      );
    });
  };
  return (
    <>
      {loadingStatus === "loading" ? (
        <CircularProgress />
      ) : (
        renderComponent(jsonToRender.children)
      )}
    </>
  );
}
