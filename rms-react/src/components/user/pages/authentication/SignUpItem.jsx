import React from "react";
import { Link } from "react-router-dom";

const SignUpItem = () => {
  
  return (
    <section className="login">
      <div className="container">
        <div className="auth_div">
          <form>
            <div className="form">
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="user name"
                />
              </div>
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
              <div>
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  placeholder="confirm password"
                />
              </div>
              <button className="button">
                <div>
                  {/* <img src="" alt="" height="15px" width="15px" /> */}
                  <span>Sign Up</span>
                </div>
              </button>
              <div className="forgot">
                <Link to="/login">already have an account ?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpItem;
