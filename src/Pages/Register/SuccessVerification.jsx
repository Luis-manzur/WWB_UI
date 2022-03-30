import React from "react";
import "./SignUp.css";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import {Link } from 'react-router-dom'

const SuccessVerification = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0.4,
    });

    return (
        <div className="bg">

            <div
                className={inView ? "signUpMessage signUpMessageZoom" : "signUpMessage"}
                ref={ref}
            >
                <div className="container mt-4">
                    <div className="row justify-content-center mt-4">
                        <div className="col-6 container-form">
                            <h1>Congratulations, now go visit the world!</h1>
                            <Link to="/login" className="btn btn-form"> Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </ div>
    );
};

export default SuccessVerification;