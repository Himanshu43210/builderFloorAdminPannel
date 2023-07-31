import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectApiData } from "../../redux/utils/apiSelector";
// import Footer from "./Footer";
import { Button } from "react-bootstrap";
// import HomeCard from "./HomeCard";

export default function DetailDataCard({ apiName }) {
    const [cardData, setCardData] = useState({
        "_id": "64afc549a2296dbf7be6efe8",
        "city": "GURGAON",
        "sectorNumber": "DLF PHASE 3",
        "plotNumber": "S25/1",
        "size": 500,
        "facing": "NORTH",
        "accommodation": "4 BHK",
        "parkFacing": true,
        "corner": true,
        "floor": "1st Floor",
        "possession": "READY",
        "title": "4 BHK Builder Floor in Gurgaon",
        "detailTitle": "4BHK Ultra luxury Brand New Builder Floor Available for Sale in DLF PHASE 3 Gurgaon",
        "description": "• Near Golf Course Road\n• Near Rapid Metro\n• Near Ambi Mall\n• Near Cyber Hub\n• 5 Min. Driving Distance form NH-8\n• Wardrobe in Each Room with attached washrooms\n• Modular Kitchen\n• Italian Marble\n• Chimney & Hob with Exhaust FAN",
        "builderName": "PALM FLOORS",
        "builderContact": 9711198530,
        "price": 45000000,
        "address": null,
        "editor_choice": false,
        "category": "plot",
        "state": "haryana",
        "images": [
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114245_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114301_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114316_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114742_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114755_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114926_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_114956_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115038_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115112_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115130_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115156_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115212_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115245_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115306_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115340_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115406_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115421_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115454_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115510_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115529_00_merged.jpg",
            "uploads/S25-1 DLF3/1st Floor/Copy of IMG_20230429_115552_00_merged.jpg"
        ],
        "thumbnails": [
            "uploads/S25-1 DLF3/1st Floor/THUMBNAIL 1.jpg"
        ],
        "imageType": "360 DEGREE",
        "folder": "S25-1 DLF3",
        "channelPartner": "Arun Arora",
        "channelContact": 9811586101,
        "thumbnailName": "THUMBNAIL 1",
        "createdAt": "2023-07-13T09:35:05.088Z",
        "updatedAt": "2023-07-13T09:35:05.088Z",
        "__v": 0
    })
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
                        <Button variant="contained">{cardData?.channelContact?.$numberLong}</Button>
                        <Button variant="contained">{cardData?.price}</Button>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                Explore similar options to match your choice
                {/* <HomeCard/> */}
                {/* <Footer/> */}
            </div>
        </>
    );
}