import React from 'react';
import './SignUp.css';
import { useInView } from 'react-intersection-observer';

const SingUp = () => {

  const{ ref, inView, entry } = useInView({
    threshold: 0.4,

})
  return (
    <div className= {inView ? 'signUpMessage signUpMessageZoom' : 'signUpMessage'} ref={ref}>
        <h1>Que esperas? Únete a la mejor plataforma de booking!</h1>
        <p>Registrarme</p>
    </div>
  )
}

export default SingUp