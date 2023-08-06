export default function Banner({ component }) {
  return (
    <>
      <article
        key={component.name}
        className={component.className}
        style={{ backgroundImage: `url(${component.bgImage})` }}
      >
        <h1>
          {component.text}
        </h1>
        {component.spanText && <span>{component.spanText}</span>}

      </article>
    </>
  );
}
