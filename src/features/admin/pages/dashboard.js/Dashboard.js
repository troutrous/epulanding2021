import React from "react";
import bar_png from "../../../../assets/images/bar.png";
import logo_png from "../../../../assets/images/logo.png";
import favicon_png from "../../../../assets/images/favicon.png";
import icon_detail_png from "../../../../assets/images/icon_detail.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Destination from "../../../../common/components/Destination";
const Dashboard = ({ match }) => {
  return (
    <>
      <header id="wrap-header" className="position-relative">
        <img
          id="show-nav"
          src={bar_png}
          className="position-absolute"
          alt="Bar"
        />
        <div className="title-header">
          <p className="mb-0">Titile</p>
          <p className="mb-0">Travelo | Title</p>
        </div>
      </header>
      <nav id="wrap-sidebar">
        <ul className="bg-white normal position-fixed">
          <li className="d-flex align-items-center justify-content-between">
            <a href="">
              <img src={logo_png} alt="" />
            </a>
            <img id="hide-nav" src={bar_png} alt="" />
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-home" aria-hidden="true"></i> Dashboard{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-plane" aria-hidden="true"></i> Destination{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-pencil-square small" aria-hidden="true"></i>
              Blog{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-envelope small" aria-hidden="true"></i>Contact{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-commenting small" aria-hidden="true"></i>
              Comment{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-tags small" aria-hidden="true"></i>Attributes{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-sign-out" aria-hidden="true"></i> Logout{" "}
            </a>
          </li>
        </ul>
        <ul className="bg-white menu-collapsed position-fixed">
          <li className="d-flex align-items-center justify-content-between">
            <a href="">
              <img src={favicon_png} alt="" />
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-home" aria-hidden="true"></i>{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-plane" aria-hidden="true"></i>
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-pencil-square small" aria-hidden="true"></i>
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-envelope small" aria-hidden="true"></i>{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-commenting small" aria-hidden="true"></i>{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-tags small" aria-hidden="true"></i>{" "}
            </a>
          </li>
          <li className="item-menu">
            <a className="d-flex align-items-center" href="">
              <i className="fa fa-sign-out" aria-hidden="true"></i>{" "}
            </a>
          </li>
        </ul>
      </nav>
      <main id="main-no-sidebar">
        <Router>
          <Switch>
            <Route path={`${match.url}/destination`} component={Destination} />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default Dashboard;
