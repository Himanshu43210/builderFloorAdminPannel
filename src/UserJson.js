import { newPropertyConst } from "./components/fieldConsts/PropertiesFieldConst";
import { newUserConst } from "./components/fieldConsts/UserFieldConst";
import {
  ALTER_PROPERTY_DATA,
  ALTER_USER_DATA,
  API_BUTTON,
  API_HEADING,
  APPROVE_PROPERTY_DATA,
  AUTO_FETCH_API_POST,
  AUTO_FETCH_API_USER,
  CONTAINER,
  DASHBOARD_LISTING,
  DELETE_PROPERTY_DATA,
  DELETE_USER_DATA,
  GET,
  GET_ADMIN_PROPERTY_DATA,
  GET_ADMIN_USER_DATA,
  GET_LISTING_DATA,
  GET_SEARCH_RESULT,
  GET_USER_DATA,
  HORIZONTAL_LINE,
  LABEL_MAP,
  POST,
  ROUTE_BUTTON,
  SELECT,
  SELECT_SLIDER,
  SLIDER,
  TABLE_HEADER,
  TOGGLE_BUTTON,
} from "./components/utils/Const";
import { API_ENDPOINTS } from "./redux/utils/api";

// export const USER_DASHBOARD = {
//   name: "User Dashboard Screen",
//   children: [
//     {
//       type: DASHBOARD_LISTING,
//       desktopHeaders: {
//         "Channel Partner Company Name": "fieldName",
//         "City Where Registered": "fieldValue",
//         "Channel Partner Name": "parentId",
//         "Channel Partner Mobile number": "channel partner mobile number",
//         Listings: "listings",
//         Approved: "approved",
//         Pending: "pending",
//         "View Details": "view detail",
//       },
//       mobileHeaders: {
//         "Channel Partner Company Name": "fieldName",
//         "City Where Registered": "fieldValue",
//         "Channel Partner Name": "parentId",
//         "Channel Partner Mobile number": "channel partner mobile number",
//         Listings: "listings",
//         Approved: "approved",
//         Pending: "pending",
//         "View Details": "view detail",
//       },
//     },
//   ],
// };

export const USER_DASHBOARD = {
  name: "User Dashboard Screen",
  children: [
    {
      type: CONTAINER,
      className: "superAdminDashboard",
      children: [
        {
          type: ROUTE_BUTTON,
          className: "toogle-filter",
          label: "Create Channel Partner",
          name: "Create Channel Partner",
          form: newUserConst,
          route: "/admin/form",
        },
        {
          type: ROUTE_BUTTON,
          className: "toogle-filter",
          label: "Manage Channel Partner",
          name: "Manage Channel Partner",
          route: "/admin/user",
        },
        {
          type: ROUTE_BUTTON,
          className: "toogle-filter",
          label: "Approve Channel Partner Listngs",
          name: "Approve Channel Partner Listngs",
          route: "/admin/property",
        },
        {
          type: ROUTE_BUTTON,
          className: "toogle-filter",
          label: "Statistics",
          name: "Statistics",
        },
        {
          type: ROUTE_BUTTON,
          className: "toogle-filter",
          label: "Field Changes Master Data",
          name: "Field Changes Master Data",
          form: newPropertyConst,
          route: "/admin/form",
        },
        {
          type: ROUTE_BUTTON,
          className: "toogle-filter",
          label: "Master Data of Super Admin",
          name: "Master Data of Super Admin",
          route: "/admin/masterTable",
        },
        {
          type: LABEL_MAP,
          className: "lableded-map-dashboard",
          api: API_ENDPOINTS[GET_LISTING_DATA],
          method: GET,
          endpoint: GET_LISTING_DATA,
        },
      ],
    },
  ],
};

