import React from "react";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import '../../Pages/Register/SignUp.css'
import Title from "../Title/Title";
import '../Title/Title.css';
import Banner from "../Components/Banner/Banner";
import MessageHero from './MessageHero'; 


const MessageBanner = ( {children, message, paragraph, source} ) => {
    
  const { ref, inView, entry } = useInView({
        threshold: 0.4,
    });

    return (
        <div>
          <MessageHero src={source}>
          <div className="heroBannerContainer">
              <Banner title={message} text = {paragraph}>
                  <section className="childrenContainer">
                      {children}
                  </section>
              </Banner>
          </div>
          </MessageHero>
      </div>
      
    );
};

export default MessageBanner;