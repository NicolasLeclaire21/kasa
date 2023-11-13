import './banner.scss'



function Banner ({image}) {
    return (
        <div className='banner-container'>
            <img className='banner-img' src={image} alt='Bord de mer rocheux'/>
            <p className='banner-text'>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner