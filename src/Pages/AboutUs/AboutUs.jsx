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
        <Banner title='About us'>
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

      <Title title='Mission, Vision & Values'></Title>

      <section className={inView ? 'benefitsObserve benefitsObserveZoom' : 'benefitsObserve'} ref={ref}>
      <div className='title'>
        </div>
          <div className='benefitsCenterObserve'>
            <article className ='benefitObserve'>
              <Title title='Our vision'></Title>
              <p>
                Our vision is to become the leading booking platform in the world, providing millions of customers with our services around the world.
              </p>
            </article>

            <article className ='benefitObserve'>
            <Title title='Our mission'></Title>
              <p>
                Our mission is to provide our customers with the best sevice, making available to them thousands of accommodations around the world. 
              </p>
            </article>

            <article className ='benefitObserve'>
              <Title title='Our values'></Title>
              <p>
                Commitment to our clients. At World Wide Booking our clients are our priority, that's why we ae always looking for ways to give them a better service.
              </p>
            </article>

          </div>

      </section>

      <Title title='What do we offer?'></Title>

      <section className='benefits'>
        <div className='benefitsCenter'>
          <article className ='benefit'>
              <span><RiReservedLine /></span>
              <h5>Booking engine</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima excepturi 
                illum tempora cupiditate sunt eum deserunt inventore atque debitis?
                </p>
          </article>

      
          <article className ='benefit'>
              <span><MdPayments /> </span>
              <h5>Online payment system</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit minima excepturi 
                illum tempora cupiditate sunt eum deserunt inventore atque debitis?
                </p>
          </article>

          <article className ='benefit'>
              <span><BiHotel /> </span>
              <h5>Accommodation search engine</h5>
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