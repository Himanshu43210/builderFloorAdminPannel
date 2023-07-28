export default function Banner({ name, text, bgImage, className }) {
  return (
    <>
      <article
        key={name}
        className={className}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1>{text}</h1>
      </article>
    </>
  );
}
