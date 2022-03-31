import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import '../Accommodations/Accommodations.css'

import Spinner from '../../Components/Spinner';
import AccommodationBanner from '../../Components/AccommodationBanner/AccommodationBanner';

function AccommodationDetail() {
    const { slugName } = useParams();
    const [accommodation, setAccommodations] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({
        city: '',
        generic: ''
    });

    useEffect(() => {
        setLoading(true);
        fetch('http://127.0.0.1:8000/accommodations/' + slugName + '/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
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

    if (loading) {
        return (
            <Spinner />
        )
    }

    return (
        <div>
            {<AccommodationBanner message={accommodation.name} paragraph='Do not miss the best prices!' source={'https://res.cloudinary.com/universidad-metropolitana/' + accommodation.principal_image}>
                <Link to={"/accommodations/" + slugName + '/reserve'} className="btn btn-form">Book Now</Link>
            </AccommodationBanner>}
            <ul className='gridAccommodations'>
                {accommodation.rooms.map((room) => <li className="AccommodationCard">
                    <img className="AccommodationImage" src={'https://res.cloudinary.com/universidad-metropolitana/' + accommodation.principal_image} alt={accommodation.name} />
                    <div>
                        <h2 className='AccommodationName' >{room.name}</h2>
                        <br />
                        <p className='AccommodationRating'>Capacity: {room.capacity} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg></p>
                        <p className='AccommodationRating'>Beds: {room.beds}</p>
                    </div>
                </li>)}
                <div></div>
            </ul>
        </div>


    )
}

export default AccommodationDetail