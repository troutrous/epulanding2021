import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo_png from "../../../../assets/images/logo.png";
import { login } from "../../../../store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  return (
    <div>
      <header id="wrap-header-login" className="bg-white">
        <div className="container">
          <img src={logo_png} alt="Travelo" />
        </div>
      </header>
      <main id="main-login">
        <div className="wrap-login bg-white border-radius">
          <h2 className="title-login text-center">Travelo Login</h2>
          <form onSubmit={handleLogin} className="wrap-form">
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="name"
                className="form-control"
                placeholder="example@gmail.com"
                id="inputUsername"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div className="custom-control custom-checkbox checkbox-login">
              <input
                type="checkbox"
                className="custom-control-input"
                id="rememberCheckbox"
              />
              <label
                className="custom-control-label"
                htmlFor="rememberCheckbox"
              >
                Nhớ tài khoản
              </label>
            </div> */}
            <button className="btn bg-main" type="submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </main>
      <footer id="wrap-footer-login" className="position-absolute w-100">
        <div className="line"></div>
        <p className="copy-right text-center mb-0">
          &copy;<script>document.write(new Date().getFullYear());</script>
          Travelo | All rights reserved <br />
          This template is made with
          <i
            className="fa color-main fa-heart-o"
            aria-hidden="true"
          ></i> by{" "}
          <a
            href="https://www.facebook.com/KharNam.Dev/"
            target="_blank"
            rel="noreferrer"
          >
            Kha Nam
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Login;
