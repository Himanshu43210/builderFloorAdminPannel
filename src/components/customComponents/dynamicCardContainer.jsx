import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectApiData } from "../../redux/utils/apiSelector";
import HomeCard from "./HomeCard";
import SearchCard from "./SearchCard";
import { HOME_CARD, SEARCH_CARD } from "../utils/Const";

export default function DynamicCardComponent({ component }) {
  const apiName = component.apiName;
  const onClickApi = component.cardClickApi;
  const onClickNavigate = component.cardClickNavigate;
  let ComponentType = component.renderComponentsInLoop.type;

  ComponentType = HOME_CARD ? HomeCard : SEARCH_CARD ? SearchCard : <></>;

  const dataToRender = useSelector((state) => selectApiData(state, apiName));

  useEffect(() => {}, [dataToRender]);

  return (
    <div>
      {dataToRender?.map((element) => {
        return (
          <>
            <ComponentType
              element={element}
              onClickApi={onClickApi}
              onClickNavigate={onClickNavigate}
            />
          </>
        );
      })}
    </div>
  );
}
