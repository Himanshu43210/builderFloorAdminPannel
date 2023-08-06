import { SPAN_TEXT } from "../utils/Const";

export default function Banner({ component }) {
  return (
    <>
      <article
        key={component.name}
        className={component.className}
        style={{ backgroundImage: `url(${component.bgImage})` }}
      >
        <h1>
          {component.spanTextToReplace
            ? component.text?.replace(SPAN_TEXT, component.spanTextToReplace)
            : component.text}
        </h1>
      </article>
    </>
  );
}
