import React from "react";
import ListingTable from "../utils/ListingTable";
import { API_ENDPOINTS } from "../../redux/utils/api";
import { GET_CHANNEL_PARTNER_DATA } from "../utils/Const";
import { useSelector } from "react-redux";

const DashboardListing = ({ component }) => {
  const userProfile = useSelector((state) => state.profile);
  const dataApi =
    component.endpoint + "?id=" + userProfile._id + "&role=" + userProfile.role;
  const apiData = useSelector((state) => state.api.data)[component.dataPoint];
  return (
    <ListingTable
      data={component.data}
      headersDesktop={component.desktopHeaders}
      headersMobile={component.mobileHeaders}
      fieldConst={component.fieldConst}
      editApi={component.editApi}
      deleteApi={component.deleteApi}
      getDataApi={component.getDataApi}
      approveApi={component.approveApi}
      filterDataUrl={dataApi}
      itemCount={apiData?.itemCount}
      isproperty={component.showPreviewButton}
    />
  );
};

export default DashboardListing;
