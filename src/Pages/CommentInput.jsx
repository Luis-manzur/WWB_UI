import React from 'react';
import '../Components/Components/Banner/Banner.css';
import { useState } from 'react'
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CommentInput = () => {
  const { slugName } = useParams();

  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });

  const HandleChange = ({ target: { comment, value } }) => {
    setUser({ ...user, [comment]: value });
  };

  const [user, setUser] = useState({
    comment: '',
    rating: 5

  });
  const [error, setError] = useState({
    comment: '',
    rating: ''
  });

  const navigate = useNavigate()
  const jsonBody = {
    "message": user.message,
    "rating": user.rating
  }
  const rate = () => {

    fetch('http://142.93.61.14:9000/accommodations/' + slugName + '/rate/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonBody
    }).then(data => {
      if (!data.ok) {
        throw data
      }
      return data.json()
  })
  .then(
    data => {
      navigate('/accommodations/' + slugName)
    }
    ).catch(error => {
      error.json().then((body) => {
        let message = ''
        let rating = ''
        let generic = ''
        if (body.message) {
          message = body.message[0]
        }
        if (body.rating) {
          rating = body.rating[0]
        }
        if (body.non_field_errors) {
          generic = body.non_field_errors[0]
        }
        setError({ message: message, rating: rating, generic: generic })
      })
    })
  }
    
    return (
    <div className="bg">

      <div
        className={inView ? "signUpMessage signUpMessageZoom" : "signUpMessage"}
        ref={ref}
      >
        <h1>Add a comment</h1>
        <div className="container mt-4">
          <div className="row justify-content-center mt-4">
            <form className="col-6 container-form">
              <h2>Comment: </h2>
              {error.generic && <div className="generic-error">error</div>}
              <br />
              <div className="form-floating mb-3" >
                <textarea
                  className="form-control"
                  name="comment"
                  id="comment" onChange={HandleChange}
                  required
                />
                {error.message && <div className="error">{error.message}</div>}

                <label for="floatingInput">Comment</label>
              </div>
              <div className="form-floating mb-3" >
                <input
                  type="text"
                  className="form-control"
                  name="comment"
                  id="comment" onChange={HandleChange}
                  required
                />
                {error.message && <div className="error">{error.message}</div>}

                <label for="floatingInput">Rating</label>
              </div>
              <button className="btn btn-form" onClick={rate}>Publish comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}

export default CommentInput;
