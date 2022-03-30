import React from "react";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import '../../Pages/Register/SignUp.css'
import Title from "../Title/Title";
import '../Title/Title.css';
import Banner from "../Components/Banner/Banner";

const SuccessVerification = ( {children, message, paragraph} ) => {
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
                        <div className="col-6 ">
                            <Banner title={message} text = {paragraph}>
                                {children}
                            </Banner>
                        </div>
                    </div>
                </div>
            </div>
        </ div>
    );
};

export default SuccessVerification;