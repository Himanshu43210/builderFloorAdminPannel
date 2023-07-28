import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectApiData } from "../../redux/utils/apiSelector";

export default function DetailCard({ apiName }) {
  console.log(apiName);
  const cardDetail = useSelector((state) => selectApiData(state, apiName));
  useEffect(() => {}, [cardDetail]);
  return (
    <>
      <div>city : {cardDetail?.city} </div>
      <div>sectorNumber : {cardDetail?.sectorNumber} </div>
      <div>plotNumber : {cardDetail?.plotNumber} </div>
      <div>size : {cardDetail?.size} </div>
      <div>facing : {cardDetail?.facing} </div>
      <div>accommodation : {cardDetail?.accommodation} </div>
      <div>parkFacing : {cardDetail?.parkFacing} </div>
      <div>corner : {cardDetail?.corner} </div>
      <div>floor : {cardDetail?.floor} </div>
      <div>possession : {cardDetail?.possession} </div>
      <div>title : {cardDetail?.title} </div>
      <div>detailTitle : {cardDetail?.detailTitle} </div>
      <div>description : {cardDetail?.description} </div>
      <div>builderName : {cardDetail?.builderName} </div>
      <div>builderContact : {cardDetail?.builderContact?.$numberLong} </div>
      <div>price : {cardDetail?.price} </div>
      <div>address : {cardDetail?.address} </div>
      <div>editor_choice : {cardDetail?.editor_choice} </div>
      <div>category : {cardDetail?.category} </div>
      <div>state : {cardDetail?.state} </div>
      <div>channelPartner : {cardDetail?.channelPartner} </div>
      <div>channelContact : {cardDetail?.channelContact?.$numberLong} </div>
    </>
  );
}
