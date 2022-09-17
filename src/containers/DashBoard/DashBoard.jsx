import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { connect } from "react-redux";
import Dashboard from "../../components/Dashboard/Dashboard";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { Navigate } from "react-router-dom";

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
    let authNavigate = null;
    if (!this.props.isAuthenticated) {
      authNavigate = <Navigate to="/login" />;
    }

    const { salesData, infoGraphicData } = this.state;
    return (
      <Auxiliary>
        {authNavigate}
        <Dashboard salesData={salesData} infoGraphicData={infoGraphicData} />
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(withErrorHandler(DashBoard));
