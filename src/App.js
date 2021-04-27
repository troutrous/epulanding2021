import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles/style.css";
import "./assets/styles/fontawesome/css/font-awesome.min.css";
import Login from "./features/admin/pages/login/Login";
import Dashboard from "./features/admin/pages/dashboard.js/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getProvides, getStorage } from "./store/actions";
import Landing from "./features/landing/Landing";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStorage());
    dispatch(getProvides());
  }, [dispatch]);
  const user = useSelector((state) => state.user.user);
  return (
    <Router>
      <Switch>
        {user && <Redirect from="/login" to="/dashboard" />}
        {!user && <Redirect from="/dashboard" to="/login" />}I
        <Route path="/dashboard" component={withRouter(Dashboard)} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
