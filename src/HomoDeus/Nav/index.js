import React, { Component } from "react";
import "./index.scss";

import generateID from "../../Util/IDgenerator";

export const NavList = props => {
  return <ul className="NavList">{props.children}</ul>;
};

export class NavItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <li className="NavItem">
        {item.title && (
          <a className="NavItem__a" href={`#${generateID(item.title)}`}>
            {item.title}
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
