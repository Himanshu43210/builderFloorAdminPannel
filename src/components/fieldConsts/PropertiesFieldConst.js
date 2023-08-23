import { TEXT } from "../utils/Const";

export const newPropertyConst = [
  {
    name: "city",
    label: "City",
    type: "select",
    isRequired: true,
    options: [{ value: "gurgaon", label: "Gurgaon" }],
    requiredErrorMessage: "Please select a city.",
  },
  {
    name: "sectorNumber",
    label: "Sector Number",
    type: "select",
    isRequired: true,
    options: [
      { value: "dlfCityPhase1", label: "DLF City Phase 1" },
      { value: "dlfCityPhase2", label: "DLF City Phase 2" },
      { value: "dlfCityPhase3", label: "DLF City Phase 3" },
      { value: "dlfCityPhase4", label: "DLF City Phase 4" },
    ],
    requiredErrorMessage: "Please select a sector number.",
  },
  {
    name: "plotNumber",
    label: "Plot Number",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a plot number.",
  },
  {
    name: "size",
    label: "Size",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a size.",
  },
  {
    name: "facing",
    label: "Facing",
    type: "select",
    isRequired: true,
    options: [
      { value: "North", label: "North" },
      { value: "South", label: "South" },
      { value: "East", label: "East" },
      { value: "West", label: "West" },
      { value: "North-East", label: "North-East" },
      { value: "North-West", label: "North-West" },
      { value: "South-East", label: "South-East" },
      { value: "South-West", label: "South-West" },
    ],
    requiredErrorMessage: "Please select a facing direction.",
  },
  {
    name: "accommodation",
    label: "Accommodation",
    type: "select",
    isRequired: true,
    options: [
      { value: "2BHK", label: "2 BHK" },
      { value: "3BHK", label: "3 BHK" },
      { value: "4BHK", label: "4 BHK" },
      { value: "5BHK", label: "5 BHK" },
      { value: "6BHK", label: "6 BHK" },
    ],
    requiredErrorMessage: "Please select an accommodation.",
  },
  {
    name: "parkFacing",
    label: "Park Facing",
    type: "radio",
    dataKey: "parkFacing",
    isRequired: true,
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
    requiredErrorMessage: "Please select an option for park facing.",
  },
  {
    name: "corner",
    label: "Corner",
    type: "radio",
    isRequired: true,
    dataKey: "corner",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
    requiredErrorMessage: "Please select an option for corner.",
  },
  {
    name: "floor",
    label: "Floor",
    type: "select",
    options: [
      { value: "FirstFloor", label: "First Floor" },
      { value: "SecondFloor", label: "Second Floor" },
      { value: "ThirdFloor", label: "Third Floor" },
      { value: "FourthFloor", label: "Fourth Floor" },
      { value: "Basement+FirstFloor", label: "Basement + First Floor" },
    ],
    isRequired: true,
    requiredErrorMessage: "Please enter a floor.",
  },
  {
    name: "possession",
    label: "Possession",
    type: "select",
    isRequired: true,
    options: [
      { value: "Ready", label: "Ready" },
      { value: "1Months", label: "1 Months" },
      { value: "3Months", label: "3 Months" },
      { value: "6Months", label: "6 Months" },
      { value: "9Months", label: "9 Months" },
      { value: "12Months", label: "12 Months" },
    ],
    requiredErrorMessage: "Please select a possession status.",
  },
  {
    name: "title",
    label: "Title",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a title.",
  },
  {
    name: "detailTitle",
    label: "Detail Title",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a detail title.",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    isRequired: true,
    requiredErrorMessage: "Please enter a description.",
  },
  {
    name: "builderName",
    label: "Builder Name",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a builder name.",
  },
  {
    name: "builderContact",
    label: "Builder Contact",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a builder contact.",
  },
  {
    name: "price",
    label: "Price",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a price.",
  },
  {
    name: "address",
    label: "Address",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter an address.",
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    isRequired: true,
    options: [
      { value: "Flat", label: "Flat" },
      { value: "House", label: "House" },
    ],
    requiredErrorMessage: "Please select a category.",
  },
  {
    name: "state",
    label: "State",
    type: "select",
    isRequired: true,
    options: [{ value: "Haryana", label: "Haryana" }],
    requiredErrorMessage: "Please select a state.",
  },
  // {
  //   name: "images",
  //   label: "Images",
  //   type: "textarea",
  //   isRequired: true,
  //   requiredErrorMessage: "Please enter images.",
  // },
  {
    name: "thumbnails",
    label: "Thumbnails",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter thumbnails.",
  },
  // {
  //   name: "imageType",
  //   label: "Image Type",
  //   type: "select",
  //   isRequired: true,
  //   options: [
  //     { value: "normalImage", label: "Normal Image" },
  //     { value: "360Degree", label: "360 DEGREE" },
  //   ],
  //   requiredErrorMessage: "Please select an image type.",
  // },
  {
    name: "folder",
    label: "Folder",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a folder.",
  },
  {
    name: "channelPartner",
    label: "Channel Partner",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a channel partner.",
  },
  {
    name: "channelContact",
    label: "Channel Contact",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter a channel contact.",
  },
  // {
  //   name: "thumbnailName",
  //   label: "Thumbnail Name",
  //   type: TEXT,
  //   isRequired: true,
  //   requiredErrorMessage: "Please enter a thumbnail name.",
  // },
  {
    name: "thumbnailFile",
    label: "Add Thumbnail Image : ",
    type: "file",
    isRequired: true,
    requiredErrorMessage: "Please Add 360 Image",
  },
  {
    name: "normalImageFile",
    label: "Add Normal Image : ",
    type: "file",
    isRequired: true,
    requiredErrorMessage: "Please Add 360 Image",
  },
  {
    name: "threeSixtyImages",
    label: "Add 360 Image : ",
    type: "file",
    isRequired: true,
    requiredErrorMessage: "Please Add 360 Image",
  },
  {
    name: "layoutFile",
    label: "Add Layout Plan: ",
    type: "file",
    isRequired: true,
    requiredErrorMessage: "Please Add 360 Image",
  },
  {
    name: "VideoFile",
    label: "Add Videos: ",
    type: "file",
    isRequired: true,
    requiredErrorMessage: "Please Add 360 Image",
  },
  {
    name: "virtualFile",
    label: "Add Virtual Tour: ",
    type: "file",
    isRequired: true,
    requiredErrorMessage: "Please Add 360 Image",
  },
];
export const bulkuploadheader =[{
  property: ["Property id", "City", "Location", "Plot Number", "Size", "Floor", "Accommodation", "Possession", "Price", "Facing", "Park Facing", "Corner", "Description", "1st Page Title", "2 Page Title", "Channel Partner Name", "Channel Contact Number","Builder name", "Contact", "THUMBNAIL IMAGE NAME", "FOLDER NAME"],
}
  
];