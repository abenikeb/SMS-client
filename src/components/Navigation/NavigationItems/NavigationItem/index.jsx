import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavigationItem.css";

class NavigationItem extends Component {
  state = {
    show: false,
  };

  handleNavigationPannel = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    let collapse_constent_wrap = [
      "collapse-y-content",
      "collapse-y-content-close",
    ];
    if (this.state.show) {
      collapse_constent_wrap = [
        "collapse-y-content",
        "collapse-y-content-open",
      ];
    }
    return (
      // <div>
      //   {this.props.label && (
      //     <div className="text-sm font-semibold text-primary">
      //       <div className="flex flex-row justify-between px-4">
      //         <span>
      //           <FontAwesomeIcon icon={this.props.icon} className="text-lg" />
      //           {"  "}
      //           {this.props.label}
      //         </span>
      //         <span>
      //           <FontAwesomeIcon icon="fa-solid fa-caret-down text-lg" />
      //         </span>
      //       </div>
      //     </div>
      //   )}

      //   <li className="pl-6 text-sm">
      //     <NavLink to={this.props.to} exact={this.props.exact}>
      //       {/* {this.props.img ? (
      //         <img src={this.props.img} alt="dashboard_icon" className="w-5" />
      //       ) : (
      //         <FontAwesomeIcon icon={this.props.icon} className="text-lg" />
      //       )} */}
      //       {this.props.page}
      //     </NavLink>
      //   </li>
      // </div>
      // <div
      //   tabIndex={0}
      //   className="collapse collapse-arrow border bg-gray-50 rounded-box"
      // >
      //   <div className="collapse-title text-xl font-medium">{this.props.label}</div>
      //   <div className="collapse-content">
      //     {this.props.items.map((item) => (
      //       <li className="text-sm">
      //         <NavLink to={item.to} exact={item.exact}>
      //           {item.page}
      //         </NavLink>
      //       </li>
      //     ))}
      //   </div>
      // </div>

      <div className="collapse-y">
        <div className="collapse-header" onClick={this.handleNavigationPannel}>
          <span className="flex item-center gap-2 justify-center items-center">
            <FontAwesomeIcon icon={this.props.icon} />
            {this.props.label}
          </span>
          <span>
            {this.state.show ? (
              <FontAwesomeIcon icon="fa-solid fa-caret-up" />
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-caret-down" />
            )}
          </span>
        </div>
        <div className={collapse_constent_wrap.join(" ")}>
          {this.props.items.map((item) => (
            <>
              <li className="text-sm">
                <NavLink to={item.to} exact={item.exact}>
                  <FontAwesomeIcon icon="fa-solid fa-list text-xs" />
                  {item.page}
                </NavLink>
              </li>
              <hr />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default NavigationItem;
