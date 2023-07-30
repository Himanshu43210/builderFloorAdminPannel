import _ from "lodash";

export const getApiName = (api) => {
  return _.findKey(API_ENDPOINTS, (value) => value === api);
};

export const API_ENDPOINTS = {
  getHomeScreenData:
    "https://builder-floor-backend-n2ib.onrender.com/api/properties/list",
  getCardData: "https://builder-floor-backend-n2ib.onrender.com/api/Users/list",
  getSearchResult: `https://builder-floor-backend-n2ib.onrender.com/api/properties/search?city=gur`,
};
