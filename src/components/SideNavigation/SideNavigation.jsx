import React from "react";
import NavigationItems from "../Navigation/NavigationItems";

import "./SideNavigation.css";

const SideNavigation = (props) => {
  return (
    <aside className="aside">
      <nav>
        <NavigationItems />
      </nav>
    </aside>
  );
};

export default SideNavigation;
