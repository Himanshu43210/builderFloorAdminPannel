import {
  API_BUTTON,
  API_HEADING,
  AUTO_FETCH_API,
  CONTAINER,
  DETAILED_VIEW,
  DYNAMIC_CARD_CONTAINER,
  GET,
  GET_CARD_DATA,
  GET_SEARCH_RESULT,
  HAMBURGER_MENU,
  HEADING,
  HOME_CARD,
  IMAGE_BANNER,
  NAVIGATE_BUTTON,
  PAGE_FOOTER,
  PAGE_HEADER,
  POST,
  SCROLL_TO_TOP,
  SEARCH_CARD,
  SELECT,
  SELECT_SLIDER,
  SLIDER,
  TOGGLE_BUTTON,
} from "./components/utils/Const";
import { API_ENDPOINTS } from "./redux/utils/api";

const FOOTER = {
  type: PAGE_FOOTER,
  className: "default-home-footer-div",
  HomeLinks: { icon: "https://www.builderfloor.com/assets/imgs/template/BUILDER.png", url: "https://www.builderfloor.com/" },
  social_media: [
    { name: "instagram",icon: "https://wilde-signs.com/wp-content/uploads/2018/05/Instagram-Blue-Logo-400x400.png", url: "https://www.twitter.com/example" }, //for instagram
    { name: "linkedin",icon: "https://www.shareicon.net/data/2015/08/29/92755_linkedin_606x606.png", url: "https://www.linkedin.com/in/example" },
  ],
  copyright: "© Builder Floor Official 2022",
};

const MENU_ITEMS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Admin Dashboard",
    path: "/adminDashboard",
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
    {
      type: CONTAINER,
      className: "homeselect",
      children: [
        {
          type: SELECT,
          className: "select-city-button",
          sliceName: "filter",
          name: "city",
          defaultValue: { label: "Gurgaon", value: "Gurgaon" },
          options: [{ label: "Gurgaon", value: "Gurgaon" }],
        },
        {
          type: SLIDER,
          sliceName: "filter",
          className: "select-range",
          name: "budget",
          minValue: 20000000,
          maxValue: 35000000,
          step: 1000000,
          defaultValue: [20000000, 30000000],
        },
        {
          type: API_BUTTON,
          sliceName: "filter",
          name: "search",
          buttonLabel: "Search",
          className: "home-search-button",
          apiType: POST,
          navigate: "/searchResult",
          api: API_ENDPOINTS[GET_SEARCH_RESULT],
          searchWithQueryParams: true,
        },
      ],
    },
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
      cardClickApi: API_ENDPOINTS[GET_CARD_DATA],
      cardClickNavigate: "/builderFloorDetails",
      addQueryParam: "{title}-{id}",
      cardClickApiType: GET,
    },
    {
      type: HEADING,
      name: "homeScreenBottom",
      tag: "h2",
      className: "home-screen-card-section-bottom",
      text: "We are your trusted partner in finding your dream builder floor in Gurgaon",
    },
    FOOTER,
    {
      type: SCROLL_TO_TOP,
      name: "ScrollToTop",
    },
    {
      type: PAGE_HEADER,
      url: "https://www.builderfloor.com/",
    }
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
      apiSliceName: GET_CARD_DATA,
      phoneToDisplay: "+91 9818215215",
      whatsappToDisplay: "9818215215",
      whatsappText: `Hi! I saw a property {link} on BuilderFloor.com and i am interested in it. Is it available?`,
    },
    // {
    //   type: DYNAMIC_CARD_CONTAINER,
    //   className: "default-home-cards",
    //   apiName: "getHomeScreenData",
    //   renderComponentsInLoop: { type: HOME_CARD, className: "homeCards" },
    //   cardClickApi: API_ENDPOINTS[GET_CARD_DATA],
    //   cardClickNavigate: "/builderFloorDetails",
    //   addQueryParam: "{title}-{id}",
    //   cardClickApiType: GET,
    // },
  ],
};

