import React, { Component } from "react";
import "./index.scss";

import Locale from "../Locale";

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { quote, loc = {}, lang, className = "" } = this.props;
    let otherLang = lang === "en" ? "ko" : "en";

    let quoteText = Locale[lang][quote.id];
    let locText = Locale[lang][quote.id + ".loc"];
    let substituted = false;

    // check whether there is other option
    if (!quoteText) {
      quoteText = Locale[otherLang][quote.id];
      locText = Locale[otherLang][quote.id + ".loc"];
      substituted = true;
    }
    // check whether inserted as inline object
    if (!quoteText) {
      if (quote[lang]) {
        quoteText = quote[lang];
        locText = loc[lang];
      } else if (quote[otherLang]) {
        quoteText = quote[otherLang];
        locText = loc[otherLang];
        substituted = true;
      }
    }

    // final
    if (!quoteText) {
      return <span>empty..</span>;
    }

    className += ` QuoteTag`;
    if (substituted) className += ` QuoteTag__substituted`;
    className = className.trim();

    // let quoteText = `But the single greatest constant of history is that everything changes.`;
    // let locText = `- ${100}쪽 ${23}줄`;

    return (
      <div className={className}>
        <blockquote className="content">{quoteText}</blockquote>
        <div className="localRow">
          <p className="local">{locText}</p>
        </div>
      </div>
    );
  }
}
