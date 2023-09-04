import { newPropertyConst } from "./components/fieldConsts/PropertiesFieldConst";
import { newUserConst } from "./components/fieldConsts/UserFieldConst";
import {
  CONTAINER,
  DASHBOARD_LISTING,
  ROUTE_BUTTON,
} from "./components/utils/Const";

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
        },
      ],
    },
  ],
};
