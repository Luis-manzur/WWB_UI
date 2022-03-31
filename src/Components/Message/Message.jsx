import React from "react";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import '../../Pages/Register/SignUp.css'
import Title from "../Title/Title";
import '../Title/Title.css';
import Banner from "../Components/Banner/Banner";
import SingleImageHero from '../../Pages/AboutUs/SingleImageHero';
import Footer from "../Footer/Footer";

const SuccessVerification = ( {children, message, paragraph, source} ) => {
    const { ref, inView, entry } = useInView({
        threshold: 0.4,
    });

    return (
        <div>
            
                <SingleImageHero src={source}>
                <div className="heroBannerContainer">
                    <Banner title={message} text = {paragraph}>
                        <section className="childrenContainer">
                            {children}
                        </section>
                    </Banner>
                </div>
                </SingleImageHero>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </div>
      
    );
};

export default SuccessVerification;