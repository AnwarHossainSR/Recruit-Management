import React from "react";
import { Link } from "react-router-dom";
import github from "../../../../assets/images/github.svg";
import google from "../../../../assets/images/google.svg";

const LoginItem = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="auth_div">
          <form>
            <div className="form">
              <div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="user email"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="user password"
                />
              </div>
              <button className="button">
                <div>
                  {/* <img src="" alt="" height="15px" width="15px" /> */}
                  <span>Login</span>
                </div>
              </button>
              <div className="forgot">
                <Link to="/signup">Dont't have any account ?</Link>
                <Link to="/forgot-password">forgot your password ?</Link>
              </div>
              <div className="social">
                <img src={github} alt="github logo" />
                <img src={google} alt="google logo" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginItem;
