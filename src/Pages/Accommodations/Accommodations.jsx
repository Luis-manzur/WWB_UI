import { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './Accommodations.css'
import Spinner from '../../Components/Spinner';

function Accommodations() {
    const { city } = useParams();
    const navigate = useNavigate();
    const [accommodations, setAccommodations]= useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({
        city: '',
        generic: ''
    });

    useEffect(() => {
        setLoading(true);
        fetch('http://142.93.61.14:9000/accommodations/?city=' + city, {
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
                    setAccommodations(data)
                    setLoading(false);
                }
            ).catch(error => {
                error.json().then((body) => {
                    let generic = ''
                    if (body.non_field_errors) {
                        generic = body.non_field_errors[0]
                    }
                    setError({ generic: generic })
                    })
            })
        }, []);

    if(loading){
        return(
            <Spinner />
        )
    }
    
    return (
        <ul className='gridAccommodations'>
            {accommodations.map((accommodation) => <li className="AccommodationCard">
                    <img  className="AccommodationImage" src={'https://res.cloudinary.com/universidad-metropolitana/' + accommodation.principal_image} alt={accommodation.name} />
                    <div>
                        <Link to={"/accommodations/" + accommodation.slug_name} className='AccommodationName'><h2 className='AccommodationName' >{accommodation.name}</h2></Link>
                        <br />
                        <p className='AccommodationRating'>Rating: {accommodation.rating} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg></p>
                    </div>
                </li>)}
            <div></div> 
        </ul>
        
    )
}

export default Accommodations