import { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../../store/action/index";
import auth from "../../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/login";
  }
  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.auth.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutUser: () => {
      dispatch(authActions.logoutUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
