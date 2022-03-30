import React from "react";
import "./SignUp.css";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Search = () => {
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
        fetch('http://127.0.0.1:8000/accommodations/', {
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
                // navigate('/verify/success')
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
                <h1>Start Planning your next vacation:  {userEmail}</h1>
                <div className="container mt-4">
                    <div className="row justify-content-center mt-4">
                        <form className="col-md-6 col-sm-12 container-form">
                            <h2>Search Accommodation</h2>
                            <br />
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    onChange={HandleChange}
                                    required
                                />
                                <label for="floatingUsername">City</label>
                            </div>
                            <button className="btn btn-form" onClick={verify}>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </ div>
    );
};

export default Search;