import React, { Component } from "react";
import "./index.scss";

import TextTag from "./TextTag";
import Quote from "./Quote";
import { NavList, NavItem } from "./Nav";

export default class HomoDeus extends Component {
  state = {
    mainLang: "en"
  };

  handleLangBtn = () => {
    this.setState(state => ({
      mainLang: state.mainLang === "ko" ? "en" : "ko"
    }));
  };

  render() {
    let { mainLang } = this.state;

    let navArray = [
      {
        title: { en: "Homo Deus", ko: "호모 데우스" },
        sub: [
          {
            title: null,
            sub: [
              {
                title: { en: "Ch1. The New Human Agenda", ko: "" },
                sub: [{ title: { en: "A Gun in Act 1", ko: "" } }]
              }
            ]
          },
          {
            title: { en: "PART 1", ko: "" },
            sub: [
              {
                title: { en: "Ch3. The Human Spark", ko: "" },
                sub: [{ title: { en: "Dreamtime", ko: "" } }]
              }
            ]
          }
        ]
      }
    ];

    return (
      <div className="Page--HomoDeus">
        <div className="Page__inner">
          <section className="section section--nav">
            <nav className="Nav">
              <NavList>
                {navArray.map((item, index) => {
                  return <NavItem key={index} item={item} lang={mainLang} />;
                })}
              </NavList>
            </nav>
            <button onClick={this.handleLangBtn}>ko/en</button>
            <p>{mainLang}</p>
          </section>
          <section className="section section--main">
            <div className="Main">
              <TextTag tag={"h1"} content={{ id: "h1" }} lang={mainLang} />
              <TextTag tag={"h3"} content={{ id: "h3_1" }} lang={mainLang} />
              <TextTag tag={"h4"} content={{ id: "h4_r1" }} lang={mainLang} />
              <Quote quote={{ id: "p_r1" }} lang={mainLang} />
              <Quote quote={{ id: "p_r2" }} lang={mainLang} />
              <TextTag tag={"h3"} content={{ id: "h3_3" }} lang={mainLang} />
              <TextTag tag={"h3"} content={{ id: "h4_r2" }} lang={mainLang} />
              <Quote quote={{ id: "p_r3" }} lang={mainLang} />
              <TextTag tag={"h3"} content={{ id: "h3_6" }} lang={mainLang} />
              <TextTag tag={"h3"} content={{ id: "h4_r3" }} lang={mainLang} />
              <Quote quote={{ id: "p_r4" }} lang={mainLang} />

              <h2>Not yet located</h2>
              <TextTag tag={"h3"} content={{ id: "h4_r4" }} lang={mainLang} />
              <Quote quote={{ id: "p_r5" }} lang={mainLang} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
