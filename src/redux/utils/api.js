import _ from "lodash";

export const getApiName = (api) => {
  return _.findKey(API_ENDPOINTS, (value) => value === api);
};

export const API_ENDPOINTS = {
  getHomeScreenData:
    "https://builder-floor-backend-n2ib.onrender.com/api/properties/list",
  getCardData: "https://builder-floor-backend-n2ib.onrender.com/api/Users/list",
  getSearchResult: `http://localhost:8000/getSearchResult`,
  getUserData: `http://localhost:8000/getUserData`,
  getPropertyData: `http://localhost:8000/getPropertyData`,
  getMasterData: `http://localhost:8000/getMasterData`,
  alterUserData: `https://builder-floor-backend-n2ib.onrender.com/api/alterUser`,
  deleteUserData: `https://builder-floor-backend-n2ib.onrender.com/api/deleteUser`,
  alterPropertyData: `https://builder-floor-backend-n2ib.onrender.com/api/alterProperty`,
  deletePropertyData: `https://builder-floor-backend-n2ib.onrender.com/api/deleteProperty`,
  alterMasterData: `https://builder-floor-backend-n2ib.onrender.com/api/alterMaster`,
  deleteMasterData: `https://builder-floor-backend-n2ib.onrender.com/api/deleteMaster`,
};
