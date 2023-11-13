import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/LOGO.jpg'
 
function Header() {
    return (
        <header>
            <Link to="/">
                <img className='header__logo' src={logo} alt='Logo Kasa' />
            </Link>
            <nav>
                <NavLink className='header__link' to="/">ACCUEIL</NavLink>
                <NavLink className='header__link' to="/A-Propos">A PROPOS</NavLink>
            </nav>
        </header>
    )
}

export default Header