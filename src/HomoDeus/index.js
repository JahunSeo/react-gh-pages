import React, { Component } from "react";
import "./index.scss";

import Quote from "./Quote";

const NavItem = props => {
  let { item } = props;
  return (
    <li className="NavItem">
      {item.title && <a className="NavItem__a">{item.title}</a>}
      {item.sub && (
        <ul className="NavList">
          {item.sub.map((subItem, index) => {
            return <NavItem item={subItem} key={index} />;
          })}
        </ul>
      )}
    </li>
  );
};

export default class HomoDeus extends Component {
  state = {
    mainLang: "en"
  };

  render() {
    let { mainLang } = this.state;

    let navArray = [
      {
        title: "HomoDeus",
        sub: [
          {
            title: null,
            sub: [
              {
                title: "Ch1. The New Human Agenda",
                sub: [{ title: "A Gun in Act 1" }]
              }
            ]
          },
          {
            title: "PART 1",
            sub: [
              {
                title: "ch2",
                sub: []
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
              <ul className="NavList">
                {navArray.map((item, index) => {
                  return <NavItem key={index} item={item} />;
                })}
              </ul>

              <ul className="NavList">
                <li className="NavItem">
                  <a className="NavItem__a">HomoDeus</a>
                  <ul className="NavList">
                    <li className="NavItem">
                      <ul className="NavList">
                        <li className="NavItem">
                          <a className="NavItem__a">
                            Ch1. The New Human Agenda
                          </a>
                          <ul className="NavList">
                            <li className="NavItem">
                              <a className="NavItem__a">A Gun in Act 1</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </section>
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
