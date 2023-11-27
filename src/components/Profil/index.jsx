import './profil.scss'

function Profil ({nom, image}) {
    return (
        <div className='profil'>
            <p className='profil__nom'>{nom}</p>
            <img className='profil__img' src={image} alt="" />
        </div>
    )
}

export default Profil