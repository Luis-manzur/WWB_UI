import React from "react";
import { useState } from 'react'
import "./LogIn.css";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";

import { useNavigate, Link } from 'react-router-dom'
import GoogleSocialAuth from "../GoogleLogin/GoogleLogin";

const LogIn = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
    generic: '',
  });

  const navigate = useNavigate()

  const HandleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });

  const login = event => {
    event.preventDefault()
    setError('')
    const jsonBody = JSON.stringify({
      "email": user.email,
      "password": user.password
    })
    fetch('https://worldwidebooking-mteim.ondigitalocean.app/users/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonBody
    }).then(data => {
      if (!data.ok) {
        throw data
      }
      return data.json()
    })
      .then(
        data => {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          localStorage.removeItem('name')
          localStorage.setItem('token', 'Token ' + data.access_token)
          localStorage.setItem('user', data.user.username)
          localStorage.setItem('name', data.user.first_name + ' ' + data.user.last_name)
          navigate('/')
        }
      ).catch(error => {
        error.json().then((body) => {
          let email = ''
          let password = ''
          let generic = ''
          if (body.email) {
            email = body.email[0]
          }
          if (body.password) {
            password = body.password[0]
          }
          if (body.non_field_errors) {
            generic = body.non_field_errors[0]
          }
          setError({ email: email, password: password, generic: generic })
        })
      })
  }

  return (
    <div className="bg">

      <div
        className={inView ? "signUpMessage signUpMessageZoom" : "signUpMessage"}
        ref={ref}
      >
        <h1>Welcome Back!</h1>
        <div className="container mt-4">
          <div className="row justify-content-center mt-4">
            <form className="col-6 container-form">
              <h2>Log in</h2>
              {error.generic && <div className="generic-error">{error.generic}</div>}
              <br />
              <div className="form-floating mb-3" >
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email" onChange={HandleChange}
                  required
                />
                {error.email && <div className="error">{error.email}</div>}
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  onChange={HandleChange}
                  required
                />
                {error.password && <div className="error">{error.password}</div>}
                <label for="floatingPassword">Password</label>
              </div>
              <button className="btn btn-form" onClick={login}>Log in</button>
              <GoogleSocialAuth/>
              <p className="WhiteText d-flex">Not registered?<Link to="/register" className="formLink">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
