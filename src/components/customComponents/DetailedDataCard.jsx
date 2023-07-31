import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import { callApi } from "../../redux/utils/apiActions";
import { useDispatch } from "react-redux";
import { GET } from "../utils/Const";
import { selectApiData } from "../../redux/utils/apiSelector";
import { API_ENDPOINTS } from "../../redux/utils/api";

export default function DetailDataCard({ component }) {
    const pathname = window.location.href;
    const id = pathname.split('id=').pop();
    const getApiEndpoint = component.apiSliceName
    const apiEndpoint = API_ENDPOINTS[getApiEndpoint] + `?id=${id}`

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(callApi({
            url: apiEndpoint,
            method: GET,
            headers: { "Content-Type": "application/json" },
            queryParams: { "id": "helos" }
        }));
        console.log(id)
    }, [])


    const cardData = useSelector((state) => selectApiData(state, getApiEndpoint)?.data);
    const [ShowNumber, setShowNumber] = useState();
    // const cardDetail = useSelector((state) => selectApiData(state, apiName));
    // useEffect(() => {
    //     setCardData(cardDetail?.data)
    // }, [cardDetail]);
    // console.log(cardDetail)
    return (
        <>
            {console.log(cardData)}
            <div>
                {cardData?.title}
                <div>
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114245_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114301_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114316_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114742_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114755_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114926_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114956_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115212_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115245_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115306_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115340_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115406_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115421_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115454_00_merged.jpg" alt="" />
                    <img arc="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115510_00_merged.jpg" alt="" />
                    <img src="uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115529_00_merged.jpg" alt="" />
                    <img src="https://builderfloors.s3.ap-south-1.amazonaws.com/upload/photos/B473SL1/3rd%20Floor/NORMAL/THUMBNAIL.jpg" alt="" />
                </div>
                <div>
                    <Button variant="outlined">14-Panorma | 1-NORMAL</Button>
                    <div>
                        {/* Deatils & Button */}
                        detailTitle : {cardData?.detailTitle}<br />
                        description : {cardData?.description}
                        <Button variant="contained">{cardData?.price}</Button>
                    </div>
                    <div>
                        <img src="https://www.builderfloor.com/assets/imgs/icons/location.png" alt="" />{cardData?.sectorNumber}
                        <img src="https://www.builderfloor.com/assets/imgs/icons/area.png" alt="" />{cardData?.size}
                        <img src="https://www.builderfloor.com/assets/imgs/icons/home.png" alt="" />{cardData?.accommodation}
                        <img src="https://www.builderfloor.com/assets/imgs/icons/stairs.png" alt="" />{cardData?.floor}
                        <img src="https://www.builderfloor.com/assets/imgs/icons/compass.png" alt="" />{cardData?.facing}
                        <img src="https://www.builderfloor.com/assets/imgs/icons/check.png" alt="" />{cardData?.possession}
                        <img src="https://www.builderfloor.com/assets/imgs/icons/park.png" alt="" />{cardData?.parkFacing}
                        <img src="https://www.builderfloor.com/assets/imgs/icons/right.png" alt="" />{cardData?.corner}
                        <Button variant="contained" onClick={() => { setShowNumber(!ShowNumber) }}>{ShowNumber ? component.phoneToDisplay : "Phone"}</Button>
                        <Button variant="contained" onClick={() => {
                            window.open(
                                `https://wa.me/${component.whatsappToDisplay}?text=${component.whatsappText?.replace("{link}", pathname)}`,
                                "_blank"
                            )
                        }}>WhatsApp</Button>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                Explore similar options to match your choice
            </div>
            <div>
                <div>

                </div>
            </div>
        </>
    );
}