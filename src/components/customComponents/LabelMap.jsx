import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET } from "../utils/Const";
import { callApi } from "../../redux/utils/apiActions";

const LabelMap = ({ component }) => {
  const data = useSelector((state) => state.profile);
  console.log(data._id);
  // const api = component.api+`?userId=${data?._id?data._id:""}`
  const userProfile = useSelector((state) => state.profile);
  const api = component.api + `?userId=` + userProfile._id
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const handleApiCall = () => {
    dispatch(
      callApi({
        method: GET,
        url: api,
        headers: { "Content-Type": "application/json" },
      })
    );
  };
  useEffect(() => {
    if (!checked) {
      // console.log(api)
      handleApiCall();
      setChecked(true);
    }
  });
  const apiData = useSelector((state) => state.api.data)[component.endpoint]
    ?.response;

  return (
    <>
      {apiData?.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.label}</p>
            <p>{item?.value}</p>
          </div>
        );
      })}
    </>
  );
};

export default LabelMap;
