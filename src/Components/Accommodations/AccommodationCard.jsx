import { Link } from "react-router-dom";


export function AccommodationCard({accommodation}){

    return (
    <Link to={"/accommodations/" + accommodation.slug_name}>
        <li className="AccommodationCard">
            <img width={345} height={230} className="AccommodationImage" src={accommodation.principal_image} alt={accommodation.name}/>
            <h2>{accommodation.name}</h2>
            <p>{accommodation.rate}</p>
        </li>
    </Link>
)};