export const SEARCH_RESULT = {
  name: "Search Result",
  className: "klk",
  children: [
    {
      type: HAMBURGER_MENU,
      items: MENU_ITEMS,
    },
    {
      type: API_HEADING,
      name: "matchFoundHeading",
      tag: "h2",
      className: "match-found-heading",
      dynamicDetails: {
        api: GET_SEARCH_RESULT,
        textReplace: "_TEXT_TO_REPLACE_",
      },
      text: "_TEXT_TO_REPLACE_ Mathces Found",
    },
    {
      type: CONTAINER,
      className: "actioncontainer",
      children: [
        {
          type: SELECT,
          className: "select-city-button",
          sliceName: "filter",
          name: "city",
          defaultValue: { label: "Gurgaon", value: "Gurgaon" },
          options: [{ label: "Gurgaon", value: "Gurgaon" }],
        },
        {
          type: SLIDER,
          sliceName: "filter",
          name: "budget",
          minValue: 20000000,
          maxValue: 35000000,
          step: 1000000,
          defaultValue: [20000000, 30000000],
        },
        {
          type: API_BUTTON,
          sliceName: "filter",
          name: "search",
          buttonLabel: "Search",
          apiType: POST,
          navigate: "/searchResult",
          api: API_ENDPOINTS[GET_SEARCH_RESULT],
        },
      ],
    },
    {
      type: CONTAINER,
      name: "cardBodyContainer",
      className: "cardBodyContainer",
      children: [
        {
          type: CONTAINER,
          className: "filter-button-div",
          children: [
            {
              type: SELECT,
              sliceName: "filter",
              name: "floor",
              label: "Floors",
              className: "filterbutton",
              onClickApi: API_ENDPOINTS[GET_SEARCH_RESULT],
              onClickApiMethod: POST,
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
              className: "filterbutton",
              onClickApi: API_ENDPOINTS[GET_SEARCH_RESULT],
              onClickApiMethod: POST,
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
              type: SELECT_SLIDER,
              sliceName: "filter",
              name: "size",
              buttonLabel: "Size",
              className: "",
              minValue: 0.0,
              maxValue: 1000.0,
              onClickApi: API_ENDPOINTS[GET_SEARCH_RESULT],
              onClickApiMethod: POST,
              step: 0.1,
              defaultValue: [180.0, 360.0],
            },
            {
              type: SELECT,
              sliceName: "filter",
              name: "accomodation",
              label: "Accomodation",
              className: "filterbutton",
              onClickApi: API_ENDPOINTS[GET_SEARCH_RESULT],
              onClickApiMethod: POST,
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
              className: "filterbutton",
              onClickApi: API_ENDPOINTS[GET_SEARCH_RESULT],
              onClickApiMethod: POST,
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
              className: "filterbutton",
              onClickApi: API_ENDPOINTS[GET_SEARCH_RESULT],
              onClickApiMethod: POST,
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
              className: "filterbutton",
              name: "sortBy",
              label: "Sort By",
              onClickApi: API_ENDPOINTS[GET_SEARCH_RESULT],
              onClickApiMethod: POST,
              options: [
                { label: "Price High to Low", value: "Price High to Low" },
                { label: "Price Low to High", value: "Price Low to High" },
              ],
            },
            {
              type: TOGGLE_BUTTON,
              sliceName: "filter",
              name: "Park",
            },
          ],
        },
        {
          type: DYNAMIC_CARD_CONTAINER,
          sliceName: "filter",
          className: "result-searchdiv",
          apiName: GET_SEARCH_RESULT,
          paginatioName: "searchPage",
          defaultPage: 1,
          cardPerPage: 5,
          onClickApi: API_ENDPOINTS[GET_SEARCH_RESULT],
          onClickApiMethod: POST,
          renderComponentsInLoop: {
            type: SEARCH_CARD,
            className: "homeCards",
          },
          cardClickApi: API_ENDPOINTS[GET_CARD_DATA],
          cardClickNavigate: "/builderFloorDetails",
          cardClickApiType: GET,
        },
      ],
    },
  ],
};

export const SCREENS_TO_RENDER = [HOME_SCREEN];

export const REDIRECTION = {
  [HOME_SCREEN]: "/",
  [SEARCH_RESULT]: "/searchResult",
};
// export const SCREENS_TO_RENDER = [HOME_SCREEN];

// export const REDIRECTION = {
//   [HOME_SCREEN]: "/",
//   [SEARCH_RESULT]: "/searchResult",
// };
