import React from "react";
import generateID from "../../Util/IDgenerator";
import Locale from "../Locale";

const TextTag = props => {
  let { tag, content, lang, className = "" } = props;

  let text = Locale[lang][content.id];
  let substituted = false;
  if (!text) {
    text = content[lang];
  }

  if (!text) {
    // if content.id were suggested, the the value of id will be shown.
    text = content[Object.keys(content)[0]];
    substituted = true;
  }

  // final
  if (!text) {
    return <span>empty..</span>;
  }

  let id = generateID(text);
  className += ` TextTag`;
  if (tag) className += ` TextTag__${tag}`;
  if (substituted) className += ` TextTag__substituted`;
  className = className.trim();

  switch (tag) {
    case "h1":
      return (
        <h1 id={id} className={className}>
          {text}
        </h1>
      );
    case "h2":
      return (
        <h2 id={id} className={className}>
          {text}
        </h2>
      );
    case "h3":
      return (
        <h3 id={id} className={className}>
          {text}
        </h3>
      );
    case "h4":
      return (
        <h4 id={id} className={className}>
          {text}
        </h4>
      );
    case "h5":
      return (
        <h5 id={id} className={className}>
          {text}
        </h5>
      );
    case "h6":
      return (
        <h6 id={id} className={className}>
          {text}
        </h6>
      );
    case "p":
      return (
        <p id={id} className={className}>
          {text}
        </p>
      );
    default:
      return <span>{text}</span>;
  }
};

export default TextTag;
