import React from "react";
import ListingTable from "../utils/ListingTable";
import { API_ENDPOINTS } from "../../redux/utils/api";
import { GET_CHANNEL_PARTNER_DATA, LOADING, POST } from "../utils/Const";
import { useSelector } from "react-redux";
import { selectApiStatus } from "../../redux/utils/selectors";
import { CircularProgress } from "@mui/material";

const DashboardListing = ({ component }) => {
  const userProfile = useSelector((state) => state.profile);
  const dataApi =
    component.endpoint +
    (component.user ? "?userId=" : "?id=") +
    userProfile._id +
    "&role=" +
    userProfile.role;
  // const dataApi =
  //   component.endpoint + "?id=" + userProfile._id + "&role=" + userProfile.role;
  const apiStatus = useSelector((state) =>
    selectApiStatus(state, component.dataPoint || "")
  );
  const apiData = useSelector((state) => state.api.data)[component.dataPoint];

  console.log(apiData);
  return (
    <ListingTable
      data={component.data}
      headersDesktop={component.desktopHeaders}
      headersMobile={component.mobileHeaders}
      fieldConst={component.fieldConst}
      editApi={component.editApi}
      deleteApi={component.deleteApi}
      getDataApi={component.getDataApi}
      removeApi={component.removeApi}
      approveApi={component.approveApi}
      filterDataUrl={dataApi}
      paginationMethod={component.paginationMethod}
      itemCount={apiData?.itemCount}
      isproperty={component.showPreviewButton}
    />
  );
};

export default DashboardListing;
