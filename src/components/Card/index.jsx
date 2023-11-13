import { Link } from "react-router-dom";
import './card.scss'

function Card({id, title, cover}) {
    return (
        <Link className="card__link" to={`/logement/${id}`}>
            <div key={id} className="card">
                <img className="card__image" src={cover} alt="tagueule"/>
                <p className="card__titre">{title}</p>
            </div>
        </Link>
    )
}

export default Card