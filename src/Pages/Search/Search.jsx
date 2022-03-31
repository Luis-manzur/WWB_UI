import React from "react";
import "./search.css";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const Search = () => {
    // const userEmail = localStorage.getItem('email')

    const { ref, inView, entry } = useInView({
        threshold: 0.4,
    });

    const [city, setCity] = useState({
        city: ''
    })
    
    const navigate = useNavigate()

    const HandleChange = ({ target: { name, value } }) => {
        setCity({ ...city, [name]: value });
    };

    const search = event => {
        event.preventDefault()

        navigate("/accommodations/search/" + city.city)
    }

    return (
        <div className="bg">
            <div
                className={inView ? "signUpMessage signUpMessageZoom" : "signUpMessage"}
                ref={ref}>
                <h1>Start Planning your next vacation </h1>
                <div className="container mt-4">
                    <div className="row justify-content-center mt-4">
                        <form className="col-md-6 col-sm-12 container-form">
                            <h2>Search Accommodation</h2>
                            <br />
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    onChange={HandleChange}
                                    required
                                />
                                <label for="floatingUsername">City</label>
                            </div>
                            <button className="btn btn-form" onClick={search}>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </ div>
    );
};

export default Search;