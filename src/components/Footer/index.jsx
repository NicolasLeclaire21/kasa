import logo from '../../assets/LOGO_BLANC.png'
import './footer.scss'

function Footer () {
    return (
        <footer>
            <img className='logo-footer' src={logo} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer