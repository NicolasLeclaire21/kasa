import './404.scss'

function Error404() {
    return (
        <div className='erreur'>
            <h1 className='title'>404</h1>
            <p className='text'>Oups! La page que vous demandez n'existe pas.</p>
            <a className='link' href="/"><p className='link'>Retourner sur la page d’accueil</p></a>
        </div>
    )
}
 
export default Error404