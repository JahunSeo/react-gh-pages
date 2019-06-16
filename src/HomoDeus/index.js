import React, { Component } from "react";
import "./index.scss";

import TextTag from "./TextTag";
import Quote from "./Quote";
import { NavList, NavItem } from "./Nav";

export default class HomoDeus extends Component {
  state = {
    mainLang: "ko"
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
          </section>
          <section className="section section--main">
            <div className="Main">
              <TextTag
                tag={"h1"}
                locale={{ en: "Homo Deus", ko: "호모 데우스" }}
                lang={mainLang}
              />
              <TextTag
                tag={"h3"}
                locale={{ en: "Ch1. The New Human Agenda", ko: "" }}
                lang={mainLang}
              />
              <TextTag
                tag={"h4"}
                locale={{ en: "A Gun in Act 1", ko: "" }}
                lang={mainLang}
              />
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
              <TextTag
                tag={"h3"}
                locale={{ en: "Ch3. The Human Spark", ko: "" }}
                lang={mainLang}
              />
              <TextTag
                tag={"h4"}
                locale={{ en: "Dreamtime", ko: "" }}
                lang={mainLang}
              />
              <Quote
                quote={{
                  en: {
                    content: `Sapiens rule the world because only they can weave an intersubjective web of meaning.`,
                    local: { p: 175, r: 14 }
                  }
                }}
                mainLang={mainLang}
              />

              <TextTag
                tag={"h3"}
                locale={{ en: "Ch6. The Modern Covenant", ko: "" }}
                lang={mainLang}
              />
              <TextTag
                tag={"h4"}
                locale={{ en: "The Ark Syndrome", ko: "" }}
                lang={mainLang}
              />

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

              <TextTag
                tag={"h4"}
                locale={{ en: "Upgrading Inequality", ko: "" }}
                lang={mainLang}
              />
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
