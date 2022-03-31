import React from "react";
import "./SignUp.css";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const SingUp = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });

  const navigate = useNavigate()

  const [user, setUSer] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    generic: ''
  });

  const HandleChange = ({ target: { name, value } }) => {
    setUSer({ ...user, [name]: value });
  };

  const signup = event => {
    event.preventDefault()
    const jsonBody = JSON.stringify( {
      "username": user.username,
      "email": user.email,
      "password": user.password,
      "password_confirmation": user.passwordConfirmation,
      "first_name": user.firstName,
      "last_name": user.lastName,
      "phone_number": user.phoneNumber

    })
    fetch('http://142.93.61.14:9000/users/signup/', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: jsonBody
    }).then(data => {
      if (!data.ok) {
        throw data
      }
      return data.json()
    })
      .then(
        data => {
          localStorage.setItem('token', data.access_token)
          navigate('/verify')
        }
      ).catch(error => {
        error.json().then((body) => {
          let email = ''
          let password = ''
          let passwordConfirmation = ''
          let generic = ''
          let firstName = ''
          let lastName = ''
          let phoneNumber = ''
          let username = ''

          if (body.username){
            username = body.username[0]
          }
          if (body.email) {
            email = body.email[0]
          }
          if (body.password) {
            password = body.password[0]
          }
          if (body.non_field_errors) {
            generic = body.non_field_errors[0]
          }
          if (body.password_confirmation){
            passwordConfirmation = body.password_confirmation[0]
          }
          if (body.first_name){
            firstName = body.first_name[0]
          }
          if (body.last_name){
            lastName = body.last_name[0]
          }
          if (body.phone_number){
            phoneNumber = body.phone_number[0]
          }
          setError({ email: email, password: password, generic: generic, phoneNumber:phoneNumber, firstName: firstName, lastName: lastName, passwordConfirmation: passwordConfirmation, username: username })
        })
      })
  }

  return (
    <div className="bg">

      <img classname = 'asdfg' src = 'https://cdn.wallpapersafari.com/69/97/mviE5s.jpg'></ img>

    <div
      className={inView ? "signUpMessage signUpMessageZoom" : "signUpMessage"}
      ref={ref}
    >
      <h1>Join the best booking platform!</h1>
      <div className="container mt-4">
        <div className="row justify-content-center mt-4">
          <form className="col-md-6 col-sm-12 container-form">
            <h2>Register</h2>
            {error.generic && <div className="generic-error">{error.generic}</div>}
            <br />
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                onChange={HandleChange}
                required
              />
              {error.username && <div className="error">{error.username}</div>}
              <label for="floatingUsername">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={HandleChange}
                required
              />
              {error.email && <div className="error">{error.email}</div>}
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={HandleChange}
                required
              />
              {error.password && <div className="error">{error.password}</div>}
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="passwordConfrimation"
                name="passwordConfirmation"
                onChange={HandleChange}
                required
              />
              {error.passwordConfirmation && <div className="error">{error.passwordConfirmation}</div>}
              <label for="floatingPassword"> Confirm Password</label>
            </div>
            <div class="input-group form-floating mb-3">
              <div className="form-floating col-6">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={HandleChange}
                  required
                />
                {error.firstName && <div className="error">{error.firstName}</div>}
                <label for="floatingFirstName">First name</label>
              </div>
              <div className="form-floating col-6">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={HandleChange}
                  required
                />
                {error.lastName && <div className="error">{error.lastName}</div>}
                <label for="floatingLastName">Last Name</label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                onChange={HandleChange}
                required
              />
              {error.phoneNumber && <div className="error">{error.phoneNumber}</div>}
              <label for="floatingPhoneNumber">Phone number</label>
            </div>
            <button className="btn btn-form" onClick={signup}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
    </ div>
  );
};

export default SingUp;
