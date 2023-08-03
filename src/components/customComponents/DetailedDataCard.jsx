import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { callApi } from "../../redux/utils/apiActions";
import { useDispatch } from "react-redux";
import { GET } from "../utils/Const";
import { selectApiData } from "../../redux/utils/apiSelector";
import { API_ENDPOINTS } from "../../redux/utils/api";

export default function DetailDataCard({ component }) {
  const pathname = window.location.href;
  const id = pathname.split("id=").pop();
  const getApiEndpoint = component.apiSliceName;
  const apiEndpoint = API_ENDPOINTS[getApiEndpoint] + `?id=${id}`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        url: apiEndpoint,
        method: GET,
        headers: { "Content-Type": "application/json" },
      })
    );
    console.log(id);
  }, []);
  const IframeComponent = ({ src, title, allowFullScreen = false }) => {
    return (
      <iframe
        src={src}
        title={title}
        allowFullScreen={allowFullScreen}
      ></iframe>
    );
  };

  const cardData = useSelector(
    (state) => selectApiData(state, getApiEndpoint)?.data
  );
  const [ShowNumber, setShowNumber] = useState();
  // const cardDetail = useSelector((state) => selectApiData(state, apiName));
  // useEffect(() => {
  //     setCardData(cardDetail?.data)
  // }, [cardDetail]);
  // console.log(cardDetail)
  let urlfirst = "https://builderfloors.s3.ap-south-1.amazonaws.com/";
  urlfirst += cardData?.images[0];
  let nu = cardData?.images?.length;
  return (
    <>
      {console.log(cardData)}
      <div className="detailcomponent">
        <p>{cardData?.title}</p>
        <div className="detail-image-div">
          <div className="img360">
            <IframeComponent
              src="https://fascinating-queijadas-53a09a.netlify.app/?image=https://builderfloors.s3.ap-south-1.amazonaws.com/upload/photos/C973SL1/1st%20Floor/360/IMG_20221010_114838_00_merged.jpg?not-from-cache-please"
              title="Example Website"
              allowFullScreen
            />
          </div>
          <div className="other-images">
            <img
              src="https://builderfloors.s3.ap-south-1.amazonaws.com/upload/photos/B473SL1/3rd%20Floor/360/Copy%20of%20IMG_20221010_121926_00_merged.jpg"
              alt=""
            />
            <img
              src="https://builderfloors.s3.ap-south-1.amazonaws.com/upload/photos/B473SL1/3rd%20Floor/360/Copy%20of%20IMG_20221010_122038_00_merged.jpg"
              alt=""
            />
            <img
              src="https://builderfloors.s3.ap-south-1.amazonaws.com/upload/photos/B473SL1/3rd%20Floor/360/Copy%20of%20IMG_20221010_122114_00_merged.jpg"
              alt=""
            />
            <img
              src="https://builderfloors.s3.ap-south-1.amazonaws.com/upload/photos/B473SL1/3rd%20Floor/360/Copy%20of%20IMG_20221010_122137_00_merged.jpg"
              alt=""
            />
            <img
              src="https://builderfloors.s3.ap-south-1.amazonaws.com/upload/photos/B473SL1/3rd%20Floor/360/Copy%20of%20IMG_20221010_122708_00_merged.jpg"
              alt=""
            />
            <img
              src="https://builderfloors.s3.ap-south-1.amazonaws.com/upload/photos/B473SL1/3rd%20Floor/NORMAL/THUMBNAIL.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <Button variant="outlined">{nu} Images</Button>
        </div>
        <div className="lowercontainer">
          <div className="detail-info-div">
            {/* Deatils & Button */}
            <div className="infodiv">
              <h3>DetailTitle : {cardData?.detailTitle}</h3>
              <br />
              Description : {cardData?.description}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Button variant="contained">{cardData?.price}</Button>
            </div>
          </div>
          <div className="detail-icon-div">
            <div className="rowicon">
              <div>
                <img src={component.sectorNumber} alt="" />
                {cardData?.sectorNumber}
              </div>
              <div>
                <img src={component.size} alt="" />
                {cardData?.size}
              </div>
              <div>
                <img src={component.accommodation} alt="" />
                {cardData?.accommodation}
              </div>
            </div>

            <div className="rowicon">
              <div>
                <img src={component.floor} alt="" />
                {cardData?.floor}
              </div>
              <div>
                <img src={component.facing} alt="" />
                {cardData?.facing}
              </div>
              <div>
                <img src={component.possession} alt="" />
                {cardData?.possession}
              </div>
            </div>

            <div className="rowicon">
              <div>
                <img src={component.parkFacing} alt="" />
                {cardData?.parkFacing}
              </div>

              <div>
                <img src={component.corner} alt="" />
                {cardData?.corner}
              </div>
            </div>

            <div className="rowicon">
              <Button
                variant="contained"
                onClick={() => {
                  setShowNumber(!ShowNumber);
                }}
              >
                {ShowNumber ? component.phoneToDisplay : "Phone"}
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  window.open(
                    `https://wa.me/${
                      component.whatsappToDisplay
                    }?text=${component.whatsappText?.replace(
                      "{link}",
                      pathname
                    )}`,
                    "_blank"
                  );
                }}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>{component.moreOptionText}</div>
      <div>
        <div></div>
      </div>
    </>
  );
}
