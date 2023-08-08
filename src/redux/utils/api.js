import _ from "lodash";

const API_DOMAIN = "https://builder-floor-backend-n2ib.onrender.com/api/";
// const API_DOMAIN = "http://localhost:5000/api/";

export const getApiName = (api) => {
  console.log(api);
  api = api.split("?")[0]; //remove any qurey params
  console.log(
    _.findKey(API_ENDPOINTS, (value) => value === api),
    api
  );
  return _.findKey(API_ENDPOINTS, (value) => value === api);
};

export const API_ENDPOINTS = {
  adminDashboardLogin: API_DOMAIN + "users/auth/login",
  getHomeScreenData: API_DOMAIN + "properties/getHomeData",
  getSimilarPropertyData:
    API_DOMAIN + "properties/getSimilarProperties?limit=5",
  getCardData: API_DOMAIN + "properties",
  getSearchResult: API_DOMAIN + "properties/searchPropertiesData",
  getUserData: API_DOMAIN + "users/list",
  alterUserData: API_DOMAIN + "users/editUser",
  addUserData: API_DOMAIN + "users/addUser",
  deleteUserData: API_DOMAIN + "users/deleteUser",
  getPropertyData: API_DOMAIN + "properties/list",
  addPropertyData: API_DOMAIN + "properties/addProperty",
  alterPropertyData: API_DOMAIN + "properties/editProperty",
  deletePropertyData: API_DOMAIN + "properties/deleteProperty",
  approvePropertyData: API_DOMAIN + "properties/approveProperty",
  getMasterData: API_DOMAIN + "masters/list",
  addMasterData: API_DOMAIN + "masters/addMaster",
  alterMasterData: API_DOMAIN + "masters/editMaster",
  deleteMasterData: API_DOMAIN + "masters/deleteMaster",
};
