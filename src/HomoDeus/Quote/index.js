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

    let quoteText = Locale[lang][quote.id];
    let locText = Locale[lang][quote.id + ".loc"];
    let substituted = false;
    if (!quoteText) {
      quoteText = quote[lang];
      locText = loc[lang];
    }

    if (!quoteText) {
      // if quote.id were suggested, the id will be shown.
      let key = Object.keys(quote)[0];
      quoteText = quote[key];
      locText = loc[key];
      substituted = true;
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
      <div className="Quote">
        <blockquote className="Item__quote">{quoteText}</blockquote>
        <div className="Item__localRow">
          <p className="Item__local">{locText}</p>
        </div>
      </div>
    );
  }
}
