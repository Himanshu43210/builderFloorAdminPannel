import _ from "lodash";

export const getApiName = (api) => {
  return _.findKey(API_ENDPOINTS, (value) => value === api);
};

export const API_ENDPOINTS = {
  getHomeScreenData:"https://builder-floor-backend-n2ib.onrender.com/api/properties/getHomeData",
  getCardData: "https://builder-floor-backend-n2ib.onrender.com/api/properties/list?limit=8",
  getSearchResult: `https://builder-floor-backend-n2ib.onrender.com/api/properties/search`,
  getUserData: `https://builder-floor-backend-n2ib.onrender.com/api/Users/list`,
  getPropertyData: `https://builder-floor-backend-n2ib.onrender.com/api/properties/list`,
  getMasterData: `https://builder-floor-backend-n2ib.onrender.com/api/Masters/list`,
  alterUserData: `https://builder-floor-backend-n2ib.onrender.com/api/alterUser`,
  deleteUserData: `https://builder-floor-backend-n2ib.onrender.com/api/deleteUser`,
  alterPropertyData: `https://builder-floor-backend-n2ib.onrender.com/api/alterProperty`,
  deletePropertyData: `https://builder-floor-backend-n2ib.onrender.com/api/deleteProperty`,
  alterMasterData: `https://builder-floor-backend-n2ib.onrender.com/api/alterMaster`,
  deleteMasterData: `https://builder-floor-backend-n2ib.onrender.com/api/deleteMaster`,
};
