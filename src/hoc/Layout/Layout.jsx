import React from "react";
import { connect } from "react-redux";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideNavigation from "../../components/SideNavigation/SideNavigation";

import "./Layout.css";

const layout = (props) => {
  return (
    <Auxiliary>
      {/* <MenuToggle/> */}
      <Toolbar user={props.userData} isAuth={props.isAuthenticated} />
      <SideNavigation isAuth={props.isAuthenticated} />
      <main className="content">{props.children}</main>
    </Auxiliary>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(layout);
