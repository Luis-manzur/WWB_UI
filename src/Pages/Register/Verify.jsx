import React from "react";
import "./SignUp.css";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Verify = () => {
    const userEmail = localStorage.getItem('email')

    const { ref, inView, entry } = useInView({
        threshold: 0.4,
    });

    const [user, setUSer] = useState({
        token: ''
    });
    const [error, setError] = useState({
        token: '',
        generic: ''
    });

    const navigate = useNavigate()

    const HandleChange = ({ target: { name, value } }) => {
        setUSer({ ...user, [name]: value });
    };

    const verify = event => {
        event.preventDefault()
        const jsonBody = JSON.stringify({
            "token": user.token,

        })
        fetch('http://142.93.61.14:9000/users/verify/', {
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
                localStorage.setItem('token', data.access_token)
                localStorage.clear()
                navigate('/verify/success')
              }
            ).catch(error => {
              error.json().then((body) => {
                let token = ''
                let generic = ''
                if (body.token) {
                  token = body.token[0]
                }
                if (body.non_field_errors) {
                  generic = body.non_field_errors[0]
                }
                setError({ token: token, generic: generic })
              })
            })
        }

    return (
        <div className="bg">

            <div
                className={inView ? "signUpMessage signUpMessageZoom" : "signUpMessage"}
                ref={ref}
            >
                <h1>We've send you a verification code to:  {userEmail}</h1>
                <p className="warning">Remember to check spam.</p>
                <div className="container mt-4">
                    <div className="row justify-content-center mt-4">
                        <form className="col-md-6 col-sm-12 container-form">
                            <h2>Verification</h2>
                            {error.generic && <div className="generic-error">{error.generic}</div>}
                            <br />
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="token"
                                    name="token"
                                    onChange={HandleChange}
                                    required
                                />
                                {error.token && <div className="error">{error.token}</div>}
                                <label for="floatingUsername">Verification Code</label>
                            </div>
                            <button className="btn btn-form" onClick={verify}>Verify</button>
                        </form>
                    </div>
                </div>
            </div>
        </ div>
    );
};

export default Verify;