export const MASTER_TABLE = {
  name: "Master table",
  className: "klk",
  children: [
    {
      type: AUTO_FETCH_API_POST,
      api: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
      data: { filter: {} },
      className: "header",
    },
    { type: HORIZONTAL_LINE },
    {
      type: CONTAINER,
      className: "actioncontainer",
      children: [
        {
          type: SELECT,
          className: "select-city-button",
          sliceName: "filter",
          name: "city",
          defaultValue: { label: "Gurgaon", value: "Gurgaon" },
          options: [{ label: "Gurgaon", value: "Gurgaon" }],
        },
        {
          type: SLIDER,
          sliceName: "filter",
          name: "budget",
          minValue: 10000000,
          maxValue: 100000000,
          step: 1000000,
          defaultValue: [20000000, 30000000],
        },
        {
          type: API_BUTTON,
          sliceName: "filter",
          name: "search",
          buttonLabel: "Search",
          apiType: POST,
          navigate: "/admin/masterTable",
          api: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
        },
      ],
    },
    {
      type: API_HEADING,
      name: "matchFoundHeading",
      tag: "h2",
      className: "match-found-heading",
      dynamicDetails: {
        api: GET_ADMIN_PROPERTY_DATA,
        textReplace: "_TEXT_TO_REPLACE_",
      },
      text: "_TEXT_TO_REPLACE_ Matches Found",
    },
    {
      type: CONTAINER,
      name: "cardBodyContainer",
      className: "cardBodyContainer",
      children: [
        {
          type: CONTAINER,
          className: "filter-button-div",
          children: [
            {
              type: CONTAINER,
              className: "filter-button-div-overflowed",
              children: [
                {
                  type: SELECT,
                  sliceName: "filter",
                  name: "floor",
                  label: "Floors",
                  className: "filterbutton",
                  onClickApi: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
                  onClickApiMethod: POST,
                  options: [
                    { label: "First Floor", value: "firstFloor" },
                    { label: "Second Floor", value: "secondFloor" },
                    { label: "Third Floor", value: "thirdFloor" },
                    { label: "Fourth Floor", value: "fourthFloor" },
                    {
                      label: "Basement + First Floor",
                      value: "basementPlusFirstFloor",
                    },
                  ],
                },
                {
                  type: SELECT,
                  sliceName: "filter",
                  name: "location",
                  label: "Location",
                  className: "filterbutton",
                  onClickApi: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
                  onClickApiMethod: POST,
                  options: [
                    { label: "DLF City Phase 1", value: "DLF City Phase 1" },
                    { label: "DLF City Phase 2", value: "DLF City Phase 2" },
                    { label: "DLF City Phase 3", value: "DLF City Phase 3" },
                    { label: "DLF City Phase 4", value: "DLF City Phase 4" },
                    { label: "Sector 15 Part 2", value: "Sector 15 Part 2" },
                    { label: "Sector 27", value: "Sector 27" },
                    { label: "Sector 28", value: "Sector 28" },
                    { label: "Sector 38", value: "Sector 38" },
                    { label: "Sector 42", value: "Sector 42" },
                    { label: "Sector 43", value: "Sector 43" },
                    { label: "Sector 45", value: "Sector 45" },
                    { label: "Sector 46", value: "Sector 46" },
                    { label: "South City 1", value: "South City 1" },
                    { label: "Sushant Lok 1", value: "Sushant Lok 1" },
                  ],
                },
                {
                  type: SELECT_SLIDER,
                  sliceName: "filter",
                  name: "size",
                  buttonLabel: "Size",
                  minValue: 0.0,
                  maxValue: 1000.0,
                  onClickApi: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
                  onClickApiMethod: POST,
                  step: 0.1,
                  defaultValue: [180.0, 360.0],
                },
                {
                  type: SELECT,
                  sliceName: "filter",
                  name: "accomodation",
                  label: "Accomodation",
                  className: "filterbutton",
                  onClickApi: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
                  onClickApiMethod: POST,
                  options: [
                    { label: "2 BHK", value: "2 BHK" },
                    { label: "3 BHK", value: "3 BHK" },
                    { label: "4 BHK", value: "4 BHK" },
                    { label: "5 BHK", value: "5 BHK" },
                    { label: "6 BHK", value: "6 BHK" },
                  ],
                },
                {
                  type: SELECT,
                  sliceName: "filter",
                  name: "possession",
                  label: "Possession",
                  className: "filterbutton",
                  onClickApi: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
                  onClickApiMethod: POST,
                  options: [
                    { label: "Ready", value: "Ready" },
                    { label: "1 Months", value: "1 Months" },
                    { label: "3 Months", value: "3 Months" },
                    { label: "6 Months", value: "6 Months" },
                    { label: "9 Months", value: "9 Months" },
                    { label: "12 Months", value: "12 Months" },
                  ],
                },
                {
                  type: SELECT,
                  sliceName: "filter",
                  name: "facing",
                  label: "Facing",
                  className: "filterbutton",
                  onClickApi: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
                  onClickApiMethod: POST,
                  options: [
                    { label: "North", value: "North" },
                    { label: "South", value: "South" },
                    { label: "East", value: "East" },
                    { label: "West", value: "West" },
                    { label: "North-East", value: "North-East" },
                    { label: "North-West", value: "North-West" },
                    { label: "South-East", value: "South-East" },
                    { label: "South-West", value: "South-West" },
                  ],
                },
                {
                  type: SELECT,
                  sliceName: "filter",
                  className: "filterbutton",
                  name: "sortBy",
                  label: "Sort By",
                  onClickApi: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
                  onClickApiMethod: POST,
                  options: [
                    { label: "Price High to Low", value: "Price High to Low" },
                    { label: "Price Low to High", value: "Price Low to High" },
                  ],
                },
                {
                  type: TOGGLE_BUTTON,
                  className: "toogle-filter",
                  sliceName: "filter",
                  onClickApi: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
                  onClickApiMethod: POST,
                  label: "Park",
                  name: "Park",
                },
                {
                  type: TOGGLE_BUTTON,
                  className: "toogle-filter",
                  sliceName: "filter",
                  onClickApi: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
                  onClickApiMethod: POST,
                  label: "Corner",
                  name: "Corner",
                },
                {
                  type: TOGGLE_BUTTON,
                  className: "toogle-filter",
                  sliceName: "filter",
                  label: "Reset",
                  name: "Reset",
                  isReset: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: DASHBOARD_LISTING,
      data: {},
      desktopHeaders: {
        Location: "sectorNumber",
        "Plot No.": "plotNumber",
        Size: "size",
        Floor: "floor",
        Title: "title",
        Price: "price",
        Accommodation: "accommodation",
        Facing: "facing",
        "Park Facing": "parkFacing",
        Corner: "corner",
        Possession: "possession",
        "Builder Name": "builderName",
        "Builder Contact Name": "builderContact",
        "Created By": "",
        "Mobile Number": "",
        "Company Name": "",
        City: "Gurgaon",
        State: "Haryana",
        "Dated of Posting": "",
        "Link Share": "",
      },
      mobileHeaders: {
        Location: "sectorNumber",
        "Plot No.": "plotNumber",
        Size: "size",
        Floor: "floor",
        Title: "title",
        Price: "price",
        Accommodation: "accommodation",
        Facing: "facing",
        "Park Facing": "parkFacing",
        Corner: "corner",
        Possession: "possession",
        "Builder Name": "builderName",
        "Builder Contact Name": "builderContact",
        "Created By": "",
        "Mobile Number": "",
        "Company Name": "",
        City: "Gurgaon",
        State: "Haryana",
        "Dated of Posting": "",
        "Link Share": "",
      },
      fieldConst: newPropertyConst,
      editApi: ALTER_PROPERTY_DATA,
      deleteApi: DELETE_PROPERTY_DATA,
      getDataApi: GET_ADMIN_PROPERTY_DATA,
      approveApi: APPROVE_PROPERTY_DATA,
      endpoint: API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA],
      dataPoint: GET_ADMIN_PROPERTY_DATA,
    },
    {
      type: ROUTE_BUTTON,
      className: "toogle-filter",
      label: "Back",
      name: "Back",
      route: "/admin",
    },
    // {
    //   type: DASHBOARD_LISTING,
    //   desktopHeaders: {
    //     "Channel Partner Company Name": "fieldName",
    //     "City Where Registered": "fieldValue",
    //     "Channel Partner Name": "parentId",
    //     "Channel Partner Mobile number": "channel partner mobile number",
    //     Listings: "listings",
    //     Approved: "approved",
    //     Pending: "pending",
    //     "View Details": "view detail",
    //   },
    //   mobileHeaders: {
    //     "Channel Partner Company Name": "fieldName",
    //     "City Where Registered": "fieldValue",
    //     "Channel Partner Name": "parentId",
    //     "Channel Partner Mobile number": "channel partner mobile number",
    //     Listings: "listings",
    //     Approved: "approved",
    //     Pending: "pending",
    //     "View Details": "view detail",
    //   },
    // },
  ],
};

export const SUPER_USER = {
  name: "Master table",
  className: "klk",
  children: [
    {
      type: AUTO_FETCH_API_USER,
      user: true,
      method: GET,
      api: API_ENDPOINTS[GET_ADMIN_USER_DATA],
    },
    {
      type: CONTAINER,
      name: "",
      className: "",
      children: [
        {
          type: CONTAINER,
          name: "",
          className: "",
          children: [
            {
              type: TABLE_HEADER,
              fieldConst: newUserConst,
              endpoint: GET_ADMIN_USER_DATA,
              saveApi: ALTER_USER_DATA,
              dataApi: API_ENDPOINTS[GET_ADMIN_USER_DATA],
              header: "Add User",
            },
            {
              type: DASHBOARD_LISTING,
              data: {},
              desktopHeaders: {
                Name: "name",
                "Phone Number": "phoneNumber",
                Address: "address",
                Email: "email",
                Role: "role",
                "Parent Id": "parentId",
                "Status": "status"
              },
              mobileHeaders: [{ Name: "name" }, { Role: "role" }],
              fieldConst: newUserConst,
              editApi: ALTER_USER_DATA,
              deleteApi: DELETE_USER_DATA,
              getDataApi: GET_ADMIN_USER_DATA,
              // approveApi: APPROVE_PROPERTY_DATA,
              endpoint: API_ENDPOINTS[GET_ADMIN_USER_DATA],
              dataPoint: GET_ADMIN_USER_DATA,
              showPreviewButton: false
            },
            {
              type: ROUTE_BUTTON,
              className: "toogle-filter",
              label: "Back",
              name: "Back",
              route: "/admin",
            },
          ],
        },
      ],
    },
  ],
};
