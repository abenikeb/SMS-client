import { Component } from "react";
import { connect } from "react-redux";
import withRouter from "../../hoc/WithRouter/WithRouter";
import * as authActions from "../../store/action/index";
import { Navigate } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    this.props.onLogoutUser();
  }
  render() {
    return <Navigate to="/login" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutUser: () => {
      dispatch(authActions.logoutUser());
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Logout));
