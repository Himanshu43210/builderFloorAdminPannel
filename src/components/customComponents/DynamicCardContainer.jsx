import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectApiData } from "../../redux/utils/apiSelector";
import HomeCard from "./HomeCard";
import SearchCard from "./SearchCard";
import { HOME_CARD, SEARCH_CARD } from "../utils/Const";
import BasicPagination from "./Pagination";

export default function DynamicCardContainer({ component, handleValueChange }) {
  const apiName = component.apiName;
  const onClickApi = component.cardClickApi;
  const onClickNavigate = component.cardClickNavigate;
  const defaultPage = component.defaultPage;
  let ComponentType = component.renderComponentsInLoop.type;
  const [page, setPage] = React.useState(defaultPage);

  const dataToRender = useSelector((state) => selectApiData(state, apiName));

  useEffect(() => {}, [dataToRender]);

  return (
    <div className="abc">
      {dataToRender?.map((element) => {
        console.log(component.renderComponentsInLoop.type);
        return (
          <>
            {ComponentType === HOME_CARD && (
              <HomeCard
                element={element}
                onClickApi={onClickApi}
                onClickNavigate={onClickNavigate}
              />
            )}
            {ComponentType === SEARCH_CARD && (
              <SearchCard
                element={element}
                onClickApi={onClickApi}
                onClickNavigate={onClickNavigate}
                classname={component.renderComponentsInLoop.className}
                apiType={component.renderComponentsInLoop.apiType}
              />
            )}
          </>
        );
      })}
      {component.paginatioName && (
        <BasicPagination
          handlePageChange={(e, newPage) => {
            handleValueChange(newPage);
            setPage(newPage);
          }}
          currentPage={page || defaultPage}
          totalPages={dataToRender?.length / component.cardPerPage}
        />
      )}
    </div>
  );
}
