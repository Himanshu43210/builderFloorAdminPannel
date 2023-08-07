import _ from "lodash";

export const getApiName = (api) => {
  api = api.split("?")[0]; //remove any qurey params
  console.log(
    _.findKey(API_ENDPOINTS, (value) => value === api),
    api
  );
  return _.findKey(API_ENDPOINTS, (value) => value === api);
};

export const API_ENDPOINTS = {
  adminDashboardLogin:
    "https://builder-floor-backend-n2ib.onrender.com/api/users/auth/login",
  getHomeScreenData:
    "https://builder-floor-backend-n2ib.onrender.com/api/properties/getHomeData",
  getSimilarPropertyData:
    "https://builder-floor-backend-n2ib.onrender.com/api/properties/getSimilarProperties?limit=5",
  getCardData: "https://builder-floor-backend-n2ib.onrender.com/api/properties",
  getSearchResult: `https://builder-floor-backend-n2ib.onrender.com/api/properties/searchPropertiesData`,
  getUserData: `https://builder-floor-backend-n2ib.onrender.com/api/users/list`,
  alterUserData: `https://builder-floor-backend-n2ib.onrender.com/api/users/editUser`,
  addUserData: `https://builder-floor-backend-n2ib.onrender.com/api/users/addUser`,
  deleteUserData: `https://builder-floor-backend-n2ib.onrender.com/api/users/deleteUser`,
  getPropertyData: `https://builder-floor-backend-n2ib.onrender.com/api/properties/list`,
  addPropertyData: `https://builder-floor-backend-n2ib.onrender.com/api/properties/addProperty`,
  alterPropertyData: `https://builder-floor-backend-n2ib.onrender.com/api/properties/editProperty`,
  deletePropertyData: `https://builder-floor-backend-n2ib.onrender.com/api/properties/deleteProperty`,
  getMasterData: `https://builder-floor-backend-n2ib.onrender.com/api/masters/list`,
  addMasterData: `https://builder-floor-backend-n2ib.onrender.com/api/masters/addMaster`,
  alterMasterData: `https://builder-floor-backend-n2ib.onrender.com/api/masters/alterMaster`,
  deleteMasterData: `https://builder-floor-backend-n2ib.onrender.com/api/masters/deleteMaster`,
};
