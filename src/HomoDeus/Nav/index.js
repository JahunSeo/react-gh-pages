import React, { Component } from "react";
import "./index.scss";

import generateID from "../../Util/IDgenerator";

export const NavList = props => {
  return <ul className="NavList">{props.children}</ul>;
};

export class NavItem extends Component {
  render() {
    let { item, lang } = this.props;

    let titleStr;
    if (item.title) {
      let type = typeof item.title;
      if (type === "string") {
        titleStr = item.title;
      } else if (type === "object") {
        titleStr = item.title[lang];
        if (!titleStr) {
          titleStr = item.title[Object.keys(item.title)[0]];
        }
      }
    }

    return (
      <li className="NavItem">
        {titleStr && (
          <a className="NavItem__a" href={`#${generateID(titleStr)}`}>
            {titleStr}
          </a>
        )}
        {item.sub && (
          <NavList>
            {item.sub.map((subItem, index) => {
              return <NavItem item={subItem} key={index} />;
            })}
          </NavList>
        )}
      </li>
    );
  }
}
