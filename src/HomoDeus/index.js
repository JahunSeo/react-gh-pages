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
            <p>{mainLang}</p>
          </section>
          <section className="section section--main">
            <div className="Main">
              <TextTag tag={"h1"} content={{ id: "h1" }} lang={mainLang} />
              {/* ch1 */}
              <TextTag tag={"h3"} content={{ id: "h3_1" }} lang={mainLang} />
              <TextTag tag={"h4"} content={{ id: "h4_r1" }} lang={mainLang} />
              <Quote quote={{ id: "p_r1" }} lang={mainLang} />
              <Quote quote={{ id: "p_r2" }} lang={mainLang} />
              {/* ch2 */}
              <TextTag tag={"h3"} content={{ id: "h3_2" }} lang={mainLang} />
              {/* ch3 */}
              <TextTag tag={"h3"} content={{ id: "h3_3" }} lang={mainLang} />
              <TextTag tag={"h4"} content={{ id: "h4_r2" }} lang={mainLang} />
              <Quote quote={{ id: "p_r3" }} lang={mainLang} />
              {/* ch4 */}
              <TextTag tag={"h3"} content={{ id: "h3_4" }} lang={mainLang} />
              <TextTag tag={"h4"} content={{ id: "h4_r6" }} lang={mainLang} />
              <Quote quote={{ id: "p_r13" }} lang={mainLang} />
              <TextTag tag={"h4"} content={{ id: "h4_r5" }} lang={mainLang} />
              <Quote quote={{ id: "p_r14" }} lang={mainLang} />
              <Quote quote={{ id: "p_r28" }} lang={mainLang} />
              <Quote quote={{ id: "p_r15" }} lang={mainLang} />
              <Quote quote={{ id: "p_r16" }} lang={mainLang} />
              <Quote quote={{ id: "p_r29" }} lang={mainLang} />

              {/* ch5 */}
              <TextTag tag={"h3"} content={{ id: "h3_5" }} lang={mainLang} />
              <TextTag tag={"h4"} content={{ id: "h4_r8" }} lang={mainLang} />
              <Quote quote={{ id: "p_r17" }} lang={mainLang} />
              <Quote quote={{ id: "p_r31" }} lang={mainLang} />
              <Quote quote={{ id: "p_r33" }} lang={mainLang} />

              <TextTag tag={"h4"} content={{ id: "h4_r7" }} lang={mainLang} />
              <Quote quote={{ id: "p_r18" }} lang={mainLang} />
              <Quote quote={{ id: "p_r32" }} lang={mainLang} />
              <Quote quote={{ id: "p_r19" }} lang={mainLang} />
              <Quote quote={{ id: "p_r20" }} lang={mainLang} />
              <Quote quote={{ id: "p_r21" }} lang={mainLang} />
              <Quote quote={{ id: "p_r30" }} lang={mainLang} />

              {/* ch6 */}
              <TextTag tag={"h3"} content={{ id: "h3_6" }} lang={mainLang} />
              <Quote quote={{ id: "p_r22" }} lang={mainLang} />
              <Quote quote={{ id: "p_r23" }} lang={mainLang} />
              <Quote quote={{ id: "p_r25" }} lang={mainLang} />
              <Quote quote={{ id: "p_r26" }} lang={mainLang} />
              <Quote quote={{ id: "p_r27" }} lang={mainLang} />
              <Quote quote={{ id: "p_r24" }} lang={mainLang} />
              <TextTag tag={"h4"} content={{ id: "h4_r3" }} lang={mainLang} />
              <Quote quote={{ id: "p_r4" }} lang={mainLang} />
              {/* ch7 */}
              <TextTag tag={"h3"} content={{ id: "h3_7" }} lang={mainLang} />
              {/* ch8 */}
              <TextTag tag={"h3"} content={{ id: "h3_8" }} lang={mainLang} />
              {/* ch9 */}
              <TextTag tag={"h3"} content={{ id: "h3_9" }} lang={mainLang} />
              {/* ch10 */}
              <TextTag tag={"h3"} content={{ id: "h3_10" }} lang={mainLang} />
              {/* ch11 */}
              <TextTag tag={"h3"} content={{ id: "h3_11" }} lang={mainLang} />

              <h2>Not yet located</h2>
              <TextTag tag={"h3"} content={{ id: "h4_r4" }} lang={mainLang} />
              <Quote quote={{ id: "p_r5" }} lang={mainLang} />
              <Quote quote={{ id: "p_r6" }} lang={mainLang} />
              <Quote quote={{ id: "p_r7" }} lang={mainLang} />
              <Quote quote={{ id: "p_r8" }} lang={mainLang} />
              <Quote quote={{ id: "p_r9" }} lang={mainLang} />
              <Quote quote={{ id: "p_r10" }} lang={mainLang} />
              <Quote quote={{ id: "p_r11" }} lang={mainLang} />
              <Quote quote={{ id: "p_r12" }} lang={mainLang} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
