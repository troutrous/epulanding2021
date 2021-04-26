import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles/style.css";
import "./assets/styles/fontawesome/css/font-awesome.min.css";
import Login from "./features/admin/pages/login/Login";
import Dashboard from "./features/admin/pages/dashboard.js/Dashboard";
import { useDispatch } from "react-redux";
import { getProvides } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvides());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/landing" />
      </Switch>
    </Router>
  );
};

export default App;
