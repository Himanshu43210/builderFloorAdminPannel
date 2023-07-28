import RenderComponent from "./ComponentRenderer";
import {
  API_BUTTON,
  AUTO_FETCH_API,
  CONTAINER,
  DETAILED_VIEW,
  DYNAMIC_CARD_CONTAINER,
  GET,
  HEADING,
  IMAGE_BANNER,
  NAVIGATE_BUTTON,
  PAGE_FOOTER,
  SELECT,
  SLIDER,
  HAMBURGER_MENU,
  SELECT_SLIDER,
} from "../utils/Const";
import Banner from "./Banner";
import SelectButton from "./SelectButton";
import Slider from "./Slider";
import ApiButton from "./ApiButton";
import Heading from "./Heading";
import DynamicCardComponent from "./DynamicCardContainer";
import AutoFetchApi from "./AutoFetchApi";
import DetailCard from "./DetailedCard";
import NavigateButton from "./NavigateButton";
import { useDispatch, useSelector } from "react-redux";
import { storeFilterData } from "../../redux/slice/filterSlice";
import Footer from "./Footer";
import MenuState from "./MenupState";
import { SelectSlider } from "./SelectSlider";

const ComponentSelector = ({ component }) => {
  const dispatch = useDispatch();
  const sliceData = useSelector((state) => state[component.sliceName]);
  const testAction = (key, value) => {
    console.log(key, value);
  };
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
        <DynamicCardComponent component={component} />
      )}
      {component.type === DETAILED_VIEW && (
        <DetailCard apiName={component.apiName} />
      )}
      {component.type === NAVIGATE_BUTTON && (
        <NavigateButton to={component.navigate} label={component.buttonLabel} />
      )}
      {component.type === PAGE_FOOTER && <Footer component={component} />}
      {component.type === HAMBURGER_MENU && (
        <MenuState MenuItems={component.items} />
      )}
      {component.type === SELECT_SLIDER && (
        <SelectSlider
          component={component}
          handleValueChange={(value) => {
            testAction({ key: component.name, value: value });
            // console.log(value)
            dispatch(storeFilterData({ key: component.name, value: value }));
          }}
          stateValue={sliceData[component.name]}
        />
      )}
    </>
  );
};
export default ComponentSelector;
