import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideNavigation from "../../components/SideNavigation/SideNavigation";

import "./Layout.css";

const layout = (props) => {
  return (
    <Auxiliary>
      {/* <MenuToggle/> */}
      <Toolbar />
      <SideNavigation />
      <main className="content">{props.children}</main>
    </Auxiliary>
  );
};

export default layout;
