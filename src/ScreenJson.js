import {
  API_BUTTON,
  AUTO_FETCH_API,
  CONTAINER,
  DETAILED_VIEW,
  DYNAMIC_CARD_CONTAINER,
  GET,
  HAMBURGER_MENU,
  HEADING,
  HOME_CARD,
  IMAGE_BANNER,
  NAVIGATE_BUTTON,
  SELECT,
  SLIDER,
} from "./components/utils/Const";
import { API_ENDPOINTS } from "./redux/utils/api";

const SEARCH_BAR_1 = {
  type: CONTAINER,
  children: [
    {
      type: SELECT,
      sliceName: "filter",
      name: "city",
      defaultValue: { label: "Gurgaon", value: "Gurgaon" },
      options: [{ label: "Gurgaon", value: "Gurgaon" }],
    },
    {
      type: SLIDER,
      sliceName: "filter",
      name: "budget",
      minValue: 2.5,
      maxValue: 3.5,
      defaultValue: [2.8, 3.0],
    },
    {
      type: API_BUTTON,
      sliceName: "filter",
      name: "search",
      buttonLabel: "Search",
      apiType: GET,
      navigate: "/searchResult",
      api: API_ENDPOINTS["getSearchResult"],
    },
  ],
};

export const MENU_ITEMS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Login Success",
    path: "/login-success",
  },
  {
    name: "Search Result",
    path: "/searchResult",
  },
  {
    name: "Builder Floor Details",
    path: "/DetailedView",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Admin Dashboard",
    path: "/adminDashboard",
  },
  {
    name: "User",
    path: "/user",
  },
  {
    name: "Property",
    path: "/property",
  },
  {
    name: "Master",
    path: "/Master",
  },
];

export const HOME_SCREEN = {
  name: "Home Screen",
  children: [
    {
      type: HAMBURGER_MENU,
      items: MENU_ITEMS,
    },
    {
      type: AUTO_FETCH_API,
      api: API_ENDPOINTS["getHomeScreenData"],
    },
    {
      type: IMAGE_BANNER,
      name: "homeImageBanner",
      className: "home-page-banner",
      text: "Start Exploring Your Dream Builder Floor now",
      bgImage:
        "https://thumbs.dreamstime.com/b/mumbai-capital-india-mumbai-india-december-mumbai-financial-commercial-entertainment-capital-india-december-112388360.jpg",
    },
    SEARCH_BAR_1,
    {
      type: HEADING,
      name: "homeScreenHeading",
      tag: "h2",
      className: "home-screen-card-section-heading",
      text: "Explore Top Builder Floor to Match Your Choice",
    },
    {
      type: DYNAMIC_CARD_CONTAINER,
      className: "default-home-cards",
      apiName: "getHomeScreenData",
      renderComponentsInLoop: { type: HOME_CARD, className: "homeCards" },
      cardClickApi: API_ENDPOINTS["getBuilderFloorData"],
      cardClickNavigate: "/builderFloorDetails",
    },
    {
      type: HEADING,
      name: "homeScreenBottom",
      tag: "h2",
      className: "home-screen-card-section-bottom",
      text: "We are your trusted partner in finding your dream builder floor in Gurgaon",
    },
  ],
};

export const CARD_DETAILS_SCREEN = {
  name: "Home Screen",
  children: [
    {
      type: NAVIGATE_BUTTON,
      name: "navigateBackToHome",
      navigate: "/",
      buttonLabel: "Go Back",
    },
    {
      type: DETAILED_VIEW,
      name: "detailedViewImage",
      className: "home-page-banner",
      apiName: "getBuilderFloorData",
    },
  ],
};

export const SEARCH_RESULT = {
  name: "Search Result",
  children: [
    SEARCH_BAR_1,
    {
      type: CONTAINER,
      children: [
        {
          type: SELECT,
          sliceName: "filter",
          name: "floor",
          label: "Floors",
          options: [
            { label: "First Floor", value: "firstFloor" },
            { label: "Second Floor", value: "secondFloor" },
            { label: "Third Floor", value: "thirdFloor" },
            { label: "Fourth Floor", value: "fourthFloor" },
            {
              label: "Basement + First Floor",
              value: "basementPlusFirstFloor",
            },
          ],
        },
        {
          type: SELECT,
          sliceName: "filter",
          name: "location",
          label: "Location",
          options: [
            { label: "DLF City Phase 1", value: "DLF City Phase 1" },
            { label: "DLF City Phase 2", value: "DLF City Phase 2" },
            { label: "DLF City Phase 3", value: "DLF City Phase 3" },
            { label: "DLF City Phase 4", value: "DLF City Phase 4" },
            { label: "Sector 15 Part 2", value: "Sector 15 Part 2" },
            { label: "Sector 27", value: "Sector 27" },
            { label: "Sector 28", value: "Sector 28" },
            { label: "Sector 38", value: "Sector 38" },
            { label: "Sector 42", value: "Sector 42" },
            { label: "Sector 43", value: "Sector 43" },
            { label: "Sector 45", value: "Sector 45" },
            { label: "Sector 46", value: "Sector 46" },
            { label: "South City 1", value: "South City 1" },
            { label: "Sushant Lok 1", value: "Sushant Lok 1" },
          ],
        },
        {
          type: SELECT,
          sliceName: "filter",
          name: "size",
          defaultValue: { label: "Gurgaon", value: "Gurgaon" },
          options: [{ label: "Gurgaon", value: "Gurgaon" }],
        },
        {
          type: SELECT,
          sliceName: "filter",
          name: "accomodation",
          label: "Accomodation",
          options: [
            { label: "2 BHK", value: "2 BHK" },
            { label: "3 BHK", value: "3 BHK" },
            { label: "4 BHK", value: "4 BHK" },
            { label: "5 BHK", value: "5 BHK" },
            { label: "6 BHK", value: "6 BHK" },
          ],
        },
        {
          type: SELECT,
          sliceName: "filter",
          name: "possesion",
          label: "Possesion",
          options: [
            { label: "Ready", value: "Ready" },
            { label: "1 Months", value: "1 Months" },
            { label: "3 Months", value: "3 Months" },
            { label: "6 Months", value: "6 Months" },
            { label: "9 Months", value: "9 Months" },
            { label: "12 Months", value: "12 Months" },
          ],
        },
        {
          type: SELECT,
          sliceName: "filter",
          name: "facing",
          label: "Facing",
          options: [
            { label: "North", value: "North" },
            { label: "South", value: "South" },
            { label: "East", value: "East" },
            { label: "West", value: "West" },
            { label: "North-East", value: "North-East" },
            { label: "North-West", value: "North-West" },
            { label: "South-East", value: "South-East" },
            { label: "South-West", value: "South-West" },
          ],
        },
        {
          type: SELECT,
          sliceName: "filter",
          name: "sortBy",
          label: "Sort By",
          options: [
            { label: "Price High to Low", value: "Price High to Low" },
            { label: "Price Low to High", value: "Price Low to High" },
          ],
        },
      ],
    },
    {
      type: DYNAMIC_CARD_CONTAINER,
      className: "default-home-cards",
      apiName: "getHomeScreenData",
      renderComponentsInLoop: { type: HOME_CARD, classNmae: "homeCards" },
      cardClickApi: API_ENDPOINTS["getBuilderFloorData"],
      cardClickNavigate: "/builderFloorDetails",
    },
  ],
};

export const SCREENS_TO_RENDER = [HOME_SCREEN];

export const REDIRECTION = {
  [HOME_SCREEN]: "/",
  [SEARCH_RESULT]: "/searchResult",
};
