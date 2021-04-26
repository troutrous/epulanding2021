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
  Link,
} from "react-router-dom";
import Destination from "../../../../common/components/Destination";
import Posts from "../../../../common/components/Posts";
import { logout } from "../../../../store/actions/user.action";
import { useDispatch } from "react-redux";
const Dashboard = ({ match }) => {
  const dispatch = useDispatch();
  return (
    <>
      {/* <header id="wrap-header" className="position-relative">
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
      </header> */}
      <nav id="wrap-sidebar">
        <ul className="bg-white normal position-fixed">
          <li className="d-flex align-items-center justify-content-center">
            <Link to={`${match.url}`}>
              <img src={logo_png} alt="" />
            </Link>
            {/* <img id="hide-nav" src={bar_png} alt="" /> */}
          </li>
          {/* <li className="item-menu">
            <Link className="d-flex align-items-center" href="">
              <i className="fa fa-home" aria-hidden="true"></i>Quản lý chung
            </Link>
          </li> */}
          <li className="item-menu">
            <Link
              className="d-flex align-items-center"
              to={`${match.url}/destination`}
            >
              <i className="fa fa-plane" aria-hidden="true"></i>Cập nhật thông
              tin
            </Link>
          </li>
          <li className="item-menu">
            <Link
              className="d-flex align-items-center"
              to={`${match.url}/posts`}
            >
              <i className="fa fa-pencil-square small" aria-hidden="true"></i>
              Quản lý bài viết
            </Link>
          </li>
          {/* <li className="item-menu">
            <Link className="d-flex align-items-center" href="">
              <i className="fa fa-envelope small" aria-hidden="true"></i>Contact{" "}
            </Link>
          </li> */}
          <li className="item-menu">
            <Link
              className="d-flex align-items-center"
              to="/login"
              onClick={() => dispatch(logout())}
            >
              <i className="fa fa-sign-out" aria-hidden="true"></i> Đăng xuất
            </Link>
          </li>
        </ul>
        {/* <ul className="bg-white menu-collapsed position-fixed">
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
        </ul> */}
      </nav>
      <main id="main-no-sidebar">
        <Switch>
          <Redirect
            exact
            from={`${match.url}`}
            to={`${match.url}/destination`}
          />
          <Route path={`${match.url}/posts`} component={Posts} />
          <Route path={`${match.url}/destination`} component={Destination} />
        </Switch>
      </main>
    </>
  );
};

export default Dashboard;
