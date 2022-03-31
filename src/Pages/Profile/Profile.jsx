import React from 'react';
import { FiUser } from 'react-icons/fi';
import { FaComment } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import '../../Components/AboutWWB/AboutWWB.css';
import Title from '../../Components/Title/Title';
import { useNavigate, Link } from 'react-router-dom'
import Spinner from '../../Components/Spinner';
import './Profile.css'


const Profile = () => {
  const { username } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('name')
    navigate('/')
  }


  useEffect(() => {
    setLoading(true);
    fetch('http://142.93.61.14:9000/users/' + username + '/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') },
    }).then(data => {
      if (!data.ok) {
        throw data
      }
      return data.json()
    })
      .then(
        data => {
          setUser(data)
          setLoading(false);
        }
      ).catch(error => {
        error.json().then((body) => {
          if (body.detail) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            navigate('/login')
          }
        })
      })
  }, []);


  if (loading) {
    return (
      <Spinner />
    )
  }


  return (
    <section className='benefits12'>
      <div className='imgContainerP'>
        <img className='profilepicture' src='https://th.bing.com/th/id/OIP.IcraHngrd1mF7yii1E4muAHaHa?pid=ImgDet&rs=1'></img>
      </div>
      <Title title={user.username} />

      <div className='benefitsCenter'>
        <article className='benefit'>
          <span><FiUser /></span>
          <h6>Name: {user.first_name} {user.last_name}</h6>
        </article>
        <article className='benefit'>
          <span><AiOutlineMail /></span>
          <h6>Email: {user.email}</h6>
        </article>
        <article className='benefit'>
          <span><AiFillPhone /></span>
          <h6>Phone number: {user.phone_number}</h6>
        </article>
        <article className='benefit'>
          <span><FaComment /></span>
          <h6>Comments: {user.profile.comments}</h6>
        </article>
      </div>

      <div className="col-md-12 col-12 float-right">
        <button className="btn btn-logout" data-toggle="modal" data-target="#thanks" onClick={logout}>Log out</button>
      </div>
    </section>

  )
}

export default Profile