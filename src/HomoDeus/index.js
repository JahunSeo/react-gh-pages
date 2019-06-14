import React, { Component } from "react";
import "./index.scss";

import Quote from "./Quote";
import { NavList, NavItem } from "./Nav";
import generateID from "../Util/IDgenerator";

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
                title: "Ch3. The Human Spark",
                sub: [{ title: "Dreamtime" }]
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
                  return <NavItem key={index} item={item} />;
                })}
              </NavList>
            </nav>
          </section>
          <section className="section section--main">
            <div className="Main">
              <h1 className="Main__h1" id={generateID("HomoDeus")}>
                HomoDeus
              </h1>
              <h3
                className="Main__h3"
                id={generateID("Ch1. The New Human Agenda")}
              >
                Ch1. The New Human Agenda
              </h3>
              <h4 className="Main__h4" id={generateID("A Gun in Act 1")}>
                A Gun in Act 1
              </h4>
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
              <h3 className="Main__h3" id={generateID("Ch3. The Human Spark")}>
                Ch3. The Human Spark
              </h3>
              <h4 className="Main__h4" id={generateID("Dreamtime")}>
                Dreamtime
              </h4>
              <Quote
                quote={{
                  en: {
                    content: `Sapiens rule the world because only they can weave an intersubjective web of meaning.`,
                    local: { p: 175, r: 14 }
                  }
                }}
                mainLang={mainLang}
              />
              <h3
                className="Main__h3"
                id={generateID("Ch6. The Modern Covenant")}
              >
                Ch6. The Modern Covenant
              </h3>
              <h4 className="Main__h4" id={generateID("The Ark Syndrome")}>
                The Ark Syndrome
              </h4>
              <Quote
                quote={{
                  en: {
                    content: `There is no justice in history. When disaster strikes, the poor almost always suffer far more than the rich, even if the rich caused the tragedy in the first place. ... Paradoxically, the very power of science may increase the danger, because it makes the rich complacent.`,
                    local: { p: 251, r: 9 }
                  }
                }}
                mainLang={mainLang}
              />
              <h2>Not yet located</h2>
              <h4 className="Main__h4" id={generateID("Upgrading Inequality")}>
                Upgrading Inequality
              </h4>
              <Quote
                quote={{
                  en: {
                    content: `The same logic operates on election day, when the vote of the poor peasant counts for exactly the same as the billionaire's. The liberal solution for social inequality is to give equal value to different human experiences, instead of trying to create the same experiences for everyone. However, will this solution still work once rich and poor are separated not merely by wealth, but also by real biological gaps?`,
                    local: { p: 404, r: 17 }
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
