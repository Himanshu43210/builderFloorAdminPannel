import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET } from "../utils/Const";
import { callApi } from "../../redux/utils/apiActions";

const LabelMap = ({ component }) => {
  const api = component.api;
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
      handleApiCall();
      setChecked(true);
    }
  });
  const apiData = useSelector((state) => state.api.data)[component.endpoint].response
  console.log(apiData);
  return <>{apiData.map((item,i)=>{
    return(
        <div key={i} >
            <p>{item.label}</p>
            <p>{item.value}</p>
        </div>
    )
  })}</>;
};

export default LabelMap;
