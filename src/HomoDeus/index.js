import React, { Component } from "react";
import "./index.scss";

import Quote from "./Quote";

export default class HomoDeus extends Component {
  state = {
    mainLang: "en"
  };

  render() {
    let { mainLang } = this.state;

    return (
      <div className="Page--HomoDeus">
        <div className="Page__inner">
          <section className="section section--nav">nav</section>
          <section className="section section--main">
            <div className="Main">
              <h1 className="Main__h1">HomoDeus</h1>
              <h3 className="Main__h3">Ch1. The New Human Agenda</h3>
              <h4 className="Main__h4">A Gun in Act 1</h4>
              <Quote
                quote={{
                  en: {
                    content: `History has witnessed the rise and fall of many religions, empires, and cultures. Such upheavals are not necessarily bad.`,
                    local: { p: 77, r: 31 }
                  }
                }}
                mainLang={mainLang}
              />
              <Quote
                quote={{
                  en: {
                    content: `Looking back, many think that the downfall of the pharaohs and the death of God were both positive developments. Maybe the collapse of humanism will also be beneficial. People are usually afraid of change because they fear the unknown. But the single greatest constant of history is that everything changes.`,
                    local: { p: 78, r: 15 }
                  }
                }}
                mainLang={mainLang}
              />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
