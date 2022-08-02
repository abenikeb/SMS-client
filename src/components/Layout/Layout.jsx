import React from "react";
import Auxiliary from "../../hoc/Auxiliary";

import "./Layout.css";

const layout = (props) => {
  return (
    <Auxiliary>
      <div>Toolbar, sidedrwer, backdrop</div>
      <main className="content">{props.children}</main>
    </Auxiliary>
  );
};

export default layout;
