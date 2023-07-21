import _ from "lodash";

export const getApiName = (api) => {
  return _.findKey(API_ENDPOINTS, (value) => value === api);
};

export const API_ENDPOINTS = {
  getHomeScreenData: "http://localhost:8000/getHomeScreenData",
  getBuilderFloorData: "http://localhost:8000/getBuilderFloorData",
  getSearchResult: "http://localhost:8000/getSearchResult",
};
