import React from "react";

export default function Header({ component }) {
  return (
    <div>
      <a className="headerlink" href={component.url}>
        <img src={component.image} alt="" width="40px" height="50px" />
        {component.title}
      </a>
    </div>
  );
}
