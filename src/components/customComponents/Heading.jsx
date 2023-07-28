import React from "react";

export default function Heading({ name, tag, className, text }) {
  const Tag = tag || "h1";

  return (
    <Tag key={name} className={className}>
      {text}
    </Tag>
  );
}
