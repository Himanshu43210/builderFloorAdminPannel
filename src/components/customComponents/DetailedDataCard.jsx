import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { callApi } from "../../redux/utils/apiActions";
import { useDispatch } from "react-redux";
import { GET, HORIZONTAL_LINE, SAMPLE_CARD_DATA } from "../utils/Const";
import { selectApiData } from "../../redux/utils/apiSelector";
import { API_ENDPOINTS } from "../../redux/utils/api";
import { convertToCr } from "../utils/HelperMethods";
import IframeBuilder from "./IframeBuilder";

export default function DetailDataCard({ component }) {
  // get id from url and make a api call to fetch data for that url
  const pathname = window.location.href;
  const id = pathname.split("id=").pop();
  const getApiEndpoint = component.apiSliceName;
  const apiEndpoint = API_ENDPOINTS[getApiEndpoint] + `?id=${id}`;
  console.log(apiEndpoint)
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

  // basic screen components
  const cardData = useSelector(
    (state) => selectApiData(state, getApiEndpoint)?.data
  ) || {};
  const [ShowNumber, setShowNumber] = useState();
  const [imageLink, setImageLink] = useState(cardData.images?.[0]);
  const image360 = cardData?.images?.length;
  const imageNormal = cardData?.normalImages?.length;
  const price = convertToCr(cardData?.price);



  // const [remainingImages, setRemainingImages] = useState(SAMPLE_CARD_DATA.images);

  const handleImageChange = (newImageLink) => {
    setImageLink(newImageLink);
  };

  return (
    <>
      {console.log(cardData)}
      <div className="detailcomponent">
        <p>{cardData?.title}</p>
        <div className="detail-image-div">
          <div classname="main-images">
            <div className="img360">
              {console.log(imageLink)}
              {console.log(cardData.images?.[0])}
              <IframeBuilder
                src={imageLink}
                title="Example Website"
                allowFullScreen
              />
            </div>
          </div>
          <div classname="side-images">
            {cardData.images?.map((imglink) => {
              return (
                imageLink !== imglink && (
                  <div className="other-images">
                    <img
                      src={imglink}
                      alt={component.title}
                      onClick={() => handleImageChange(imglink)}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div>
          <div variant="outlined" className="detail-button">
            {image360} Images
            {imageNormal > 0 ? `|| ${imageNormal} Normal` : ""}
          </div>
        </div>
        <div className="lowercontainer">
          <div className="detail-info-div">
            {/* Deatils & Button */}
            <div className="infodiv">
              <h3>{cardData?.detailTitle}</h3>
              <br />
              {cardData?.description}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Button variant="contained" className="detail-button">
                {"₹ " + price + " Cr."}
              </Button>
            </div>
          </div>
          <div className="detail-icon-div">
            <div className="rowicon">
              <div>
                <img src={component?.icons.sectorNumber} alt="" />
                {cardData?.sectorNumber}
              </div>
              <div>
                <img src={component?.icons.size} alt="" />
                {cardData?.size}
              </div>
              <div>
                <img src={component?.icons.accommodation} alt="" />
                {cardData?.accommodation}
              </div>
            </div>

            <div className="rowicon">
              <div>
                <img src={component?.icons.floor} alt="" />
                {cardData?.floor}
              </div>
              <div>
                <img src={component?.icons.facing} alt="" />
                {cardData?.facing}
              </div>
              <div>
                <img src={component?.icons.possession} alt="" />
                {cardData?.possession}
              </div>
            </div>

            <div className="rowicon">
              <div>
                <img src={component?.icons.parkFacing} alt="" />
                {cardData?.parkFacing}
              </div>

              <div>
                <img src={component?.icons.corner} alt="" />
                {cardData?.corner}
              </div>
            </div>

            <div className="rowicon" id="rowicon-btn">
              <Button
                className="detail-button"
                variant="contained"
                onClick={() => {
                  setShowNumber(!ShowNumber);
                }}
              >
                {ShowNumber ? component.phoneToDisplay : "Phone"}
              </Button>
              <Button
                className="detail-button"
                variant="contained"
                onClick={() => {
                  window.open(
                    `https://wa.me/${component.whatsappToDisplay
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
      <div>{component.moreOptionText}</div>
      <HORIZONTAL_LINE />
      <div>
        <div></div>
      </div>
    </>
  );
}
