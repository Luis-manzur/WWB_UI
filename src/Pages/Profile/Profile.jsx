import React, { Component } from 'react';
import { FiUser } from 'react-icons/fi';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import '../../Components/AboutWWB/AboutWWB.css';
import Footer from '../../Components/Footer/Footer'


export default class Profile extends Component {
    
  state = 
    {
        "username": "LuisManzur",
        "first_name": "Luis",
        "last_name": "Manzur",
        "email": "luismanzur91@outlook.com",
        "phone_number": "04123295987",
        "profile": {
            "picture": "",
            "accommodations_booked": 0,
            "comments": 0
        }
    }

  render() {
    return (
      <section className='benefits'>
          <div className='benefitsCenter'>
              <article className ='benefit'>
                  <span><FiUser /></span>
                  <h6>User: {this.state.username}</h6>
                  <h6>Name: {this.state.first_name}{this.state.last_name}</h6>
              </article>
              <article className ='benefit'>
                  <span><AiOutlineMail /></span>
                      <h6>Email: {this.state.email}</h6>
              </article>
              <article className ='benefit'>
                  <span><AiFillPhone /></span>
                      <h6>Phone number: {this.state.phone_number}</h6>
              </article>
          </div>

          <Footer />

          <section className='benefits' >
      <div className='title'>
        </div>
          <div className='benefitsCenter'>
            <article className ='benefit'>
              <p>
                Our vision is to become the leading booking platform in the world, providing millions of customers with our services around the world.
              </p>
            </article>

            <article className ='benefit'>
              <p>
                Our mission is to provide our customers with the best sevice, making available to them thousands of accommodations around the world. 
              </p>
            </article>

            <article className ='benefit'>
              <p>
                Commitment to our clients. At World Wide Booking our clients are our priority, that's why we ae always looking for ways to give them a better service.
              </p>
            </article>

          </div>

      </section>

      </section>
    )
  }
}
        




