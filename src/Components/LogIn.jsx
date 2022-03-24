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

import {useNavigate, Link} from 'react-router-dom'

const LogIn = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });
  return (
    <div
      className={inView ? "signUpMessage signUpMessageZoom" : "signUpMessage"}
      ref={ref}
    >
      <h1>Welcome back to the best booking platform!</h1>
      <div className="container mt-4">
        <div className="row justify-content-center mt-4">
          <div className="col-6 container-form">
            <h2>Log in</h2>
            <br />
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
            <Button className="btn-form">Log in</Button>
            <p className="BlackText d-flex">Not registered?<Link to="/register" className="formLink">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
