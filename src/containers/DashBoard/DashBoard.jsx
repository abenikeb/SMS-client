import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

import Dashboard from "../../components/Dashboard/Dashboard";

class DashBoard extends Component {
  state = {
    salesData: [
      {
        title: 200,
        sub_title: "Number of sales genereted",
      },
      {
        title: 100,
        sub_title: "Active Sales",
      },
      {
        title: 150,
        sub_title: "Number of sales genereted",
      },
    ],

    infoGraphicData: [
      {
        title: "On Going Sales",
        total: 6700,
        icon: "",
        sub_title: "Number of sales genereted",
        description: "Number of sales genereted on 2 mothes",
        stages: [],
      },
      {
        title: "Customer Relations",
        total: `${67}%`,
        icon: "",
        sub_title: "Customer Relations",
        description: "Number of sales genereted on 2 mothes",
        stages: [],
      },
    ],
  };

  render() {
    const { salesData, infoGraphicData } = this.state;
    return (
      <Auxiliary>
        <Dashboard salesData={salesData} infoGraphicData={infoGraphicData} />
      </Auxiliary>
    );
  }
}

export default DashBoard;
