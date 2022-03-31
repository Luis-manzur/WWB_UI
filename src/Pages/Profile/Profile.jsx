import React, { Component } from 'react';
import { FiUser } from 'react-icons/fi';
import { FaComment, FaBookmark } from 'react-icons/fa';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import '../../Components/AboutWWB/AboutWWB.css';
import Footer from '../../Components/Footer/Footer'
import Title from '../../Components/Title/Title';


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
      <section className='benefits12'>
        <div className = 'imgContainerP'>  
          <img className = 'profilepicture' src = 'https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/no-profile-picture.png'></img>
        </div>
        <Title title = {this.state.username} />

          <div className='benefitsCenter'>
              <article className ='benefit'>
                  <span><FiUser /></span>
                  <h6>Name: {this.state.first_name} {this.state.last_name}</h6>
              </article>
              <article className ='benefit'>
                  <span><AiOutlineMail /></span>
                      <h6>Email: {this.state.email}</h6>
              </article>
              <article className ='benefit'>
                  <span><AiFillPhone /></span>
                      <h6>Phone number: {this.state.phone_number}</h6>
              </article>
              <article className ='benefit'>
                  <span><FaComment /></span>
                  <h6>Comments: {this.state.comments}</h6>
              </article>
          </div>

          <Footer />

          <section className='benefits' >
      

      </section>

      </section>
    )
  }
}
        




