import React from "react";
import generateID from "../../Util/IDgenerator";

const TextTag = props => {
  let { tag, locale, lang, className = "" } = props;
  let selected = locale[lang];
  let substituted = false;
  if (!selected) {
    selected = locale[Object.keys(locale)[0]];
    substituted = true;
  }

  let id = generateID(selected);
  className += ` TextTag`;
  if (tag) className += ` TextTag__${tag}`;
  if (substituted) className += ` TextTag__substituted`;
  className = className.trim();

  switch (tag) {
    case "h1":
      return (
        <h1 id={id} className={className}>
          {selected}
        </h1>
      );
    case "h2":
      return (
        <h2 id={id} className={className}>
          {selected}
        </h2>
      );
    case "h3":
      return (
        <h3 id={id} className={className}>
          {selected}
        </h3>
      );
    case "h4":
      return (
        <h4 id={id} className={className}>
          {selected}
        </h4>
      );
    case "h5":
      return (
        <h5 id={id} className={className}>
          {selected}
        </h5>
      );
    case "h6":
      return (
        <h6 id={id} className={className}>
          {selected}
        </h6>
      );
    case "p":
      return (
        <p id={id} className={className}>
          {selected}
        </p>
      );
    default:
      return <span>{selected}</span>;
  }
};

export default TextTag;
