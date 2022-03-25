import React from "react";
import "./SignUp.css";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav,
  Navbar,
  Button,
  Container,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

const SingUp = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });
  return (
    <div className="bg">

    <div
      className={inView ? "signUpMessage signUpMessageZoom" : "signUpMessage"}
      ref={ref}
    >
      <h1>Join the best booking platform!</h1>
      <div className="container mt-4">
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 col-sm-12 container-form">
            <h2>Register</h2>
            <br />
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingUsername"
              />
              <label for="floatingUsername">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
              />
              <label for="floatingPassword"> Confirm Password</label>
            </div>
            <div class="input-group form-floating mb-3">
              <div className="form-floating col-6">
                <input
                  type="text"
                  className="form-control"
                  id="floatingFirstName"
                />
                <label for="floatingFirstName">First name</label>
              </div>
              <div className="form-floating col-6">
                <input
                  type="text"
                  className="form-control"
                  id="floatingLastName"
                />
                <label for="floatingLastName">Last Name</label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPhoneNumber"
              />
              <label for="floatingPhoneNumber">Phone number</label>
            </div>
            <button className="btn btn-form">Sign up</button>
            
          </div>
        </div>
      </div>
    </div>
    </ div>
  );
};

export default SingUp;
