import RenderComponent from "./ComponentRenderer";
import {
  API_BUTTON,
  AUTO_FETCH_API,
  CONTAINER,
  DETAILED_VIEW,
  DYNAMIC_CARD_CONTAINER,
  FILTERED_SEARCH,
  GET,
  HEADING,
  IMAGE_BANNER,
  NAVIGATE_BUTTON,
  PAGE_FOOTER,
  SELECT,
  SLIDER,
  HAMBURGER_MENU
} from "../utils/Const";
import Banner from "./banner";
import SelectButton from "./selectButton";
import Slider from "./slider";
import ApiButton from "./apiButton";
import Heading from "./heading";
import DynamicCardComponent from "./dynamicCardContainer";
import AutoFetchApi from "./autoFetchApi";
import DetailCard from "./detailedCard";
import NavigateButton from "./navigateButton";
import { useDispatch, useSelector } from "react-redux";
import { storeFilterData } from "../../redux/slice/filterSlice";
import Footer from "./Footer";
import { FilteredSelect } from "./FilteredSelect";
import MenuState from "./MenupState"

const ComponentSelector = ({ component }) => {
  const dispatch = useDispatch();
  const sliceData = useSelector((state) => state[component.sliceName]);

  return (
    <>
      {component.type === AUTO_FETCH_API && (
        <AutoFetchApi url={component.api} method={GET} />
      )}
      {component.type === CONTAINER && (
        <RenderComponent jsonToRender={component} />
      )}
      {component.type === IMAGE_BANNER && (
        <Banner
          text={component.text}
          bgImage={component.bgImage}
          className={component.className}
        />
      )}
      {component.type === SELECT && (
        <SelectButton
          name={component.name}
          options={component.options}
          defaultValue={component.defaultValue}
          handleValueChange={(value) => {
            dispatch(storeFilterData({ key: component.name, value: value }));
          }}
          label={component.label}
          value={sliceData[component.name]}
        />
      )}
      {component.type === SLIDER && (
        <Slider
          name={component.text}
          minValue={component.minValue}
          maxValue={component.maxValue}
          defaultValue={component.defaultValue}
          handleValueChange={(value) => {
            dispatch(storeFilterData({ key: component.name, value: value }));
          }}
          value={sliceData[component.name]}
        />
      )}
      {component.type === API_BUTTON && (
        <ApiButton
          apiType={component.apiType}
          api={component.api}
          buttonLabel={component.buttonLabel}
          queryParams={sliceData}
          navigate={component.navigate}
        />
      )}
      {component.type === HEADING && (
        <Heading
          tag={component.tag}
          text={component.text}
          name={component.name}
          className={component.className}
        />
      )}
      {component.type === DYNAMIC_CARD_CONTAINER && (
        <DynamicCardComponent
          apiName={component.apiName}
          onClickApi={component.cardClickApi}
          onClickNavigate={component.cardClickNavigate}
        />
      )}
      {component.type === DETAILED_VIEW && (
        <DetailCard apiName={component.apiName} />
      )}
      {component.type === NAVIGATE_BUTTON && (
        <NavigateButton to={component.navigate} label={component.buttonLabel} />
      )}
      {component.type === PAGE_FOOTER && (
        <Footer component={component} />
      )}
      {component.type === FILTERED_SEARCH && (
        <FilteredSelect component={component} />)}
      {component.type === HAMBURGER_MENU && (
        <MenuState MenuItems={component.items} />
      )}
    </>
  );
};
export default ComponentSelector;
