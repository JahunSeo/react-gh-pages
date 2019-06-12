import React, { Component } from "react";
import "./index.scss";

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { quote, mainLang } = this.props;
    let selected = quote[mainLang];
    if (!selected) {
      selected = quote[Object.keys(quote)[0]];
    }

    let quoteText = selected.content;
    let localText = ``;
    if (selected.local) {
      localText += `- ${selected.local.p}쪽`;
      if (selected.local.r) localText += ` ${selected.local.r}줄`;
    }
    // let quoteText = `But the single greatest constant of history is that everything changes.`;
    // let localText = `- ${100}쪽 ${23}줄`;

    return (
      <div className="Quote">
        <blockquote className="Item__quote">{quoteText}</blockquote>
        <div className="Item__localRow">
          <p className="Item__local">{localText}</p>
        </div>
      </div>
    );
  }
}
