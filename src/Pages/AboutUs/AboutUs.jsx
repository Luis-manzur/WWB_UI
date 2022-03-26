import React from 'react';
import SingleImageHero from './SingleImageHero';
import Title from '../../Components/Title/Title';
import '../../Components/Components/Banner/Banner';
import Banner from '../../Components/Components/Banner/Banner';
import './AboutUs.css';
import '../../Components/AboutWWB/AboutWWB.css';
import LandingPage from '../LandingPage/LandingPage';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Footer from '../../Components/Footer/Footer';
import { RiReservedLine } from 'react-icons/ri';
import { MdPayments } from 'react-icons/md';
import { BiHotel } from 'react-icons/bi';


/* El estilo para el texto y el banner de misión, valor y visión estan en aboutwwb.css */


function AboutUs() {

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <div>
      <SingleImageHero src={'https://www.theluxurysafaricompany.com/app/uploads/2019/09/miavana7.jpg'}>
        <Banner title='Quienes somos?'>
         <Link to='/' element={<LandingPage/>} className = 'landingPageLink'>Home</Link>
        </Banner>
      </SingleImageHero>
      <br></br>
      <Title title='World Wide Booking'></Title>

      <div className='texto'>
        <h5>
          En World Wide Booking queremos apoyarte al momento de planificar tus viajes Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Eum sit laudantium, ducimus culpa cupiditate perferendis esse tenetur aliquid repudiandae doloremque, suscipit error cum neque fugit pariatur quam iure qui 
          commodi id totam temporibus accusamus quisquam? Voluptas velit necessitatibus tenetur cupiditate, ullam aperiam saepe facere sequi ipsum corrupti, fuga illum 
          ducimus!
        </h5>
      </div>

      <Title title='Misión, visión y valores'></Title>

      <section className={inView ? 'benefitsObserve benefitsObserveZoom' : 'benefitsObserve'} ref={ref}>
      <div className='title'>
        </div>
          <div className='benefitsCenterObserve'>
            <article className ='benefitObserve'>
              <Title title='Nuestra visión'></Title>
              <p>
                Nuestra visión es conventirnos en la plataforma lider de booking en el mundo, 
                brindándole a millones de clientes nuestros servicios alrededor del mundo.
              </p>
            </article>

            <article className ='benefitObserve'>
            <Title title='Nuestra misión'></Title>
              <p>
                Nuestra misión es brindarle a nuestros clientes el mejor sevicio, pondiendo a su
                alcance miles de establecimientos alrededor del mundo.
              </p>
            </article>

            <article className ='benefitObserve'>
              <Title title='Nuestros valores'></Title>
              <p>
                Compromiso con nuestros clientes. En World Wide Booking nuestros clientes son
                prioridad para nosotros, es por esto que siempre buscamos maneras de brindarles 
                un mejor servicio.
              </p>
            </article>

          </div>

      </section>

      <Title title='Que ofrecemos?'></Title>

      <section className='benefits'>
        <div className='benefitsCenter'>
          <article className ='benefit'>
              <span><RiReservedLine /></span>
              <h5>Sistema de reservaciones</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima excepturi 
                illum tempora cupiditate sunt eum deserunt inventore atque debitis?
                </p>
          </article>

      
          <article className ='benefit'>
              <span><MdPayments /> </span>
              <h5>Sistema de pagos online</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima excepturi 
                illum tempora cupiditate sunt eum deserunt inventore atque debitis?
                </p>
          </article>

          <article className ='benefit'>
              <span><BiHotel /> </span>
              <h5>Búsqueda de establecimientos</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima excepturi 
                illum tempora cupiditate sunt eum deserunt inventore atque debitis?
                </p>
          </article>

          <article className ='benefit'>
              <span><BiHotel /> </span>
              <h5>Búsqueda de establecimientos</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima excepturi 
                illum tempora cupiditate sunt eum deserunt inventore atque debitis?
                </p>
          </article>


        </div>
      </section>



      <Footer></Footer>
    )

    </div>
  )
}

export default AboutUs