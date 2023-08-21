import { EMAIL, TEXT } from "../utils/Const";

export const newUserConst = [
  {
    name: "name",
    label: "Name",
    dataKey: "name",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your name.",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    dataKey: "PhoneNumber",
    type: "phoneOTP",
    isRequired: true,
    requiredErrorMessage: "Please enter your phone number.",
  },
  {
    name: "address",
    label: "Address",
    dataKey: "address",
    type: TEXT,
    isRequired: true,
    requiredErrorMessage: "Please enter your address.",
  },
  {
    name: EMAIL,
    label: "Email",
    dataKey: "email",
    type: EMAIL,
    isRequired: true,
    requiredErrorMessage: "Please enter your email.",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    isRequired: true,
    requiredErrorMessage: "Please enter your password.",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    isRequired: true,
    requiredErrorMessage: "Please confirm your password.",
  },

  {
    name: "role",
    label: "Role",
    dataKey: "role",
    type: "select",
    isRequired: true,
    options: [
      { value: "BuilderFloorAdmin", label: "Builder Floor Admin" },
      { value: "ChannelPartner", label: "Channel Partner" },
      { value: "PropertyDealer", label: "Property Dealer" },
    ],
    requiredErrorMessage: "Please select a role.",
  },
];
