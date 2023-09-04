import React from "react";
import ListingTable from "../utils/ListingTable";
import { API_ENDPOINTS } from "../../redux/utils/api";
import { GET_CHANNEL_PARTNER_DATA } from "../utils/Const";

const DashboardListing = ({ component }) => {
  const dataApi = API_ENDPOINTS[GET_CHANNEL_PARTNER_DATA];

  return (
    <ListingTable
      data={component.data}
      headersDesktop={component.desktopHeaders}
      headersMobile={component.mobileHeaders}
    />
  );
};

export default DashboardListing;
