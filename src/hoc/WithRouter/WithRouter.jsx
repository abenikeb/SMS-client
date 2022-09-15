import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const prevRoute = useLocation();

  return (
    <WrappedComponent
      {...props}
      params={params}
      navigate={navigate}
      prevRoute={prevRoute}
    />
  );
};

export default withRouter;
